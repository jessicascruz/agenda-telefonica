import { Component, OnInit } from '@angular/core';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';
import { ContatoModel } from '../modelos/contato-model';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  public enviado: boolean = false;
  public _nome: string;
  public _telefone: string;
  public _email: string;
  public _tipo: string;
  public tipos: string [] = ['Particular', 'Trabalho', 'Amigos', 'Família'];

  constructor(private dataBaseService: ContatosDataBaseService) { }

  enviarDados() {
    if (this._tipo === undefined) {
      this._tipo = this.tipos[0];
    }

    let novoContato = new ContatoModel(this._nome, this._telefone, this._email, this._tipo);
    this.dataBaseService.setContato(novoContato);

    this.enviado = ! this.enviado;
  }

  voltar() {
    this._nome = '';
    this._telefone = '';
    this._email = '';
    this._tipo = '';
    this.enviado = ! this.enviado;
  }

  ngOnInit() {
  }

}
