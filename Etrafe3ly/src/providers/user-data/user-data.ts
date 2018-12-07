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
  userType:string;
  ListOfLawyers:any[] = [] //list of lawyers that used in search
  constructor() {
    console.log('Hello UserDataProvider Provider');
  }
  collectData(data:any,ut:string){
    this.userData = data
    this.isLoggedIn = true;
    this.userType = ut
  }
  freeData(){
    this.userData = {}
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
  
  lawyerSearch(fn:string){
    firebase.database().ref(lawyerRef).orderByChild('firstName'+' '+'lastName').equalTo(fn).on('value',(data)=>{
      if (data.exists()){
      const recieved = this.snaptoObject(data);
      this.ListOfLawyers.push(recieved)
      
    }
      else{
          console.log('no data existing with this name')
      }
    })
  }
}
