import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { PedidoDto } from '../dto/pedido.dto';

@Controller('pedido')
export class PedidoController {

  @Post()
  novoPedido(@Body() pedidoDto: PedidoDto) {
    try {
      
    } catch (err) {
      throw new BadRequestException('Erro ao criar pedido:' + err);
    }
  }
}
