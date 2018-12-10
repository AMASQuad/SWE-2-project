import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ForgotPassPage } from "../forgot-pass/forgot-pass";
import { HomePage } from "../../pages/home/home";
import firebase from "firebase";
import { userRef, lawyerRef, usersCollection, lawyersCollection } from "../../modules/database.nodes";
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
  // with REaltime DB
  
  login() {
    firebase.auth().signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
    .then(data=>{ 
      const uid = data.user.uid //made this cuz of conflict
      firebase.database().ref(lawyerRef).orderByChild("uid").equalTo(uid).on("value", data => {
        //
          if (data.exists()){
         const userData = this.userDataObj.snaptoObject(data);
          this.userDataObj.collectData(userData,lawyerRef) // store data in service
          this.navCtrl.setRoot(HomePage).then(()=>{
            //lawyer logged in

          })
        
        }
          else {
            firebase.database().ref(userRef).orderByChild('uid').equalTo(uid).on('value',data =>{
              const userData = this.userDataObj.snaptoObject(data)
              this.userDataObj.collectData(userData,userRef) // store data in service
              this.navCtrl.setRoot(HomePage).then(()=>{
                //user logged in

              })
            })
          }
        //
      })
              }
          )}
          

          
         /*login() {//user or lawyer login
          firebase.auth().signInWithEmailAndPassword(this.userInfo.email, this.userInfo.password)
          .then(data=>{ 
            const uid = data.user.uid //made this cuz of conflict
            const db = firebase.firestore()
            db.collection(usersCollection).doc(uid).get().then(data=>{
              if(data.exists){
                  const userData = data.data() // store data from db in object
                  this.userDataObj.collectData(userData,'Users')
                  this.navCtrl.setRoot(HomePage).then(()=>{
                    //lawyer logged in
        
                  }).catch(err=>{
                    console.log(err)
                  })
              }
              else{
                db.collection(lawyersCollection).doc(uid).get().then(data=>{
                    const lawyerData = data.data() // store data from db in object
                    this.userDataObj.collectData(lawyerData,'Lawyers')
                    this.navCtrl.setRoot(HomePage).then(()=>{
                      //lawyer logged in
          
                    }).catch(err=>{
                      console.log(err)
                    })
                })
              }
            })
              }
                )}*/
}

