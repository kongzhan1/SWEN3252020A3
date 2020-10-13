import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import {SelfDesignPage} from '../self-design/self-design';
import {BatteryStatusPage} from '../battery-status/battery-status';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  // Assigning 3 pages to correspond variables which will be used 
  // by the bottom navigation tap bar. 
  screenOne = HomePage;
  screenTwo = BatteryStatusPage;
  screenTri = SelfDesignPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
