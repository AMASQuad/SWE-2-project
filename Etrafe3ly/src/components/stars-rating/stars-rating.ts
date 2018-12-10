import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StarsRatingProvider } from '../../providers/stars-rating/stars-rating';


/**
 * Generated class for the StarsRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'stars-rating',
  templateUrl: 'stars-rating.html'
})
export class StarsRatingComponent {

  

  constructor(private starService:StarsRatingProvider) {
    
  }
  //attributes dont forget to create component and transfer this into it
  @Input() userID;
  @Input() lawyerID;

  rating : any;
  avgRating : any;

  ngOnInit(){
    this.rating = this.starService.getLawyerRating(this.lawyerID)
    this.avgRating = this.rating.map(arr=>{
      const ratings = arr.map(v=>v.value)
      return ratings.length ? ratings.reduce((total,val)=> total+val)/arr.length : 'not reviewed yet'
    })
  }
}
