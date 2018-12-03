import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawyerProfileTabsPage } from './lawyer-profile-tabs';

@NgModule({
  declarations: [
    LawyerProfileTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(LawyerProfileTabsPage),
  ],
})
export class LawyerProfileTabsPageModule {}
