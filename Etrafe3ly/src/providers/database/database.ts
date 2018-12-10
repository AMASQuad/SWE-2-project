import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import firebase from 'firebase';
import { user } from '../../modules/user';
import { usersCollection, lawyersCollection, lawyerRef, userRef } from '../../modules/database.nodes';
import { lawyer } from '../../modules/lawyer';
import { CameraOptions, Camera } from '@ionic-native/camera';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

    constructor(private camera:Camera) {
    firebase.firestore().settings({timestampsInSnapshots: true})
  }
  //---------------user Registration using firebase storage (firestore)-----------------
  userRegistration2FS(User:user){
    firebase.auth().createUserWithEmailAndPassword(User.email,User.password).then((data)=>{
    const db = firebase.firestore() //firestore db
    User.uid = data.user.uid;
    User.password = null
    db.collection(usersCollection).doc(data.user.uid).set(User).then((dataRef)=>{
      //successful write
    })
}).catch((err) => {
  console.log(err);//handling error
})
}
//-----------------------------------------------

//------------------------lawyer Registration using firebase storage (firestore)-----------------
lawyerRegister2FS(Lawyer:lawyer){
  firebase.auth().createUserWithEmailAndPassword(Lawyer.email,Lawyer.password).then((data)=>{
    const db = firebase.firestore() //firestore db
    Lawyer.uid = data.user.uid;
    Lawyer.password = null;
    db.collection(lawyersCollection).doc(Lawyer.email).set(Lawyer)
    .then((docRef)=>{
         //successful write
    }).catch(err=>{
      console.log(err)
    })
    db.settings({
      timestampsInSnapshots: true
    });
}).catch((err) => {
  console.log(err);//handling error
})
console.log('lawyer registered');
}
//----------------------------------------------------------

  //---------------user Registration using firebase storage (firestore)-----------------
  userRegistration2RTDB(User:user){
    firebase.auth().createUserWithEmailAndPassword(User.email,User.password).then((data)=>{
    const db = firebase.database() 
    User.uid = data.user.uid;
    User.email = null;
    User.password = null;
    db.ref(userRef).push(User)
}).catch((err) => {
  console.log(err);//handling error
})
}
//-----------------------------------------------


//------------------------lawyer Registration using firebase realtime database-----------------
lawyerRegister2RTDB(Lawyer:lawyer){
  firebase.auth().createUserWithEmailAndPassword(Lawyer.email,Lawyer.password).then((data)=>{
    const db = firebase.database() 
    Lawyer.uid = data.user.uid;
    Lawyer.email = null;
    Lawyer.password = null;
    db.ref(lawyerRef).push(Lawyer) 
}).catch((err) => {
  console.log(err);//handling error
})
}
//----------------------------------------------------------





//------------------update user info---------------------
updateInfo4User_RTDB(key,data){
  firebase.database().ref(userRef+'/'+key).set(data)
}
//-------------------------------------------------

//------------------------------update lawyer info---------------
updateInfo4Lawyer_RTDB(key,data){
  firebase.database().ref(lawyerRef+'/'+key).set(data)
}
//-------------------------------------

//------------------update user info---------------------
updateInfo4User_FS(key,data){
  firebase.firestore().collection(usersCollection).doc(key).set(data)
}
//-------------------------------------------------

//------------------------------update lawyer info---------------
updateInfo4Lawyer_FS(key,data){
  firebase.firestore().collection(usersCollection).doc(key).set(data)
}
//-------------------------------------

/*uploadImage(imageString) : Promise<any>
   {
      let image       : string  = 'lawyer-' + new Date().getTime() + '.jpg',
          storageRef  : any,
          parseUpload : any;

      return new Promise((resolve, reject) =>
      {
         storageRef       = firebase.storage().ref('posters/' + image);
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
*/
//attributes
picData:any;
picURL:any;
myPicRef = firebase.storage().ref('/')

takePic(uid){
  //destnation
//  try{
  //defining camera options
  const options:CameraOptions ={
    quality:50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true
  }
  const result = this.camera.getPicture(options).then((imageData)=>{
    this.picData = imageData
    this.uploadPic(uid)
  })
  //store image as base64 string
  //const image = `data:image/jpeg;base64,${result}`

  //distenation to img
  //const picture = firebase.storage().ref('pictures')

  //picture.putString(image,'data_url')


//    }
//    catch(err){
//        console.log(err)
//    }
}

uploadPic(uid){
  this.myPicRef.child(uid).child('image.jpeg')
  .putString(this.picData,'base64',{contentType:'image/jpeg'})
  .then(savepic=>{
    this.picURL = savepic.ref.getDownloadURL()
  })
}

//------------------------------rating-----------------

}
