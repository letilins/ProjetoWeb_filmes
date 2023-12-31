import { Filme } from './../../models/filme.model';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MovieService } from 'src/app/service/movie.service';
import { v4 as uuidv4 } from 'uuid';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  filmes: Filme[] = [];

  urlVideo: SafeUrl | any;

  id: any;
  dados: any;
  Filme: any;

  constructor(
    private MovieService: MovieService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  showAlert: boolean = false;

  ngOnInit() {
    this.urlVideo =
      'https://www.youtube.com/embed/YKfeEKJBbU0?si=n_nc4RjTZEwhRJG1';
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.urlVideo
    );
    this.filmes = this.MovieService.obterFilmes();
    console.log(this.filmes);
    for (let i = 0; i < this.filmes.length; i++) {
      let url = this.filmes[i].video;
      this.filmes[i].video = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    // this.MovieService.getData().subscribe((data) => {
    //   this.dados = data;
    //   console.log(this.dados);
    // });
  }
  AdicionarIDfilmes(nome: string) {
    const NovoIDfilme = {
      id: uuidv4(),
      nome: nome,
    };

    this.Filme.push(NovoIDfilme);
  }

  get filme(): Filme[] {
    return this.MovieService.filmes;
  }

  ExcluirFilme(filmeId: string): void {
    //this.Filme = this.Filme.filter((filme: { id: string; }) => filme.id !== filmekey);
    console.log('Excluir filme com ID:', filmeId);
    this.MovieService.deletarFilme(filmeId);

    this.showAlert = true; // avisar a mensagem para excluir.
    this.router.navigate(['.'], { relativeTo: this.activatedRoute });

    //window.location.reload(); // atualizar a pagina sozinha

    location.reload();
    //
    //window - contem tudo que você pode administrar junto ao navegador

    // window é um objeto publico do javascript, ele é reconhecido automaticamente.

    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
