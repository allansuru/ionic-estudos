import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details'

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itens: Object;
  localizacao = {
    latitude: 0,
    longetude: 0
  }


  constructor(public navCtrl: NavController,     
    private geolocation: Geolocation) {
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

  getLocation() {
    console.log('click');
    
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log('latitude: ', resp.coords.latitude);
      
      this.localizacao.latitude = resp.coords.latitude;
      this.localizacao.longetude = resp.coords.longitude;

     }).catch((error) => {
       this.presentToast('Error getting location: ' + error.message);
       
     });
  }

}
