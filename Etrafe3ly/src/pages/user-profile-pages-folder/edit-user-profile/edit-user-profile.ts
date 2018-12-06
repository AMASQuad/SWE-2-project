import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../../providers/user-data/user-data';
import firebase from 'firebase'
import { userRef } from '../../../modules/database.nodes';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,db:UserDataProvider) {
    this.userDataObj = db;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserProfilePage');
  }
  updateInfoToDB(){
    firebase.database().ref(userRef+'/'+this.userDataObj.userData.key).set(this.userDataObj.userData)
  }
  
}
