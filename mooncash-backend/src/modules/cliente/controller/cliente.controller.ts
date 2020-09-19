import { Body, Controller, Post } from '@nestjs/common';
import { DefaultResponse } from 'src/core/DefaultResponse';
import { CriarClienteDto } from '../dto/criarCliente.dto';
import { ClienteService } from '../service/cliente.service';

@Controller('cliente')
export class ClienteController {

  constructor(private clienteService: ClienteService) {

  }

  @Post()
  criarCliente(@Body() clienteDto: CriarClienteDto) {
    try {
      return this.clienteService.ciarCliente(clienteDto);
    } catch(err) {
      return new DefaultResponse('Erro ao criar cliente:' + err).error();
    }
  }
}
