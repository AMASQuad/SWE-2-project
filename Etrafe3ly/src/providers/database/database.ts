import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { user } from '../../modules/user';
import { usersCollection, lawyersCollection, lawyerRef, userRef, ratingRef } from '../../modules/database.nodes';
import { lawyer } from '../../modules/lawyer';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { Rating } from '../../modules/rating';
import { CameraProvider } from '../camera/camera';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
    //attributes
    _Camera:CameraProvider;
    constructor(private camera:CameraProvider) {
      this._Camera = camera;
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

snaptoObject(snap) { // to get data from db and put it into array
  let array = [];
  snap.forEach(element => {
    let item = element.val();
    item.key = element.key;
    array.push(item);
  });
  return array[0];
}

  //---------------user Registration using firebase REaltime-----------------
  userRegistration2RTDB(User:user){
    firebase.auth().createUserWithEmailAndPassword(User.email,User.password).then((data)=>{
    const db = firebase.database() 
    User.uid = data.user.uid;
    User.email = null;
    User.password = null;
    //apply this in lawyer
    const newRefKey = db.ref(userRef).push()
    User.key = newRefKey.key
    newRefKey.set(User)
    //---------
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
    ///apply this in lawyer
    const newRefKey = db.ref(lawyerRef).push()
    Lawyer.key = newRefKey.key

    this._Camera.uploadImage(this._Camera.takenPic,Lawyer.uid).then(()=>{
      this._Camera.getURL(Lawyer.uid)
      Lawyer.imageURL = this._Camera.imageURL
    })
    newRefKey.set(Lawyer)
    this._Camera.freeData()
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
  this._Camera.uploadImage(this._Camera.takenPic,key) 
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
/*
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
}*/

uploadPic(uid){
  this.myPicRef.child(uid).child('image.jpeg')
  .putString(this.picData,'base64',{contentType:'image/jpeg'})
  .then(savepic=>{
    this.picURL = savepic.ref.getDownloadURL()
  })
}

//------------------------------rating-----------------
// save rate to database (realtime database)
saveRateTORTDB(rate:Rating){  
      const db = firebase.database().ref(ratingRef)
      //apply this in lawyer
      const ratingkey = rate.userUID+'_'+rate.lawyerUID //setting key 
      db.child(ratingkey).set(rate)
  }
//search whether user rated this lawyer or not
  checkRatedOrNot(user,lawyer){
    //get user and lawyer uid 
    const rateKey = user.uid+'_'+lawyer.uid
    
    //query on db to check if exists or not and if exists return false , if not then true

    const db = firebase.database().ref(ratingRef)

    if(db.child(rateKey).toString() != 'undefined'){
        return false;
    }
    else{
        return true;
    }



  }

  // retrieve avg rate from database (realtime database)

  //get avg rate
getAvgRate(lawyer:any){
  //initialize to ensures it is free
  let totalRate:number[] = [];
  //-----------------
    let totalObjects:any[] = []
  //-------------------
  const db = firebase.database().ref(ratingRef)
  db.orderByChild('lawyerUID').equalTo(lawyer.uid).on('value',dataSnapshot =>{
    totalObjects.push(this.snaptoObject(dataSnapshot))
    for(let i = 0;i< totalObjects.length ; i++){
      totalRate.push(totalObjects[i].value)
    }
    var sum = 0 ;
  for( let i = 0; i < totalRate.length ; i++ ){
    sum += totalRate[i]; 
  }
    return sum/totalRate.length;
    
    //---------------finished saving data into array from db
  }) 
  //-----------------------looping to get total then we calculate avg rate 
   
} 
  

}
