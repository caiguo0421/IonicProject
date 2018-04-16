import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MainTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-tab',
  templateUrl: 'main-tab.html'
})
export class MainTabPage {

  tabPageHomeRoot = 'TabPageHomePage'
  tabPageCompanyRoot = 'TabPageCompanyPage'
  tabPageVersionInfoRoot = 'TabPageVersionInfoPage'
  tabPageAboutRoot = 'TabPageAboutPage'


  constructor(public navCtrl: NavController) {}

}
