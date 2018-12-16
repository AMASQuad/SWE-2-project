import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import firebase from 'firebase'

import { DatabaseProvider } from '../../providers/database/database';
import { CameraProvider } from '../../providers/camera/camera';
/**
 * Generated class for the EditlawyerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editlawyer-profile',
  templateUrl: 'editlawyer-profile.html',
})
export class EditlawyerProfilePage {
  //attributes
  userDataObj:UserDataProvider;
  _Database:DatabaseProvider;
  _Camera:CameraProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    db:UserDataProvider,dbService:DatabaseProvider,private camera:CameraProvider) {
      this._Camera = this.camera
      this.userDataObj = db;
      this._Database = dbService
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditlawyerProfilePage');
  }
  updateInfoToDB(){
    this._Database.updateInfo4Lawyer_RTDB(this.userDataObj.userData.uid,this.userDataObj.userData)
  }

  select(){
    this._Camera.takePhoto()
  }

  update(){
    this._Database.updateImageLawyerFStorage(this.userDataObj.lawyerData)
  }
  
}
