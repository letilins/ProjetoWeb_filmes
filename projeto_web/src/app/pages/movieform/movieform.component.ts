import { Component } from '@angular/core';
import { Filme } from '../../models/filme.model';
import { MovieService } from 'src/app/service/movie.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css'],
})
export class MovieformComponent {
  novoFilme: Filme = {
    id: '',
    nome: '',
    diretor: '',
    ano: 0,
    genero: '',
    atores: [],
    imagem: '',
    video: '',
  };
  showAlert: boolean = false;

  constructor(private MovieService: MovieService) {}

  cadastrarFilme() {
    this.novoFilme.id = uuidv4();

    this.MovieService.adicionarFilme(this.novoFilme);

    this.novoFilme = {
      id: '',
      nome: '',
      diretor: '',
      ano: 0,
      genero: '',
      atores: [],
      imagem: '',
      video: '',
    };
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
