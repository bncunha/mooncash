import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateEmpresaDto } from '../dto/createEmpresa.dto';

@Controller('empresa')
export class EmpresaController {

  @Get()
  getAllEmpresas() {
    return 'hehee';
  }

  @Post()
  criarEmpresa(@Body() criarEmpresaDto: CreateEmpresaDto) {
    console.log(criarEmpresaDto);
    return 'eai';
  }

}
