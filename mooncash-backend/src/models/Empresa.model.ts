import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Empresa {

  @PrimaryGeneratedColumn()
  idEmpresa: number;

  @Column({
    nullable: false
  })
  nome: string;

  @Column()
  cnpj: string;
}