import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/models/Cliente.model';
import { Empresa } from 'src/models/Empresa.model';
import { Repository } from 'typeorm';
import { CriarClienteDto } from '../dto/criarCliente.dto';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
    @InjectRepository(Empresa) private empresaRepository: Repository<Empresa>,
  ) {}

  async ciarCliente(clienteDto: CriarClienteDto) {
    const cliente = new Cliente();
    Object.assign(cliente, clienteDto);
    cliente.empresa = await this.empresaRepository.findOneOrFail(clienteDto.idEmpresa);
    return this.clienteRepository.save(cliente);
  }
}
