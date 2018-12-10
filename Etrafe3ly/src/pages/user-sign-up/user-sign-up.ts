import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../modules/user';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the UserSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-sign-up',
  templateUrl: 'user-sign-up.html',
})
export class UserSignUpPage {

//creating object from user class
newUser = {} as user;

  //database
  _Database:DatabaseProvider;//database provider

  constructor(public navCtrl: NavController, public navParams: NavParams,
    db:DatabaseProvider) {
    this._Database = db;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignUpPage');
  }

  //user registration function
  Register(){
    this._Database.userRegistration2RTDB(this.newUser)
  }

}
