import { Filme } from './../models/filme.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'URL_DA_API';
  private filmesKey = 'meus_filmes';
  filmes: Filme[] = [];

  constructor(private http: HttpClient) {}

  adicionarFilme(filme: Filme) {
    const filmes = this.obterFilmes();
    filmes.push(filme);
    // a chave da lista deve ser o ID do filme
    localStorage.setItem(this.filmesKey, JSON.stringify(filmes));
  }

  obterFilmes(): Filme[] {
    const filmesString = localStorage.getItem(this.filmesKey);
    return filmesString ? JSON.parse(filmesString) : [];
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }



  deletarFilme(filmes: Filme) {
    const filme = localStorage.removeItem(this.filmesKey);
    //localStorage.clear(); limpa toda a lista :(
  }
}
