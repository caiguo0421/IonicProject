import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Platform, Tabs} from 'ionic-angular';
import {BackButtonService} from "../../services/backButton.service";
import {TabPageCompanyPage} from "../tab-page-company/tab-page-company";
import {TabPageVersionInfoPage} from "../tab-page-version-info/tab-page-version-info";
import {TabPageAboutPage} from "../tab-page-about/tab-page-about";

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

  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;


  tabPageHomeRoot = 'TabPageHomePage'
  tabPageCompanyRoot = 'TabPageCompanyPage'
  tabPageVersionInfoRoot = 'TabPageVersionInfoPage'
  tabPageAboutRoot = 'TabPageAboutPage'

  constructor(public navCtrl: NavController, public backButtonService: BackButtonService,
              private platform: Platform) {

    this.tabRoots = [
      {
        root: TabPageCompanyPage,
        tabTitle: '租户信息',
        tabIcon: 'home'
      },
      {
        root: TabPageVersionInfoPage,
        tabTitle: '版本信息',
        tabIcon: 'information-circle'
      },
      {
        root: TabPageAboutPage,
        tabTitle: '设置',
        tabIcon: 'person'
      }
    ];

    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }


}
