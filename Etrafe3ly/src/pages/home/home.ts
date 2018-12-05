import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  userData;
  constructor(public navCtrl: NavController,private navParams:NavParams, public modalCtrl:ModalController) {
  
    globalvar = navParams.data
      
      
  }
  //attributes
  
   // recieved data from 
  loggedin:boolean;
  userType:string;
  
  ionViewDidLoad() {
  }
  //this function is here just so i can reach the lawyer profile page
  goToProfile(){
    this.navCtrl.push('LawyerProfileTabsPage',globalvar);
  }

//this function is here just so i can reach the user profile page
  goToUserProfile(){
    this.navCtrl.push('UserProfileTabsPage',this.getObject());
  }
//Logout
logout(){
  firebase.auth().signOut();
  console.log()
  this.loggedin = false;
}

getObject(){
  return globalvar
}

  //search
  presentModal() {
    const modal = this.modalCtrl.create('SearchModalPage');
    modal.present();
  }

}
var globalvar = {};