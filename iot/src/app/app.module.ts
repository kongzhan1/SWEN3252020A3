import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BatteryStatusPage } from '../pages/battery-status/battery-status';
import { SelfDesignPage } from '../pages/self-design/self-design';

import { ChartsModule } from 'ng2-charts-x';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BatteryStatusPage,
    SelfDesignPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BatteryStatusPage,
    SelfDesignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
