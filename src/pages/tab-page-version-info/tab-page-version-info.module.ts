import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPageVersionInfoPage } from './tab-page-version-info';

@NgModule({
  declarations: [
    TabPageVersionInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPageVersionInfoPage),
  ],
})
export class TabPageVersionInfoPageModule {}
