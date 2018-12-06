import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ForgotPassPage } from "../forgot-pass/forgot-pass";
import { HomePage } from "../../pages/home/home";
import firebase from "firebase";
import { userRef, lawyerRef } from "../../modules/database.nodes";
import { UserDataProvider } from "../../providers/user-data/user-data";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  //db service 
  userDataObj:UserDataProvider

  constructor(public navCtrl: NavController, public navParams: NavParams,
    db:UserDataProvider) {
    this.userDataObj =db;

  }
  //attributes
  userInfo:any = {}; // to get data from html template

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  // this function transfer the user to the forgot password page
  goToForgotPass() {
    this.navCtrl.push(ForgotPassPage);
  }

  // this function transfer the user to the sign up page
  goToSignUp() {
    this.navCtrl.push("AccTypePage");
  }
  //-----------------------
  
  //Login
  login() {
    firebase.auth().signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
    .then(data=>{ 
      const uid = data.user.uid //made this cuz of conflict
      firebase.database().ref(lawyerRef).orderByChild("uid").equalTo(uid).on("value", data => {
        //
          if (data.exists()){
         const userData = this.userDataObj.snaptoObject(data);
          this.userDataObj.collectData(userData,data.ref.key) // store data in service
          this.navCtrl.setRoot(HomePage).then(()=>{
            //lawyer logged in

          })
        
        }
          else {
            firebase.database().ref(userRef).orderByChild('uid').equalTo(uid).on('value',data =>{
              const userData = this.userDataObj.snaptoObject(data)
              this.userDataObj.collectData(userData,data.ref.key) // store data in service
              this.navCtrl.setRoot(HomePage).then(()=>{
                //user logged in

              })
            })
          }
        //
      })
              }
          )}
}

