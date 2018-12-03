import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { person } from '../../modules/person.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../../pages/home/home';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth:AngularFireAuth) {
  }
  //attributes
    userInfo = {} as person;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

// this function transfer the user to the forgot password page
goToForgotPass(){
  this.navCtrl.push(ForgotPassPage);
}

// this function transfer the user to the sign up page
goToSignUp(){
  this.navCtrl.push('AccTypePage');
}
  async login(info:person){
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(info.email,info.password);
      if(result){
      this.navCtrl.setRoot(HomePage,result); //to set page home
    }
      else {
        alert('user not exists'); //create toast
      }
  }
  catch(e){
      console.log(e);
  }
  
  
  }}
