import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa.model";
import { GradeProduto } from "./GradeProduto.model";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  idProduto: number;

  @Column()
  nomeProduto: string;

  @Column({nullable: true})
  precoCusto: number;

  @Column({nullable: true})
  precoVenda: number;

  @Column({
    default: 0
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
}