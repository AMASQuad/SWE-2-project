import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { ForgotPassPage } from "../forgot-pass/forgot-pass";
import { HomePage } from "../../pages/home/home";
import firebase from "firebase";
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
  snaptoObject(snap:any) { // to get data from db and put it into array
    let array = [];
    snap.forEach(element => {
      let item = element.val();
      item.key = element.key;
      array.push(item);
    });
    return array[0];
  }
  //-----------------------
  public recievedData : any = {} //from user
  //Login
  searchForUser(uid){
              
    firebase.database().ref('Accounts/').orderByChild("uid").equalTo(uid)
    .on("value", data => {
    //search in db and retrieve data
    // console.log(data);
    const userData = this.snaptoObject(data);
    this.recievedData = userData; //from user
    console.log('before If');
    console.log(userData);
    console.log(data.key);
    if(data.key){//check in users
        //
          console.log('users table')
          console.log(userData)
          this.navCtrl.setRoot(HomePage,userData).then(() =>{
              this.toastCtrl.create({
                message : `Welcome ${userData}`
              }).present()
          })
        //
        }})} // here
        searchForLawyer(uid){
          firebase.database().ref('Accounts/').orderByChild("uid").equalTo(uid).on("value", data => {
            //  
             const userData = this.snaptoObject(data);
              console.log(data.key)
              console.log('lawyers table')
              console.log(userData)
              this.navCtrl.setRoot(HomePage,userData).then(()=>{
                this.toastCtrl.create({
                  message:`Welcome ${userData.firstName}`
                }).present()
              })
            //
          })
        }

  login() {
    
    firebase.auth().signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
    .then(data=>{ 
      const uid = data.user.uid
      firebase.database().ref(userRef).orderByChild("uid").equalTo(uid).on("value", data => {
        //  
         const userData = this.snaptoObject(data);
          this.navCtrl.setRoot(HomePage,userData).then(()=>{
            this.toastCtrl.create({
              message:`Welcome ${userData.firstName}`
            }).present()
          })
        //
      })
      
    
        
              }
  
          )}

    
}

