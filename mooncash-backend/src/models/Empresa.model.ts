import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cliente } from "./Cliente.model";

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

  @OneToMany(() => Cliente, cliente => cliente.empresa)
  clientes: Cliente[];
}