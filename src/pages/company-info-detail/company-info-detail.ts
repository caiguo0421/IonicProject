import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CompanyInfo} from "../../CompanyInfo";

/**
 * Generated class for the CompanyInfoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-company-info-detail',
  templateUrl: 'company-info-detail.html',
})
export class CompanyInfoDetailPage {

  selectedItem: CompanyInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get("companyInfo");
    console.log("选中公司："+this.selectedItem.companyName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyInfoDetailPage');
  }

}
