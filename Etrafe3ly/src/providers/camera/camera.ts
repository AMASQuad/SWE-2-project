import { Injectable } from '@angular/core';
import { Camera ,CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase'
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CameraProvider {
  // attributes
  public takenPic : String
  

  //this will used
  imagePath:string;
  constructor(private camera:Camera,private toastCtrl:ToastController) {
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
     uploadImage(imageRef,uid) : Promise<any> {
          let image   : string  = uid+ '.jpeg', // image name (set to = lawyer uid)
          storageRef  : any,
          parseUpload : any;
          return new Promise((resolve, reject) =>
      {
         storageRef       = firebase.storage().ref('Lawyers/'+image);
         parseUpload      = storageRef.putString(imageRef,'data_url')

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
   //----------------------------will work with this-----------------
   //get image from gallery
   openGal(){
      this.camera.getPicture({
         destinationType : this.camera.DestinationType.DATA_URL,
         sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
         encodingType : this.camera.EncodingType.JPEG,
         correctOrientation : true,
         targetHeight : 300,
         targetWidth : 300,
         cameraDirection : this.camera.Direction.FRONT,
         quality : 50,
         mediaType : this.camera.MediaType.PICTURE
      }).then( (imagedata:string)=>{
            this.imagePath = "data:image/jpeg;base64;" + imagedata
            //
            //
      } )

   }

   //upload image as tried
   uploadPic(imagePath:any,Lawyer:any){
      let image : string  = Lawyer.uid + '.jpeg'// image name and extension

      let storageRef = firebase.storage().ref('Lawyers/'+image)
      storageRef.putString(imagePath,firebase.storage.StringFormat.DATA_URL)
      .then( (url)=>{
         Lawyer.imageURL = url
         this.toastCtrl.create({
            message:`Lawyer.imageURL = url`,
            showCloseButton:true
         }).present()
      }).catch( err=>{
         this.toastCtrl.create({
            message:`Error happened in uploadPic() and its content : ${err}`,
            showCloseButton:true
         }).present()
      })
   }




   //---------------------------------------------------------
   //------------------------------get image url------------------
      
      
   
   freeData(){
      this.takenPic = '';
      this.imagePath = ''
      
   }

}

    
    //---------------------------
