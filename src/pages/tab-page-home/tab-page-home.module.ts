import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPageHomePage } from './tab-page-home';

@NgModule({
  declarations: [
    TabPageHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabPageHomePage),
  ],
})
export class TabPageHomePageModule {}
