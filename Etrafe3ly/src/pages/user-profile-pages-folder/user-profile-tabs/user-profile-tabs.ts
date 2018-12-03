import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfileTabsPage');
  }
//declaring the two pages needed for the profile
profile='UserProfilePage';
editProfile='EditUserProfilePage';
}
