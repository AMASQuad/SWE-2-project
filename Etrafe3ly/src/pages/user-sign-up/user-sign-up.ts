import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { user } from '../../modules/user.class';
import { AngularFireAuth } from 'angularfire2/auth';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase,
    private afAuth:AngularFireAuth) {
    this.newUserReference=this.database.list('users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignUpPage');
  }

  //user registration function
  pushUserToDB(){

    //set the type of the account to user
    this.newUser.accountType='user';
    // this will push to the database
      this.newUserReference.push(this.newUser);
      // to clean the form
      this.newUser = {} as user; 
  }
  async Register(User:user){
    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword(User.email,User.password); 
      this.pushUserToDB();
      console.log(result);
    }
    catch(e){
      console.log(e);
    }
  }

}
