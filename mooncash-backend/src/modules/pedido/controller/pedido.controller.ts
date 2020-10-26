import { BadRequestException, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { PedidoDto } from '../dto/pedido.dto';
import { PedidoService } from '../service/pedido.service';

@Controller('pedido')
@UseGuards(JwtAuthGuard)
export class PedidoController {

  constructor(private pedidoService: PedidoService) {}

  @Post()
  novoPedido(@Body() pedidoDto: PedidoDto) {
    try {
      return this.pedidoService.criarPedido(pedidoDto);
    } catch (err) {
      throw err;
    }
  }
}
