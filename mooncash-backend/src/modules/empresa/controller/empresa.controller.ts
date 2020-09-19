import { Controller, Get, Post, Body } from '@nestjs/common';
import { DefaultResponse } from 'src/core/DefaultResponse';
import { CreateEmpresaDto } from '../dto/createEmpresa.dto';
import { EmpresaService } from '../service/empresa.service';

@Controller('empresa')
export class EmpresaController {

  constructor(private empresaService: EmpresaService) {

  }

  @Get()
  getAllEmpresas() {
    return 'hehee';
  }

  @Post()
  criarEmpresa(@Body() criarEmpresaDto: CreateEmpresaDto) {
    try {
      return this.empresaService.criar(criarEmpresaDto);
    } catch (err) {
      return new DefaultResponse('Erro ao criar empresa:' + err).error();
    }
  }

}
