import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
@IonicPage()
@Component({
  selector: 'page-lawyer-profile',
  templateUrl: 'lawyer-profile.html',
})
export class LawyerProfilePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    console.log(this.navParams.data);
    
  }

  ionViewDidLoad() {
    
  }

  snaptoObject(snap:any) { // to get data from db and put it into array
    let array = [];
    snap.forEach(element => {
      let item = element.val();
      item.key = element.key;
      array.push(item);
    });
    return array[0];
  }

  getRating(){
      let  avgRate;
        firebase.database().ref('/Booking').orderByChild('overAllRating').on('value',(data)=>{
        const dataObj = this.snaptoObject(data)
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
}
