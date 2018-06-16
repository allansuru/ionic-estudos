import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details'

@Component({
  selector: 'page-home-2',
  templateUrl: 'home.html'
})
export class HomePage2 {

  itens: Object;

  constructor(
    public modalCtrl: ModalController
  ) {
    this.itens = [
      {
        nome: 'Vitor',
        sobreNome: 'Borges',
        descricao: 'Bem viadinho'
      },
      {
        nome: 'Emerson',
        sobreNome: 'Daniel',
        descricao: 'Bem Gayzin'
      },
      {
        nome: 'SuRu',
        sobreNome: 'PICA!',
        descricao: 'Bem fodinha'
      }
    ];
  }

  click() {
    console.log('Button was clicked 2.');
    
  }

  detailsItem(item) {
   this.modalCtrl.create(ItemDetailsPage, { item:item }).present();
  }

}
