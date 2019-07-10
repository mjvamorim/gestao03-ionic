import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convidado } from '../../models/convidado';

@Component({
  selector: 'app-edit-convidado',
  templateUrl: './edit-convidado.page.html',
  styleUrls: ['./edit-convidado.page.scss'],
})
export class EditConvidadoPage implements OnInit {
  convidado: Convidado;

  constructor(private actRoute: ActivatedRoute, private router: Router) { 
    this.convidado = new Convidado();
  }

  save(){
    this.router.navigateByUrl('/convidados');
  }

  ngOnInit() {
    let id:number = 0;
    this.actRoute.params.subscribe(params => {
      id = params['id']; 
      console.log('Valor  do parametro id: '+id);
      if (id!=0 && id!=null) {
        this.convidado.id = id;
        this.convidado.nome = "Alguem";
        this.convidado.qtde = 8;
      }
      else {
        this.convidado.id = 0;
        this.convidado.nome = "Novo";
        this.convidado.qtde = 0;
      }
      console.log('Valor de convidado id: '+this.convidado.id);
    });
  }
}
