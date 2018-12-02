import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { lawyer } from '../../modules/lawyer.class';
import { user } from '../../modules/user.class';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  //creating object from lawyer class
  newLawyer = {} as lawyer;

  //creating object from  user
  newUser = {} as user;

  //database
  newLawyerReference:FirebaseListObservable<lawyer[]>;
  newUserReference:FirebaseListObservable<user[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase) {
  
    this.newLawyerReference=this.database.list('lawyers');

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  registerLawyer(){

    // this will push to the database
      this.newLawyerReference.push(this.newLawyer);
      // to clean the form
      this.newLawyer = {} as lawyer; 
    
  }

  registerUser(){
    this.newUserReference.push(this.newUser);
    this.newUser = {} as user;
  }


register(){
  if(this.newLawyer.accountType = 'lawyer'){
    //show the lawyer section
    
    //register as lawyer
    this.registerLawyer();
  }
  else{
      this.registerUser();
  }
}

}
