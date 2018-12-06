import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase  from 'firebase'
import { UserDataProvider } from '../../../providers/user-data/user-data';
import { HomePage } from '../../home/home';
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
  //db service
  userDataObj:UserDataProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,db:UserDataProvider) {

    this.userDataObj = db;
    
  }
  // attributes


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }
  deleteAcc(){
    
    firebase.auth().currentUser.delete().then(()=>{
      //user data deleted
      this.userDataObj.freeData()
      console.log('user Deleted')
      this.navCtrl.setRoot(HomePage)
      firebase.database().ref('Accounts/').orderByChild('uid').equalTo(this.userDataObj.userData.uid).ref.remove()

    }).catch( ()=>{
      // error handling
    })
    
  }
}
