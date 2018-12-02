import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnswerSeqQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-answer-seq-question',
  templateUrl: 'answer-seq-question.html',
})
export class AnswerSeqQuestionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnswerSeqQuestionPage');
  }

  //go to new password page function using lazy loading

  goToNewPassPage(){
    this.navCtrl.push('NewPassPage');
  }

}
