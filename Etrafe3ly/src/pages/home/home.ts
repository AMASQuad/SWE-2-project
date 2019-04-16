import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  //attributes
  userDataObj:UserDataProvider;
  _Database:DatabaseProvider
  constructor(public navCtrl: NavController,
    db:UserDataProvider,modCtrl:ModalController,
    dbService:DatabaseProvider) {
    this.modalCtrl = modCtrl
     this.userDataObj = db;
     this._Database = dbService
      
      
  }
  //attributes
  modalCtrl:ModalController;

  ionViewDidLoad() {
    
  }
  //this function is here just so i can reach the lawyer profile page
  goToProfile(){
    this.navCtrl.push('LawyerProfileTabsPage');
  }

//this function is here just so i can reach the user profile page
  goToUserProfile(){
    this.navCtrl.push('UserProfileTabsPage');
  }
//Logout
logout(){
  firebase.auth().signOut(); // end session
  this.userDataObj.freeData(); // free data from service
}

  //search page
  presentModal() {
    const modal = this.modalCtrl.create('SearchModalPage');
    modal.present();
  }
  
  loadTopRated(){
    
  }



}