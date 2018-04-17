import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AlertController, IonicModule, NavController, NavParams, Platform} from 'ionic-angular';
import { User } from '../../User';
import {BrowserModule} from "@angular/platform-browser";
import {MyApp} from "../../app/app.component";
import {MainTabPage} from "../main-tab/main-tab";
import {BackButtonService} from "../../services/backButton.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user :User = new User();

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,private backButtonService: BackButtonService,
  private platform: Platform) {

    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(null);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onClick():void{
    if(!this.user.userName){
      this.showAlert("","请输入用户名");
      return;
    }

    if(!this.user.password){
      this.showAlert("","请输入密码");
      return;
    }

    //校验成功
    this.navCtrl.push(MainTabPage);

  }


  /**
   *
   * @param {string} title
   * @param {string} msg
   */
  private showAlert(title?: string, msg?:string):void{
    if(!msg)
      return;
    let alert = this.alertCtrl.create({
      title:title,
      subTitle:msg,
      buttons:["确定"]
    });

    alert.present();
  }

}
