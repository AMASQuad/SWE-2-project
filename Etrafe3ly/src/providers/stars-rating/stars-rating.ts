import { Injectable } from '@angular/core';
import firebase from 'firebase'

export interface Rating {
  userID:any;
  lawyerID:any;
  value:number;
  Comment:string;
}

@Injectable()
export class StarsRatingProvider {

  constructor() { }
  //get user Rating
  getUserRating(userID){
    const starRef = firebase.firestore().collection('Rating').where('uid','==',userID)
    .get()
    return starRef
  }

  //get lawyer rating
  getLawyerRating(lawyerID){
    const starRef = firebase.firestore().collection('Rating').where('uid','==',lawyerID)
    .get()
    return starRef
  }
//set stars
  setRating(userID,lawyerID,value,Comment){
    //Document Data
    const rating:Rating = { userID , lawyerID , value , Comment }//exact name of object

    //path to document
    const ratingPath = `Rating/${rating.userID}_${rating.lawyerID}`

    //set The data
    return firebase.firestore().doc(ratingPath).set(rating)

    
  }


}
