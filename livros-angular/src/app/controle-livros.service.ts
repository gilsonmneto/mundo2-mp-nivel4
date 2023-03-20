import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Título 1',
      resumo: 'Resumo 1',
      autores: ['Autor 1.1', 'Autor 1.2']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Título 2',
      resumo: 'Resumo 2',
      autores: ['Autor 2.1', 'Autor 2.2', 'Autor 2.3']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Título 3',
      resumo: 'Resumo 3',
      autores: ['Autor 3.1']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length > 0
      ? this.livros[this.livros.length -1].codigo + 1
      : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
