import { SafeUrl } from '@angular/platform-browser';

export class Filme {
  id!: string; // esse você via função que criou do GUID, o resto serão os valores dos componentes de tela,
  nome!: string;
  ano!: number;
  genero!: string;
  diretor!: string;
  atores!: string[];
  imagem!: any;
  video!: any;
}
