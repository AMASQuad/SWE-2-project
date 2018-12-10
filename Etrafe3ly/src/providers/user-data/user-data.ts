import { Injectable } from '@angular/core';
import firebase from 'firebase'
import { lawyerRef } from '../../modules/database.nodes';
/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  //attributes
  isLoggedIn:boolean = false;
  userData:any = {}
  lawyerData:any = {}
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
  
  lawyerSearch(fn:any){
    firebase.database().ref(lawyerRef).orderByChild('firstName').equalTo(fn).on('value',(data)=>{
      if (data.exists()){
      const recieved = this.snaptoObject(data);
      this.ListOfLawyers.push(recieved)
      
    }
      else{
          this.ListOfLawyers = []
          this.lawyerData = {}
      }
    })
  }


}
