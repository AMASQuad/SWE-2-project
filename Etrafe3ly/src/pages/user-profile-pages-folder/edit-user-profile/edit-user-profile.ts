import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../../providers/user-data/user-data';
import firebase from 'firebase'
import { userRef } from '../../../modules/database.nodes';
import { DatabaseProvider } from '../../../providers/database/database';
/**
 * Generated class for the EditUserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user-profile',
  templateUrl: 'edit-user-profile.html',
})
export class EditUserProfilePage {
  //Attributes
  userDataObj:UserDataProvider;
  _Database:DatabaseProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,db:UserDataProvider,
    dbService:DatabaseProvider) {
    this.userDataObj = db;
    this._Database = dbService;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserProfilePage');
  }
  updateInfoToDB(){
    this._Database.updateInfo4User_FS(this.userDataObj.userData.uid,this.userDataObj.userData)
  }
  
}
