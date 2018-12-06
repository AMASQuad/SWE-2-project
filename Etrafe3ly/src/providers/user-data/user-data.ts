import { Injectable } from '@angular/core';
import firebase from 'firebase'
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
  
  public getUserData(){
    return this.userData
  }

}
