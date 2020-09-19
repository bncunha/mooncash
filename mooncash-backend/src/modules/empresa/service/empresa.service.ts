import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from 'src/models/Empresa.model';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from '../dto/createEmpresa.dto';

@Injectable()
export class EmpresaService {

  constructor(
    @InjectRepository(Empresa) private empresaRepository: Repository<Empresa>) {
  }

  criar(criarEmpresaDto: CreateEmpresaDto) {
    const novaEmpresa: Empresa = Object.assign(criarEmpresaDto, {});
    return this.empresaRepository.save(novaEmpresa);
  }
}
