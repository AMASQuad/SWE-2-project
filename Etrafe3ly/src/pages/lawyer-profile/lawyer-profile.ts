import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
import { UserDataProvider } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-lawyer-profile',
  templateUrl: 'lawyer-profile.html',
})
export class LawyerProfilePage {
  //get data from service
  userDataObj:UserDataProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,db:UserDataProvider) {
    this.userDataObj = db;
  }

  ionViewDidLoad() {
    
  }

  /*getRating(){
      let  avgRate;
        firebase.database().ref('/Booking').orderByChild('overAllRating').on('value',(data)=>{
        const dataObj = this.userDataObj.snaptoObject(data)
        const overAllRating = []
        dataObj.array.forEach(element => {
            overAllRating.push(element.rating)
        });
        let noOfEmements = overAllRating.length
        let sum = overAllRating.reduce((element)=>{
          let sum = 0;
          sum = sum + element
        })
        avgRate = sum / noOfEmements
    })
    return avgRate
  }
  rating = this.getRating()
*/
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
