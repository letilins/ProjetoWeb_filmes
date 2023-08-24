import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  nome: string = '';
  telefone: string = '';
  mensagem: string = '';

  enviarMensagem() {
    console.log('Nome:', this.nome);
    console.log('Telefone:', this.telefone);
    console.log('Mensagem:', this.mensagem);
  }
}
