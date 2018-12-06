import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { lawyer } from '../../modules/lawyer';
import firebase from 'firebase';
import {  lawyerRef } from '../../modules/database.nodes';
//import { Camera } from '@ionic-native/camera';
//import { ToastController } from 'ionic-angular';


/**
 * Generated class for the LawyerSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lawyer-sign-up',
  templateUrl: 'lawyer-sign-up.html',
})
export class LawyerSignUpPage {

  //creating object from lawyer class
  newLawyer = new lawyer();

  constructor(public navCtrl: NavController, public navParams: NavParams, /*private camera:Camera, private toastCtrl:ToastController*/) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawyerSignUpPage');
  }
  //lawyer registration function
  lawyerRegister(){
      firebase.auth().createUserWithEmailAndPassword(this.newLawyer.email,this.newLawyer.password).then((data)=>{
        this.newLawyer.uid = data.user.uid;
        this.newLawyer.email = null;
        this.newLawyer.password = null;
        firebase.database().ref(lawyerRef).push(this.newLawyer);
    }).catch((err) => {
      console.log(err);//handling error
    })
    console.log('lawyer registered');
  }

  //get picture

  /*imagePath='';
  openGallery(){
    this.camera.getPicture({
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType:this.camera.EncodingType.JPEG,
      correctOrientation:true,
      targetHeight:300,
      targetWidth:300,
      cameraDirection:this.camera.Direction.FRONT,
      quality:50,
      mediaType:this.camera.MediaType.PICTURE,
      })
      .then((imagedata:string)=>{
        this.imagePath= "data:image/jpeg;base64,"+imagedata;
       // const portions:string[]=imagedata.split('?');
       // this.imagePath=portions[0];

      })
      .catch((error)=>{
        this.toastCtrl.create({
          message:'Error in getting Image : '+error,
          duration:5000
        }).present();
      })
  }*/
}
