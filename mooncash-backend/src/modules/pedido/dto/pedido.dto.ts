import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { StatusPedido } from "src/enums/StatusPedido.enum";
import { ItemPedidoDto } from "./itemPedido.dto";

export class PedidoDto {

  @IsDateString()
  @IsOptional()
  dataInicio: string;

  @IsDateString()
  @IsOptional()
  dataFim: string;

  @IsDateString()
  @IsNotEmpty()
  dataPrevista: string;

  @IsOptional()
  @IsEnum(StatusPedido)
  status: StatusPedido;

  @IsOptional()
  @IsNumber()
  valorEntrada: number;

  @IsOptional()
  @IsNumber()
  valorDesconto: number;

  @IsNotEmpty()
  @IsNumber()
  valorTotal: number;
  
  @IsNotEmpty()
  @IsNumber()
  idCliente: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({each: true})
  @Type(() => ItemPedidoDto)
  itensPedido: ItemPedidoDto[];
}