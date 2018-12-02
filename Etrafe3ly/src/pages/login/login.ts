import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { SignUpPage } from '../sign-up/sign-up';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

// this function transfer the user to the forgot password page
goToForgotPass(){
  this.navCtrl.push(ForgotPassPage);
}

// this function transfer the user to the sign up page
goToSignUp(){
  this.navCtrl.push(SignUpPage);
}
}
