import { Component } from '@angular/core';
import { StarsRatingProvider } from '../../providers/stars-rating/stars-rating';


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
  
  constructor(private rateService:StarsRatingProvider,
    ) {
    
  }
  //we call this when we rate
  starHandler(value){//passing value of rate and user id and lawyer id and comment message
    
    //this.rateService.SetUserRate4Lawyer(value)
  }
  commentHandler(cmt){

  }

}
