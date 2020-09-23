import { BadRequestException, Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ClienteDto } from '../dto/criarCliente.dto';
import { ClienteService } from '../service/cliente.service';

@Controller('cliente')
export class ClienteController {

  constructor(private clienteService: ClienteService) {

  }

  @Post()
  criarCliente(@Body() clienteDto: ClienteDto) {
    try {
      return this.clienteService.ciarCliente(clienteDto);
    } catch(err) {
      throw new BadRequestException('Erro ao criar cliente:' + err);
    }
  }

  @Put(':id')
  atualizarCliente(@Body() clienteDto: ClienteDto, @Param('id') idCliente: number) {
    try {
      return this.clienteService.atualizarCliente(clienteDto, idCliente);
    } catch(err) {
      throw new BadRequestException('Erro ao atualizar cliente:' + err);
    }
  }

  @Delete(':id')
  deletarCliente(@Param('id') idCliente: number) {
    try {
      return this.clienteService.deletarCliente(idCliente);
    } catch(err) {
      throw new BadRequestException('Erro ao deletar cliente:' + err);
    }
  }
}
