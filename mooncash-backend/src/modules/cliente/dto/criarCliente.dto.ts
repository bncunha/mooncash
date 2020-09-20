import { IsNotEmpty, IsOptional, Length, Matches, MaxLength, MinLength } from "class-validator";

export class ClienteDto {

  idCliente: number;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @MaxLength(2)
  tipoPessoa: 'PF' | 'PJ';
  
  @IsOptional()
  @Length(11, 11)
  cpf: string;

  @IsOptional()
  @Length(14, 14)
  cnpj: string;

  @IsNotEmpty()
  idEmpresa: number;

}