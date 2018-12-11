import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyerProfilePage } from './lawyer-profile';
import { StarRatingComponent } from '../../components/star-rating/star-rating';

@NgModule({
  declarations: [
    LawyerProfilePage,
    StarRatingComponent
    
  ],
  imports: [
    IonicPageModule.forChild(LawyerProfilePage),
    
  ],
})
export class LawyerProfilePageModule {}
