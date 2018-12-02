import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ForgotPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPassPage');
  }

// this function transfer the user to the sign up page
  goToSignUp(){
    this.navCtrl.push('AccTypePage');
  }

// this function transfer the user to the sequrity question page
  goToSeqQuestion(){
    this.navCtrl.push('AnswerSeqQuestionPage');
  }
}
