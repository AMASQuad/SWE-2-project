import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the SearchModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-modal',
  templateUrl: 'search-modal.html',
})
export class SearchModalPage {

  //attributes
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
      db:UserDataProvider) {
        this.userDataObj = db
  }
  //attributes
  userDataObj:UserDataProvider;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchModalPage');
  }

  goToHome(){
    this.navCtrl.pop();
  }
  //move to lawyer page
  move2Lawyer(lawyer){
    this.userDataObj.lawyerData=lawyer
    this.navCtrl.push("LawyerProfilePage")
  }
  

}
