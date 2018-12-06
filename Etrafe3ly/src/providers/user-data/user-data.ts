
import { Injectable } from '@angular/core';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  isLoggedIn:boolean = false;
  userData:any = {}
  constructor() {
    console.log('Hello UserDataProvider Provider');
  }
  collectData(data:any){
    this.userData = data
    this.isLoggedIn = true;
  }
  freeData(){
    this.userData = {}
    this.isLoggedIn = false;
  }
}
