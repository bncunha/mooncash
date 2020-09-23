import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from 'src/models/Produto.model';
import { Repository } from 'typeorm';
import { ProdutoDto } from '../dto/produto.dto';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto) private produtoRepository: Repository<Produto> 
  ) {}

  async criarProduto(produtoDto: ProdutoDto) {
    const produto = new Produto();
    Object.assign(produto, produtoDto);
    this.validarQuantidadeGrade(produto);
    return this.produtoRepository.save(produto);
  }

  private validarQuantidadeGrade(produto: Produto) {
    if (produto.grade && produto.grade.length) {
      let totalItensGrade = 0;
      produto.grade.forEach(g => totalItensGrade += g.quantidade);
      if (produto.quantidade != totalItensGrade) {
        throw "A quantidade de itens do produto não bateu com a da grade";
      }
    }
  }
}
