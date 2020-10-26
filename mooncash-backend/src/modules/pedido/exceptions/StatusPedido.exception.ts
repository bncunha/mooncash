import { HttpException, HttpStatus } from "@nestjs/common";

export class StatusPedidoException extends HttpException {
  constructor(msg?) {
    super('Status de pedido inválido.', HttpStatus.BAD_REQUEST);
  }
}