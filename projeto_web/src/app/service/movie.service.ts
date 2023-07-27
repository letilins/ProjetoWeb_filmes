import { Injectable } from '@angular/core';
import { Filme } from '../../app/models/filme.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private filmesKey = 'meus_filmes';
  filmes: Filme[] = [];

  adicionarFilme(filme: Filme) {
    const filmes = this.obterFilmes();
    filmes.push(filme);
    localStorage.setItem(this.filmesKey, JSON.stringify(filmes));
  }

  obterFilmes(): Filme[] {
    const filmesString = localStorage.getItem(this.filmesKey);
    return filmesString ? JSON.parse(filmesString) : [];
  }
}
