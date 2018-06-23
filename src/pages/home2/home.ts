import { Component } from '@angular/core';
import { ModalController, Platform } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details'
import { AppVersion } from '@ionic-native/app-version';
import { APP_ID_RANDOM_PROVIDER } from '@angular/core/src/application_tokens';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


const PHOTOLIBRARY = 0;

@Component({
  selector: 'page-home-2',
  templateUrl: 'home.html'
})
export class HomePage2 {

  itens: Object;
  version = '';
  contatos: any;

  contato = {
    nome: '',
    telefone: ''
  };


  constructor(
    public modalCtrl: ModalController,
    public platform: Platform,
    private appVersion: AppVersion,
    private contacts: Contacts,
    public toastCtrl: ToastController,
    private camera: Camera
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
      // camera.getPicture({
      //   sourceType: PHOTOLIBRARY,
      // }).then(imagedata => console.log('IMAGE: ', imagedata));
    });
      
    });

  }

  addContato() {
    let contact: Contact = this.contacts.create();  
    contact.name = new ContactName(null, this.contato.nome);
    contact.phoneNumbers = [new ContactField('mobile', this.contato.telefone)]; 

    
    // contact.save().then(
    //   () => 
    //     console.log('Contact saved!', contact),
    //   (error: any) => console.error('Error saving contact.', error)
    // );

    contact.save().then(() => {
        this.presentToast('Usuário adicionado com sucesso!');
    }, (error: Error) => {
      this.presentToast('Erro: ' + error.message)
    });
    
    
  }

  buscaContatos() {
    this.contacts.find(['displayName'])
    .then(c => this.contatos = c);
  }

  detailsItem(item) {
   this.modalCtrl.create(ItemDetailsPage, { item:item }).present();
  }

  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
