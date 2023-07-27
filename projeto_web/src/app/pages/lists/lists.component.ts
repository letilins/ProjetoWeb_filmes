import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Filme } from '../../models/filme.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  filmes: Filme[] = [];

  constructor(private MovieService: MovieService) {}

  ngOnInit() {
    this.filmes = this.MovieService.obterFilmes();
  }

}
