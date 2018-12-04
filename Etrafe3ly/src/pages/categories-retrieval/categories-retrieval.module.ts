import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesRetrievalPage } from './categories-retrieval';

@NgModule({
  declarations: [
    CategoriesRetrievalPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriesRetrievalPage),
  ],
})
export class CategoriesRetrievalPageModule {}
