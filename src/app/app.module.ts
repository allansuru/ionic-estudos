import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomePage2 } from './../pages/home2/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';


import { AppVersion } from '@ionic-native/app-version';
import { Contacts } from '@ionic-native/contacts';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomePage2,
    ItemDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePage2,
    ItemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Contacts,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
