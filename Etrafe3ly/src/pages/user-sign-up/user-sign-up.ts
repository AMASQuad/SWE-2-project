import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { user } from '../../modules/user.class';
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
  newUserReference:FirebaseListObservable<user[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase) {
    this.newUserReference=this.database.list('users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignUpPage');
  }

  //user registration function
  registerUser(){

    //set the type of the account to user
    this.newUser.accountType='user';
    // this will push to the database
      this.newUserReference.push(this.newUser);
      // to clean the form
      this.newUser = {} as user; 
    
  }

}
