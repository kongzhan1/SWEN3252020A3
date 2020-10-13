import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@IonicPage()
@Component({
  selector: 'page-battery-status',
  templateUrl: 'battery-status.html',
})
export class BatteryStatusPage {

  private living: number = 0;
  private kitchen: number = 0;
  private dining: number = 0;
  private toilet: number = 0;
  private bedroom: number = 0;

  public locations: firebase.firestore.CollectionReference;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

    // Referring the collection specified in the firestore.
    this.locations = firebase.firestore().collection(`/locations`);
    Observable.interval(3000).subscribe(() => {
      this.updateBatteries();
    });
  }

  /**
   * This method is called each time when the battery screen is going to be activated. In order to let the user 
   * able to see the up-to-date status of the batteries, it calls the update method when the user enter this page.
   */
  ionViewWillEnter() {
    this.updateBatteries();
  }

  /**
   * This is the update method that updates the batteries's status showing on the screen. It calls the fetch data
   * method to fetch the newest data from firestore and then assigns them to corresponding variables.
   */
  public async updateBatteries() {
    this.living = await this.getBatteryStatus('living');
    this.kitchen = await this.getBatteryStatus('kitchen');
    this.dining = await this.getBatteryStatus('dining');
    this.toilet = await this.getBatteryStatus('toilet');
    this.bedroom = await this.getBatteryStatus('bedroom');
  }

  /**
   * This is the fetch data method which is used to fetch data from firestore. It has one paramter to locate which 
   * sensor's battery is going to be retrieved from the firestore. 
   */
  public async getBatteryStatus(location: string): Promise<any> {
    const ref = this.locations.doc(location);
    const battery = await ref.get().then((doc) => {
      if(doc.exists) {
        let loc_fields = doc.data();
        let bat = loc_fields.battery_status;
        return bat;
      }
    })
    return battery;
  }

}
