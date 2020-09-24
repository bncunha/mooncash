import { IsNotEmpty, Min } from "class-validator";

export class GradeProdutoDto {

  idGradeProduto: number;

  @IsNotEmpty()
  nome: string;

  @Min(0)
  quantidade: number;
}