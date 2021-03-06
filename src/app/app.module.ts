import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {MainTabPage} from "../pages/main-tab/main-tab";
import {CompanyInfoDetailPage} from "../pages/company-info-detail/company-info-detail";
import {BackButtonService} from "../services/backButton.service";
import {HttpService} from "../services/HttpService";
import { HttpClientModule} from "@angular/common/http";
import {InMemoryDataService} from "../services/in-memory-data.service";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainTabPage,
    CompanyInfoDetailPage,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MainTabPage,
    CompanyInfoDetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackButtonService,
    HttpService
  ]
})
export class AppModule {
}
