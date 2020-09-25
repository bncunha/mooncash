import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPedido } from 'src/models/ItemPedido.model';
import { Pedido } from 'src/models/Pedido.model';
import { PedidoController } from './controller/pedido.controller';
import { PedidoService } from './service/pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, ItemPedido])],
  controllers: [PedidoController],
  providers: [PedidoService]
})
export class PedidoModule {}
