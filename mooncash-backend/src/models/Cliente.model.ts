import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa.model";
import { Pedido } from "./Pedido.model";

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column({
    nullable: false
  })
  nome: string;

  @Column({
    nullable: false,
  })
  tipoPessoa: 'PF' | 'PJ';

  @Column()
  cpf: string;

  @Column()
  cnpj: string;

  @ManyToOne(() => Empresa, empresa => empresa.clientes)
  empresa: Empresa;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}