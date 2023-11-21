import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {OnInit} from '@angular/core';
import { SessaoService } from './service/sessao.service';
import { Isessao } from './service/isessao';

@Component({
  selector: 'app-sessao-compras',
  templateUrl: './sessao-compras.component.html',
  styleUrls: ['./sessao-compras.component.scss']
})
export class SessaoComprasComponent implements OnInit {

  ngOnInit(): void { this.listar()}

  produtos: Isessao[] = [];

  constructor (private service:SessaoService) { }

  listar() {
    this.service.listar().subscribe(dados => this.produtos = dados);
  }

  

  Comprar(){
    Swal.fire({
      title: "Você deseja comprar esse Produto?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Pruduto adicionado ao carrinho", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carrinho", "", "error");
      }
    });
  }

}
