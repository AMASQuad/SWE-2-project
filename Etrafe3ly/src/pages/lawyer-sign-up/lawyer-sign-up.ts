import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { lawyer } from '../../modules/lawyer';
import firebase from 'firebase';
import { userRef, lawyerRef } from '../../modules/database.nodes';


/**
 * Generated class for the LawyerSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lawyer-sign-up',
  templateUrl: 'lawyer-sign-up.html',
})
export class LawyerSignUpPage {

  //creating object from lawyer class
  newLawyer = new lawyer();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawyerSignUpPage');
  }
  //lawyer registration function
  lawyerRegister(){
    const lawyerEmail = firebase.auth().createUserWithEmailAndPassword(this.newLawyer.email,this.newLawyer.password).then((data)=>{
        this.newLawyer.uid = data.user.uid;
        this.newLawyer.email = null;
        this.newLawyer.password = null;
        firebase.database().ref(lawyerRef).push(this.newLawyer);
    }).catch((err) => {
      console.log(err);//handling error
    })
  }
}
