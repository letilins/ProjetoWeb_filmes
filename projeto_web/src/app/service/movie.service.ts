import { Filme } from './../models/filme.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'URL_DA_API';
  private filmesKey = 'meus_filmes';
  private filmesSubject = new BehaviorSubject<Filme[]>([]);
  filmes: Filme[] = this.obterFilmes();;

  constructor(private http: HttpClient) {
    this.carregarFilmes();
  }
  
  private carregarFilmes() {
    const filmesString = localStorage.getItem(this.filmesKey);
    const filmes = filmesString ? JSON.parse(filmesString) : [];
    this.filmesSubject.next(filmes);
  }

  adicionarFilme(filme: Filme) {
    const filmes = this.obterFilmes();
    filmes.push(filme);
    localStorage.setItem(this.filmesKey, JSON.stringify(filmes));
    this.filmesSubject.next(filmes); 
  }


  obterFilmes(): Filme[] {
    const filmesString = localStorage.getItem(this.filmesKey);
    return filmesString ? JSON.parse(filmesString) : [];
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }



  deletarFilme(filmeId: string) {
    const filmes = this.obterFilmes();
    const index = filmes.findIndex((filme) => filme.id === filmeId);
  
    if (index !== -1) {
      filmes.splice(index, 1);
      localStorage.setItem(this.filmesKey, JSON.stringify(filmes));
      this.filmesSubject.next(filmes);
    }
  }
}
