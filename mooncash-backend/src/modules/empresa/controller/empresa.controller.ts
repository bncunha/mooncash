import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { DefaultResponse } from 'src/core/DefaultResponse';
import { deflate } from 'zlib';
import { CriarAtualizarEmpresaDto } from '../dto/createEmpresa.dto';
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
  criarEmpresa(@Body() criarEmpresaDto: CriarAtualizarEmpresaDto) {
    try {
      if (!criarEmpresaDto.usuario) {
        return new DefaultResponse('Usuário é obrigatorio para criar empresa').error();
      }
      return this.empresaService.criar(criarEmpresaDto);
    } catch (err) {
      return new DefaultResponse('Erro ao criar empresa:' + err).error();
    }
  }

  @Put(':id')
  atualizarEmpresa(@Body() criarEmpresaDto: CriarAtualizarEmpresaDto, @Param('id') idEmpresa: number) {
    try {
      return this.empresaService.atualizar(criarEmpresaDto, idEmpresa);
    } catch(err) {
      return new DefaultResponse('Erro ao atualizar empresa:' + err).error();
    }
  } 

}
