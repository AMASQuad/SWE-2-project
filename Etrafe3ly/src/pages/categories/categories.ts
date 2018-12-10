import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }
  //lawyers:any[] = [];
  //retrieveDataOfLawyers(cat:string) {
  //    firebase.database().ref('Lawyers').orderByChild('degreeOfEnrollment').equalTo(cat).on('value',(data)=>{
  //        const recieved = this.snaptoObject(data);
  //        this.lawyers.push(recieved)
  //    })
  //}


  //snaptoObject(snap) { // to get data from db and put it into array
    //let array = [];
    //snap.forEach(element => {
      //let item = element.val();
      //item.key = element.key;
      //array.push(item);
    //});
    //return array[0];
  //}

  //this function sets the name of the choosen category and change the page to get the lawyers
  setCat(cat:string){
    this.navCtrl.push('CategoriesRetrievalPage', cat);
  }

}
