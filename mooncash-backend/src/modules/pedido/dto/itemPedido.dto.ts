import { IsNotEmpty, IsNumber, IsOptional, Min } from "class-validator";

export class ItemPedidoDto {

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  quantidade: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  valorUnitario: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  valorTotal: number;

  @IsNumber()
  @IsOptional()
  idProduto: number;
}