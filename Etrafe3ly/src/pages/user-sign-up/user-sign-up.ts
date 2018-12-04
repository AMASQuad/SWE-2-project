import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../modules/user';
import firebase from 'firebase';
import { userRef } from '../../modules/database.nodes';
/**
 * Generated class for the UserSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-sign-up',
  templateUrl: 'user-sign-up.html',
})
export class UserSignUpPage {

//creating object from user class
newUser = {} as user;

  //database
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignUpPage');
  }

  //user registration function
  userRegistration(){
    const lawyerEmail = firebase.auth().createUserWithEmailAndPassword(this.newUser.email,this.newUser.password).then((data)=>{
        this.newUser.uid = data.user.uid;
        this.newUser.email = null;
        this.newUser.password = null;
        firebase.database().ref(userRef).push(this.newUser)
    }).catch((err) => {
      console.log(err);//handling error
    })
  }

}
