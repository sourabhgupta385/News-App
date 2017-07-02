import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessPage } from './business';

@NgModule({
  declarations: [
    BusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessPage),
  ],
  exports: [
    BusinessPage
  ]
})
export class BusinessPageModule {}
