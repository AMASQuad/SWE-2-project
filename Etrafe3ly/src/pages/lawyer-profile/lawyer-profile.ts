import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
import { UserDataProvider } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { lawyerRef, ratingRef } from '../../modules/database.nodes';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-lawyer-profile',
  templateUrl: 'lawyer-profile.html',
})
export class LawyerProfilePage {
  //get data from service
  userDataObj:UserDataProvider;
  dbService:DatabaseProvider;
  avgRate:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,db:UserDataProvider,
    public alerCtrl:AlertController,_Database:DatabaseProvider) {
    this.userDataObj = db;
    this.dbService = _Database
  }

  ionViewDidLoad() {
    this.avgRate = 0; // to set again avg to zero
    //this.getAvgRate()
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
    firebase.database().ref(lawyerRef).orderByChild('uid').equalTo(this.userDataObj.userData.uid).ref.remove()

  }).catch( ()=>{
    // error handling
  })
}
//check for rate applied or not 
check(){
  this.dbService.checkRatedOrNot(this.userDataObj.userData,this.userDataObj.lawyerData)
}
   
//get avg rate
/*
getAvgRate(){
  //initialize to ensures it is free
  let totalRate:number[] = [];
  //-----------------
   
    let totalObjects:any[] = []
  //-------------------
  const db = firebase.database().ref(ratingRef)
  db.orderByChild('lawyerUID').equalTo(this.userDataObj.lawyerData.uid).on('value',dataSnapshot =>{
    totalObjects.push(this.dbService.snaptoObject(dataSnapshot))
    for(let i = 0;i< totalObjects.length ; i++){
      totalRate.push(totalObjects[i].value)
    }
    var sum = 0 ;
  for( let i = 0; i < totalRate.length ; i++ ){
    sum += totalRate[i]; 
  }
   this.avgRate = sum/totalRate.length;
    
    //---------------finished saving data into array from db
  }) 
  //-----------------------looping to get total then we calculate avg rate 
   
}*/

}
