import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfileTabsPage } from './user-profile-tabs';

@NgModule({
  declarations: [
    UserProfileTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfileTabsPage),
  ],
})
export class UserProfileTabsPageModule {}
