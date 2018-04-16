import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPageAboutPage } from './tab-page-about';

@NgModule({
  declarations: [
    TabPageAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPageAboutPage),
  ],
})
export class TabPageAboutPageModule {}
