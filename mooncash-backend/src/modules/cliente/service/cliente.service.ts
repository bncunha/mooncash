import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/models/Cliente.model';
import { Empresa } from 'src/models/Empresa.model';
import { Repository } from 'typeorm';
import { ClienteDto } from '../dto/criarCliente.dto';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
    @InjectRepository(Empresa) private empresaRepository: Repository<Empresa>,
  ) {}

  async ciarCliente(clienteDto: ClienteDto) {
    const cliente = new Cliente();
    Object.assign(cliente, clienteDto);
    cliente.empresa = await this.empresaRepository.findOneOrFail(clienteDto.idEmpresa);
    return this.clienteRepository.save(cliente);
  }

  async atualizarCliente(clienteDto: ClienteDto, idCliente: number) {
    const cliente = await this.clienteRepository.findOneOrFail(idCliente);
    Object.assign(cliente, clienteDto);
    console.log(cliente);
    return this.clienteRepository.save(cliente);
  }
}
