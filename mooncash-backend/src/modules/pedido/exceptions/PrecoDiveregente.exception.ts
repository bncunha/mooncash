import { HttpException, HttpStatus } from "@nestjs/common";

export class PrecoDivergenteException extends HttpException {
  constructor(msg?) {
    super(msg || 'Preço divergente', HttpStatus.BAD_REQUEST);
  }
}