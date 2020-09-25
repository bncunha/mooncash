import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa.model";
import { GradeProduto } from "./GradeProduto.model";
import { ItemPedido } from "./ItemPedido.model";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  idProduto: number;

  @Column()
  nomeProduto: string;

  @Column({nullable: true, type: "double"})
  precoCusto: number;

  @Column({nullable: true, type: "double"})
  precoVenda: number;

  @Column({
    default: 0,
    type: "double"
  })
  quantidade: number;

  @OneToMany(() => GradeProduto, grade => grade.produto, {
    cascade: true
  })
  grade: GradeProduto[];

  @ManyToOne(() => Empresa, {
    nullable: false
  })
  empresa: Empresa;

  @OneToMany(() => ItemPedido, itemP => itemP.produto)
  itensPedido: ItemPedido[];
}