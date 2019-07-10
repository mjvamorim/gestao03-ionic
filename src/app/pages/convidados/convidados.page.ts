import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditConvidadoPage } from '../edit-convidado/edit-convidado.page';
import { Convidado } from '../../models/convidado';
import { LoadingController } from '@ionic/angular';
import {ConvidadosService} from "../../service/convidados.service"
@Component({
  selector: 'app-convidados',
  templateUrl: './convidados.page.html',
  styleUrls: ['./convidados.page.scss'],
})
export class ConvidadosPage implements OnInit {
  convidados: any;
  convidado: Convidado;

  constructor(private router: Router, public api: ConvidadosService, public loadingController: LoadingController) {
      this.getConvidados();
  }

  async getConvidados() {
    //this.convidados = [{"id":6,"nome":"Ricardo","qtde":109},{"id":13,"nome":"Fernanda","qtde":8}];

    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getConvidados()
      .subscribe(res => {
        console.log(res);
        this.convidados = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
  }
  addConvidado(){
    this.router.navigate(['/edit-convidado', 0]);
  }
  editConvidado(id: number) {
    console.log('Chamando: '+id);
    this.router.navigate(['/edit-convidado', id]);

  }
  removeConvidado(id: number){

  }
}

