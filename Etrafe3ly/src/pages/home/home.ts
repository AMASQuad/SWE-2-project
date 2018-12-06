import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { UserDataProvider } from '../../providers/user-data/user-data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  userDataObj:UserDataProvider;
  constructor(public navCtrl: NavController,private navParams:NavParams, private toastCtrl:ToastController,db:UserDataProvider) {
    
     this.userDataObj = db;
      
      
  }
  //attributes
  
  ionViewDidLoad() {
    if(this.userDataObj.isLoggedIn){
        console.log('user Logged In')
        console.log(this.userDataObj.userData)
    }
    else{
      console.log('no user Logged In')
    }
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
  firebase.auth().signOut(); // end session
  this.userDataObj.freeData(); // free data from service
}

getObject(){
  return globalvar
}
}
var globalvar = {};