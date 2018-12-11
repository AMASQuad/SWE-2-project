import { Injectable } from '@angular/core';
import firebase from 'firebase'
import { Rating } from '../../modules/rating';
import { ratingRef } from '../../modules/database.nodes';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class StarsRatingProvider {
  //attributes
  _Database:DatabaseProvider;
  constructor(private db:DatabaseProvider) {
    this._Database = db
   }
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
//set stars for users (Firestore)
/*
  setRating(userUID,lawyerUID,value,comment){
    //Document Data
    const rating:Rating = { userUID , lawyerUID , value , comment }//exact name of object

    //path to document
    const ratingPath = `Rating/${rating.userUID}_${rating.lawyerUID}`

    //set The data
    return firebase.firestore().doc(ratingPath).set(rating)
  }*/
//----------------------owncode---------------------
  //for realtime DB -->>Save rate that user submits in component
  comment:string;
  
  SetUserRate4Lawyer(uid,lid,comment){
     // const rateObj = 
     // this._Database.saveRateTORTDB(rate)

  }

}
