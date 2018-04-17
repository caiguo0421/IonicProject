import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CompanyInfo} from "../../CompanyInfo";
import {CompanyInfoDetailPage} from "../company-info-detail/company-info-detail";


/**
 * Generated class for the TabPageCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-page-company',
  templateUrl: 'tab-page-company.html',
})
export class TabPageCompanyPage {

  //SHCF	上海畅飞	http://113.57.169.43:8088/SHCF
  //FYJH	阜阳君和	http://113.57.169.43:8088/FYJH
  //SYDFW	沈阳东风王	http://113.57.169.43:8088/SYDFW
  companyInfoes: CompanyInfo[] = [
    {companyId: 1, companyNo: "NJDN", companyName: "南京东宁", serverUrl: "http://113.57.169.43:8088/NJDN"},
    {companyId: 2, companyNo: "SHCF", companyName: "上海畅飞", serverUrl: "http://113.57.169.43:8088/SHCF"},
    {companyId: 3, companyNo: "FYJH", companyName: "阜阳君和", serverUrl: "http://113.57.169.43:8088/FYJH"},
    {companyId: 4, companyNo: "SYDFW", companyName: "沈阳东风王", serverUrl: "http://113.57.169.43:8088/SYDFW"},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPageCompanyPage');
  }


  onSearch(event: any) {

  }


  onItemSelected(item: CompanyInfo) {
    if(!item) {
      console.log("未选中公司");
      return;
    }

    this.navCtrl.push(CompanyInfoDetailPage,{companyInfo:item});

  }


}
