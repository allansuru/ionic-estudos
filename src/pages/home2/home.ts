import { Component } from '@angular/core';
import { ModalController, Platform } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details'
import { AppVersion } from '@ionic-native/app-version';
import { APP_ID_RANDOM_PROVIDER } from '@angular/core/src/application_tokens';

@Component({
  selector: 'page-home-2',
  templateUrl: 'home.html'
})
export class HomePage2 {

  itens: Object;
  version: '';

  constructor(
    public modalCtrl: ModalController,
    public platform: Platform,
    private appVersion: AppVersion
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

    platform.ready().then(() => {
    appVersion.getVersionNumber().then((v) => {
      console.log('Version: ', v);
      this.version = v;
    })
      
    });
  }

  click() {
    console.log('Button was clicked 2.');
    
  }

  detailsItem(item) {
   this.modalCtrl.create(ItemDetailsPage, { item:item }).present();
  }

}
