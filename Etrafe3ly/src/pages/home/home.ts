import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth , private toastCTRL:ToastController,
    private navParams:NavParams,private database:AngularFireDatabase) {
      if(this.navParams.data){
        this.subscription = navParams;
      }
    
  }
  //attributes
  subscription;
  userData;
  loggedIn;
  dbUserData:FirebaseObjectObservable<any>;
  ionViewDidLoad() {
    this.subscription = this.afAuth.authState.subscribe( (data) =>{
      if(data && data.email && data.uid){
        this.userData = data;
        this.loggedIn = true;
        this.toastCTRL.create({
          message : `welcome  ${data.email},`,
          duration : 3000
        }).present();
      }
    });
  }
    
    
  
  logoutUser(){
    this.afAuth.auth.signOut();
  }

  
  
  //this function is here just so i can reach the lawyer profile page
  goToProfile(){
    this.navCtrl.push('LawyerProfileTabsPage',this.navParams.data);
  }

//this function is here just so i can reach the user profile page
  goToUserProfile(){
    this.navCtrl.push('UserProfileTabsPage');
  }
}
