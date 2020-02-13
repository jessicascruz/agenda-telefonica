import { Injectable, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Injectable({
  providedIn: 'root'
})
export class ContatosDataBaseService {

constructor() { }

 public meuContatos: ContatoModel [] = [];
 public enviarContato = new EventEmitter();

 setContato(novoContato: ContatoModel): void {
  this.meuContatos.push(novoContato);

  this.enviarContato.emit(this.meuContatos);
}

  getContato(id: number): ContatoModel {
    let contato: ContatoModel;
    contato = this.meuContatos[id];
    return contato;
  }

}
