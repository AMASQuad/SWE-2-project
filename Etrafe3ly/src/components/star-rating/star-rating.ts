import { Component } from '@angular/core';
import { StarsRatingProvider } from '../../providers/stars-rating/stars-rating';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { DatabaseProvider } from '../../providers/database/database';


/**
 * Generated class for the StarRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.html'
})
export class StarRatingComponent {

  //attributes
  userDataObj:UserDataProvider;
  databaseObj:DatabaseProvider;
  constructor(private rateService:StarsRatingProvider,
    db:UserDataProvider,_Database:DatabaseProvider) {
      this.userDataObj=db
      this.databaseObj = _Database
  }
  //we call this when we rate
  starHandler(value){//passing value of rate and user id and lawyer id and comment message
    this.rateService.rateVal=value
  }

  Rate(){
    this.rateService.SetUserRate4Lawyer(this.userDataObj.userData,this.userDataObj.lawyerData)
  }
    


}
