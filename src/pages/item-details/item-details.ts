import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
    templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
item;

    constructor(navParams: NavParams) {

      this.item = navParams.get('item');
    }
}