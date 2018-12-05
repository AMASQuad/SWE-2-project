import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase  from 'firebase'
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.navParams.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }
  deleteAcc(uid){
    firebase.database().ref('/Accounts').orderByChild('uid')
    .equalTo(uid).ref.remove()
  }
}
