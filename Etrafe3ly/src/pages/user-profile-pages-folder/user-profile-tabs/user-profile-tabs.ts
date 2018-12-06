import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../../providers/user-data/user-data';

/**
 * Generated class for the UserProfileTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile-tabs',
  templateUrl: 'user-profile-tabs.html',
})
export class UserProfileTabsPage {

  //attributes
  userData:UserDataProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,db:UserDataProvider) {
    this.userData = db;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfileTabsPage');
  }
//declaring the two pages needed for the profile
profile='UserProfilePage';
editProfile='EditUserProfilePage';
}
