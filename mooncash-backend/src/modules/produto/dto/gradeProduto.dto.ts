import { IsNotEmpty, Min } from "class-validator";

export class GradeProdutoDto {

  @IsNotEmpty()
  nome: string;

  @Min(0)
  quantidade: number;
}