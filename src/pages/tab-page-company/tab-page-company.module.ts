import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPageCompanyPage } from './tab-page-company';

@NgModule({
  declarations: [
    TabPageCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPageCompanyPage),
  ],
})
export class TabPageCompanyPageModule {}
