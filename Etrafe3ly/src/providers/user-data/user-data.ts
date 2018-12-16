import { Injectable } from '@angular/core';
import firebase from 'firebase'
import { lawyerRef, ratingRef } from '../../modules/database.nodes';
import { lawyer } from '../../modules/lawyer';
/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  //attributes

  //avg val
  avg = 0;

  isLoggedIn:boolean = false;
  userData:any = {}
  lawyerData = {}
  userType:string;
  ListOfLawyers:any[] = [] //list of lawyers that used in search
  constructor() {
    console.log('Hello UserDataProvider Provider');
  }
  collectData(data:any,ut:string){
    this.userType = ut

    if(ut == 'Users'){//checks whetehr user or laweyer
      this.userData = data
    }
    else{
      this.lawyerData = data
      
    }
    this.isLoggedIn = true;
    
  }
  freeData(){
    this.userData = {}
    this.lawyerData = {}
    this.isLoggedIn = false;
    this.userType = '';
    this.avg = 0; // will be replaced with inner object attribute
  }



  snaptoObject(snap:any) {  // to get data from db and put it into array
    let array = [];
    snap.forEach(element => {
      let item = element.val();
      item.key = element.key;
      array.push(item);
    });
    return array[0];
  }
//---------------firestore snap2Object---------------
  snaptoObjectFS(snap:any){
    let array = [];
    snap.forEach(element => {
      let item = element.val();
      item.key = element.key;
      array.push(item);
    });
    return array[0];
  }
  
  lawyerSearch(fn:string){
    firebase.database().ref(lawyerRef).orderByChild('firstName').equalTo(fn).on('value',(data)=>{
      if (data.exists()){
      const recieved = this.snaptoObject(data);
      this.ListOfLawyers.push(recieved)
      
    }
      else{
          this.ListOfLawyers = []
          this.avg = 0;  // will be replaced with inner object attribute
          //this.lawyerData = {}
      }
    })
  }

  //------------- get avg rate ----------
  getAvgRate(lawyer:any){
    //initialize to ensures it is free
    let totalRate:number[] = [];
    //-----------------
      let totalObjects:any[] = []
    //-------------------
    const db = firebase.database().ref(ratingRef)
    db.orderByChild('lawyerUID').equalTo(lawyer.uid).on('value',dataSnapshot =>{
      totalObjects.push(this.snaptoObject(dataSnapshot))
      for(let i = 0;i< totalObjects.length ; i++){
        totalRate.push(totalObjects[i].value)
      }
      var sum = 0 ;
    for( let i = 0; i < totalRate.length ; i++ ){
      sum += totalRate[i]; 
    }
      this.avg =  sum/totalRate.length;
      
      //---------------finished saving data into array from db
    }) 
    //-----------------------looping to get total then we calculate avg rate 
     
  } 

  

}
