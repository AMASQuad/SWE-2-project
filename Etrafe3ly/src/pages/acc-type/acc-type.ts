import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acc-type',
  templateUrl: 'acc-type.html',
})
export class AccTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccTypePage');
  }

//go to lawyer sign up page
goToLawyerPage(){
  this.navCtrl.push('LawyerSignUpPage');
}

goToUserPage(){
  this.navCtrl.push('UserSignUpPage')
}

}
