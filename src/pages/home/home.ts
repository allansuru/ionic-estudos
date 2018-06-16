import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itens: Object;

  constructor(public navCtrl: NavController) {
    this.itens = [
      {
        nome: 'Vitor',
        sobreNome: 'Borges'
      },
      {
        nome: 'Emerson',
        sobreNome: 'Daniel'
      },
      {
        nome: 'Thiago',
        sobreNome: 'Contre!'
      }
    ];
  }

  click() {
    console.log('Button was clicked 2.');
    
  }

  detailsItem(item) {
    // mandando para o componente que eu quero e o item
      this.navCtrl.push(ItemDetailsPage, { item: item });
  }

}
