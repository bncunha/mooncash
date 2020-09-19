import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from 'src/models/Empresa.model';
import { Repository } from 'typeorm';
import { CriarAtualizarEmpresaDto } from '../dto/createEmpresa.dto';

@Injectable()
export class EmpresaService {

  constructor(
    @InjectRepository(Empresa) private empresaRepository: Repository<Empresa>) {
  }

  criar(criarEmpresaDto: CriarAtualizarEmpresaDto) {
    const novaEmpresa: Empresa = Object.assign(criarEmpresaDto, {});
    return this.empresaRepository.save(novaEmpresa);
  }

  async atualizar(empresaDto: CriarAtualizarEmpresaDto, idEmpresa: number) {
    const empresa = await this.empresaRepository.findOneOrFail(idEmpresa);
    console.log(empresa);
    Object.assign(empresa, empresaDto);
    return this.empresaRepository.save(empresa);
  }
}
