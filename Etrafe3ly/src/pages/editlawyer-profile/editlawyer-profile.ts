import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
import firebase from 'firebase'
import { lawyer } from '../../modules/lawyer';
import { lawyerRef } from '../../modules/database.nodes';
import { CameraOptions, Camera } from '@ionic-native/camera';
/**
 * Generated class for the EditlawyerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editlawyer-profile',
  templateUrl: 'editlawyer-profile.html',
})
export class EditlawyerProfilePage {
  //attributes
  userDataObj:UserDataProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    db:UserDataProvider,private camera:Camera) {
      this.userDataObj = db;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditlawyerProfilePage');
  }
  updateInfoToDB(){
    firebase.database().ref(lawyer+'/'+this.userDataObj.userData.key).set(this.userDataObj.userData)
  }

  async uploadPic(){
    try{
    //defining camera options
    const options:CameraOptions ={
      quality:50,
      targetHeight:600,
      targetWidth:600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true
    }
    const result =await this.camera.getPicture(options)
    //store image as base64 string
    const image = `data:image/jpeg;base64,${result}`

    //distenation to img
    const picture = firebase.storage().ref('pictures')

    picture.putString(image,'data_url')


      }
      catch(err){
          console.log(err)
      }
  }
}
