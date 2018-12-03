import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyerProfilePage } from './lawyer-profile';

@NgModule({
  declarations: [
    LawyerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(LawyerProfilePage),
  ],
})
export class LawyerProfilePageModule {}
