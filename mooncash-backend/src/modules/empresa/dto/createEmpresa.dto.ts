import { IsNotEmpty, MaxLength, IsOptional, Length } from 'class-validator';

export class CreateEmpresaDto {
  idEmpresa: number;

  @IsNotEmpty()
  @MaxLength(50)
  nome: string;

  @IsOptional()
  @Length(14, 14)
  cnpj: string;
}