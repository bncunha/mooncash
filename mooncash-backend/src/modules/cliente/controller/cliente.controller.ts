import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { DefaultResponse } from 'src/core/DefaultResponse';
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
      return new DefaultResponse('Erro ao criar cliente:' + err).error();
    }
  }

  @Put(':id')
  atualizarCliente(@Body() clienteDto: ClienteDto, @Param('id') idCliente: number) {
    try {
      return this.clienteService.atualizarCliente(clienteDto, idCliente);
    } catch(err) {
      return new DefaultResponse('Erro ao atualizar cliente:' + err).error();
    }
  }
}
