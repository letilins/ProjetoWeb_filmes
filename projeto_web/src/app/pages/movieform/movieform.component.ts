import { Component } from '@angular/core';
import { Filme } from '../../models/filme.model';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent {
  filme: Filme = new Filme();
  atoresInput: string = '';

  onSubmit() {
    console.log(this.filme);
  }

  adicionarAtor() {
    if (this.atoresInput.trim() !== '') {
      this.filme.atores.push(this.atoresInput.trim());
      this.atoresInput = '';
    }
  }

}
