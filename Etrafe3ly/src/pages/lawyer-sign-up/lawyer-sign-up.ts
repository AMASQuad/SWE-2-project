import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { lawyer } from '../../modules/lawyer.class';
import { AngularFireAuth } from 'angularfire2/auth';

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
  newLawyer = {} as lawyer;

  //database
  newLawyerReference:FirebaseListObservable<lawyer[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase,
    private afAuth:AngularFireAuth) {

    this.newLawyerReference=this.database.list('lawyers');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawyerSignUpPage');
  }

  //lawyer registration function
  pushLawyerToDB(){

    //set the type of the account to lawyer
    this.newLawyer.accountType='lawyer';
    // this will push to the database
      this.newLawyerReference.push(this.newLawyer);
      // to clean the form
      this.newLawyer = {} as lawyer; 
  }
  async Register(Lawyer:lawyer){
    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword(Lawyer.email,Lawyer.password); 
      this.pushLawyerToDB();
      console.log(result);
    }
    catch(e){
      console.log(e);
    }
  }

}
