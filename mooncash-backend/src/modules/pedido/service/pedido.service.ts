import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusPedido } from 'src/enums/StatusPedido.enum';
import { Cliente } from 'src/models/Cliente.model';
import { Pedido } from 'src/models/Pedido.model';
import { Repository } from 'typeorm';
import { ItemPedidoDto } from '../dto/itemPedido.dto';
import { PedidoDto } from '../dto/pedido.dto';
import { PrecoDivergenteException } from '../exceptions/PrecoDiveregente.exception';
import { StatusPedidoException } from '../exceptions/StatusPedido.exception';

@Injectable()
export class PedidoService {

  constructor(
    @InjectRepository(Pedido) private pedidoRepository: Repository<Pedido>,
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) {}

  async criarPedido(pedidoDto: PedidoDto) {
    const pedido = new Pedido();
    Object.assign(pedido, pedidoDto);
    pedido.dataInicio = pedido.dataInicio || new Date();
    pedido.status = pedido.status || StatusPedido.CRIADO

    if (pedido.status != StatusPedido.EM_ORCAMENTO && pedido.status != StatusPedido.CRIADO) {
      throw new StatusPedidoException();
    }

    if (!this.isValoresItensPedidoValido(pedidoDto) || !this.isValorTotalValido(pedidoDto)) {
      throw new PrecoDivergenteException();
    }

    pedido.cliente = await this.clienteRepository.findOneOrFail(pedidoDto.idCliente);
    return await this.pedidoRepository.save(pedido);
  }

  private isValoresItensPedidoValido(pedidoDto: PedidoDto) {
    const validaTotal = (itemPedido: ItemPedidoDto) => itemPedido.quantidade * itemPedido.valorUnitario == itemPedido.valorTotal;
    const isTotalValido = pedidoDto.itensPedido.every(validaTotal);
    return isTotalValido;
  }

  private isValorTotalValido(pedidoDto: PedidoDto) {
    const totalItens = pedidoDto.itensPedido.reduce((prev, cur) => prev += cur.valorTotal, 0);
    return totalItens == pedidoDto.valorTotal;
  }
}
