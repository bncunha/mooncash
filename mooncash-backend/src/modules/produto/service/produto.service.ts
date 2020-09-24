import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from 'src/models/Empresa.model';
import { Produto } from 'src/models/Produto.model';
import { Repository } from 'typeorm';
import { ProdutoDto } from '../dto/produto.dto';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto) private produtoRepository: Repository<Produto> 
  ) {}

  async criarProduto(produtoDto: ProdutoDto, empresa: Empresa) {
    const produto = new Produto();
    produto.empresa = empresa;
    Object.assign(produto, produtoDto);
    produto.quantidade = this.somarQuantidadeGrade(produto);
    return this.produtoRepository.save(produto);
  }

  async atualizarProduto(produtoDto: ProdutoDto, idProduto: number) {
    const produto = await this.produtoRepository.findOneOrFail(idProduto, {relations: ['grade']});
    Object.assign(produto, produtoDto);
    produto.quantidade = this.somarQuantidadeGrade(produto);
    return this.produtoRepository.save(produto);
  }

  private somarQuantidadeGrade(produto: Produto) {
    if (produto.grade && produto.grade.length) {
      let totalItensGrade = 0;
      produto.grade.forEach(g => totalItensGrade += g.quantidade);
      return totalItensGrade;
    }
    return produto.quantidade;
  }
}
