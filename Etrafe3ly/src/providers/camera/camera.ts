import { Injectable } from '@angular/core';
import { Camera ,CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase'
import 'rxjs/add/operator/map';
/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraProvider {
  // attributes
  public takenPic : String
  public imageURL : any;
  imageRef : any;
  constructor(private camera:Camera) {
    console.log('Hello CameraProvider Provider');
  }

  takePhoto(){
        const options : CameraOptions = {
            sourceType         : this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType    : this.camera.DestinationType.DATA_URL,
            quality            : 100,
            targetWidth        : 320,
            targetHeight       : 240,
            encodingType       : this.camera.EncodingType.JPEG,
            correctOrientation : true
        };

        this.camera.getPicture(options)
        .then((data) =>
        {
           this.takenPic 	= "data:image/jpeg;base64," + data;          
        }).catch(err=>{console.log(err)});
     }
     uploadImage(imageString,lawyerUID) : Promise<any> {
          let image   : string  = lawyerUID+ '.jpeg', // image name (set to = lawyer uid)
          storageRef  : any,
          parseUpload : any;
          return new Promise((resolve, reject) =>
      {
         storageRef       = firebase.storage().ref('Lawyers/' + image);
         parseUpload      = storageRef.putString(imageString, 'data_url');

         parseUpload.on('state_changed', (_snapshot) =>
         {
            // We could log the progress here IF necessary
            // console.log('snapshot progess ' + _snapshot);
         },
         (_err) =>
         {
            reject(_err);
         },
         (success) =>
         {
            resolve(parseUpload.snapshot);
         });
      });
   }

   //------------------------------get image url------------------
   getURL(uid){
      let db =firebase.storage().ref('Lawyers/'+uid+'.jpeg')
      this.imageURL = db.getDownloadURL()
      this.imageRef = db.fullPath
      
   }
   freeData(){
      this.takenPic = '';
      this.imageURL = '';
      this.imageRef = ''
   }

}

    
    //---------------------------
