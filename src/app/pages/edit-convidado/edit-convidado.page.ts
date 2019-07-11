import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Convidado } from '../../models/convidado';
import {ConvidadosService} from "../../service/convidados.service";

@Component({
  selector: 'app-edit-convidado',
  templateUrl: './edit-convidado.page.html',
  styleUrls: ['./edit-convidado.page.scss'],
})
export class EditConvidadoPage implements OnInit {
  convidado: Convidado;
  
  constructor(private actRoute: ActivatedRoute, private router: Router, 
              private api: ConvidadosService, public loadingController: LoadingController) { 
    this.convidado = new Convidado();
  }



  async save(){
    await this.api.postConvidados(this.convidado)
    .subscribe(res => {
        this.router.navigateByUrl('/convidados');
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      let id:number = params['id']; 
      console.log('Valor  do parametro id: '+id);
      if (id!=0 && id!=null) {
        this.getById(id);
      }
      else {
        this.convidado.id = 0;
        this.convidado.nome = "Ninguem";
        this.convidado.qtde = 0;
      }
      console.log('Valor de convidado id: '+this.convidado.id);
    });
  }
  async getById(id:number) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getConvidadosById(id)
      .subscribe(res => {
        console.log(res);
        this.convidado = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
