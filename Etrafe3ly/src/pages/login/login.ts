import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { ForgotPassPage } from "../forgot-pass/forgot-pass";
import { HomePage } from "../../pages/home/home";
import firebase from "firebase/app";
import { userRef, lawyerRef } from "../../modules/database.nodes";
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController) {}
  //attributes
  userInfo: any = {}; // to get data from html template

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

  //Login
  login() {
    firebase.auth().signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
      .then(data => {
        const userData: any = {};
        console.log(data.user.uid);
        if (data) {
          const uid=data.user.uid;
          firebase.database().ref(userRef).orderByChild("uid").equalTo(data.user.uid).on("value", data => {
              //search in db and retrieve data
              // console.log(data);
              const user = this.snaptoObject(data);
              console.log(user);//recieved object

              this.navCtrl.setRoot(HomePage,user).then(()=>{
                this.toastCtrl.create({
                  message:`Welcome ${user.firstName}`
                }).present()
              })
              if (user == null) {
                firebase.database().ref(lawyerRef).orderByChild("uid").equalTo(uid).on("value", data => {
                  const user= this.snaptoObject(data);
                  console.log("lawer")
                  console.log(user);
                });
              }
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  snaptoObject(snap) { // to get data from db and put it into array
    let array = [];
    snap.forEach(element => {
      let item = element.val();
      item.key = element.key;
      array.push(item);
    });
    return array[0];
  }
}
