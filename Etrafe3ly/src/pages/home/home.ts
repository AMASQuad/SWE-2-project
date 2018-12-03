import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { person } from '../../modules/person.interface';
import { lawyer } from '../../modules/lawyer.class';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private afAuth:AngularFireAuth , private toastCTRL:ToastController,
    private navParams:NavParams) {
      if(this.navParams.data){
        this.subscription = navParams;
      }
    
  }
  //attributes
  subscription;
  userData = {};
  ionViewDidLoad() {
    console.log(this.navParams.data.uid);
    this.subscription = this.afAuth.authState.subscribe( (data) =>{
      if(data && data.email && data.uid){
        this.userData = data;
        this.toastCTRL.create({
          message : `welcome  ${data.email},`,
          duration : 3000
        }).present();
      }
        else {
          this.toastCTRL.create({
            message : `This account is not registered`,
            duration : 3000
          }).present();
        }
    });
    
    }
    
  
  logoutUser(){
    this.subscription.unsubscribe();
    this.navParams.data = {};
  }
  
}
