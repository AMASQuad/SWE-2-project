import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import firebase from 'firebase'
import { lawyer } from '../../modules/lawyer';
import { lawyerRef } from '../../modules/database.nodes';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    db:UserDataProvider) {
      this.userDataObj = db;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditlawyerProfilePage');
  }
  updateInfoToDB(){
    firebase.database().ref(lawyer+'/'+this.userDataObj.userData.key).set(this.userDataObj.userData)
  }

  uploadPic(){
    let storageRef = firebase.storage().ref(lawyerRef+'/'+this.userDataObj.userData.key);
  }
}
