import { Component } from '@angular/core';
import { Filme } from '../../models/filme.model';
import { MovieService } from 'src/app/service/movie.service';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css'],
})
export class MovieformComponent {
  meuFormValidacao: FormGroup;

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

  constructor(
    private MovieService: MovieService,
    private formBuilder: FormBuilder
  ) {
    this.meuFormValidacao = this.formBuilder.group({
      nome: ['', Validators.required],
      diretor: ['', Validators.required],
      ano: ['', Validators.required],
      genero: ['', Validators.required],
      atores: ['', Validators.required],
      video: ['', Validators.required],
    });
  }

  botao() {
    if (!this.meuFormValidacao.valid) {
      console.log('Formulário inválido');
      return;
    }
    console.log('Formulário válido', this.meuFormValidacao.value);
  }

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
