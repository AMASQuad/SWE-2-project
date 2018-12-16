import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { lawyer } from '../../modules/lawyer';
import firebase from 'firebase';
import {  lawyerRef, lawyersCollection } from '../../modules/database.nodes';
import { DatabaseProvider } from '../../providers/database/database';
import { CameraProvider } from '../../providers/camera/camera';

@IonicPage()
@Component({
  selector: 'page-lawyer-sign-up',
  templateUrl: 'lawyer-sign-up.html',
})
export class LawyerSignUpPage {

  //creating object from lawyer class
  newLawyer = new lawyer();
  _Database:DatabaseProvider;
  camProv:CameraProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,cp:CameraProvider,
     db:DatabaseProvider) {
      this._Database=db;
      this.camProv = cp
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawyerSignUpPage');
  }
  Register(){
    this._Database.lawyerRegister2RTDB(this.newLawyer)
  }
  //get picture
  getPic(){
    this.camProv.openGal()
  }
  move2Home(){
    
  }
}
