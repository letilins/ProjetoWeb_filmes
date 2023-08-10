import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Filme } from '../../models/filme.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  filmes: Filme[] = [
    //magem: 'caminho/para/imagem2.jpg',
    //video: 'https://www.youtube.com/- incluir o link do youtube do filme


  ];

  constructor(private MovieService: MovieService) {}

  ngOnInit() {
    this.filmes = this.MovieService.obterFilmes();
  }

}
