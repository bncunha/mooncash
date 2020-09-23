import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, Min, ValidateNested } from "class-validator";
import { GradeProdutoDto } from "./gradeProduto.dto";

export class ProdutoDto {

  @IsNotEmpty()
  nomeProduto: string;

  @IsOptional()
  @Min(0)
  precoCusto: number;

  @IsOptional()
  @Min(0)
  precoVenda: number;

  @Min(0)
  quantidade: number;

  @IsOptional()
  @ValidateNested({each: true})
  @Type(() => GradeProdutoDto)
  grade: GradeProdutoDto[];
}