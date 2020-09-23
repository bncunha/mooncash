import { Controller, Get, Post, Body, Put, Param, BadRequestException } from '@nestjs/common';
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
        throw new BadRequestException('Usuário é obrigatorio para criar empresa');
      }
      return this.empresaService.criar(criarEmpresaDto);
    } catch (err) {
      throw new BadRequestException('Erro ao criar empresa:' + err);
    }
  }

  @Put(':id')
  atualizarEmpresa(@Body() criarEmpresaDto: CriarAtualizarEmpresaDto, @Param('id') idEmpresa: number) {
    try {
      return this.empresaService.atualizar(criarEmpresaDto, idEmpresa);
    } catch(err) {
      throw new BadRequestException('Erro ao atualizar empresa:' + err);
    }
  } 

}
