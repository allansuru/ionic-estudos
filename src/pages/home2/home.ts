import { Component } from '@angular/core';
import { ModalController, Platform } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details'
import { AppVersion } from '@ionic-native/app-version';
import { APP_ID_RANDOM_PROVIDER } from '@angular/core/src/application_tokens';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';



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

  localizacao = {
    latitude: 0,
    longetude: 0
  }

  


  constructor(
    public modalCtrl: ModalController,
    public platform: Platform,
    private appVersion: AppVersion,
    private contacts: Contacts,
    public toastCtrl: ToastController,
    private camera: Camera,
    private geolocation: Geolocation
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

  presentToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
