import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  udata = {};
  constructor(public navCtrl: NavController,private navParams:NavParams) {
    if(this.navParams.data){
      //DBuserData = this.navParams.data;
      console.log(this.navParams.data)
      this.udata = this.navParams.data;
    }
  }
  //attributes
   // recieved data from 
  loggedin:boolean;
  userType:string;
  
  ionViewDidLoad() {
  }
    
//Logout
logout(){
  firebase.auth().signOut();
  console.log()
  this.loggedin = false;
}


}
