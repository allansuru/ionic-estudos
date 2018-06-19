import { Component } from '@angular/core';
import { ModalController, Platform } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details'
import { AppVersion } from '@ionic-native/app-version';
import { APP_ID_RANDOM_PROVIDER } from '@angular/core/src/application_tokens';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-home-2',
  templateUrl: 'home.html'
})
export class HomePage2 {

  itens: Object;
  version = '';
  contatos: any;

  constructor(
    public modalCtrl: ModalController,
    public platform: Platform,
    private appVersion: AppVersion,
    private contacts: Contacts
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

  addContato() {
    let contact: Contact = this.contacts.create();
    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );

  }

  buscaContatos() {
    this.contacts.find(['displayName'])
    .then(c => this.contatos = c);
  }

  detailsItem(item) {
   this.modalCtrl.create(ItemDetailsPage, { item:item }).present();
  }

}
