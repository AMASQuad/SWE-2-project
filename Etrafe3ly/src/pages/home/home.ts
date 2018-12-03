import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  //temporary function to be able to access the profile page
  goToProfile(){
    this.navCtrl.push('LawyerProfileTabsPage');
  }
}
