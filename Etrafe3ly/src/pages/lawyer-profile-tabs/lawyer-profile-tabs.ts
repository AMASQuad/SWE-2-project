import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LawyerProfileTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lawyer-profile-tabs',
  templateUrl: 'lawyer-profile-tabs.html',
})
export class LawyerProfileTabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawyerProfileTabsPage');
  }

//declaring the two pages needed for the profile
profile='LawyerProfilePage';
editProfile='EditlawyerProfilePage';

}
