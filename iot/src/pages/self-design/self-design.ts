import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@IonicPage()
@Component({
  selector: 'page-self-design',
  templateUrl: 'self-design.html',
})
export class SelfDesignPage {

  /**
   * These variables are for displaying on the pie chart. They are the time gap between two motions of each room.
   * These variables are for recording the last motion time, for calculating the inactive gap time.
   */
  private last_living: number = 0;
  private last_kitchen: number = 0;
  private last_dining: number = 0;
  private last_toilet: number = 0;
  private last_bedroom: number = 0;

  /**
   * These variables are for displaying on the pie chart. They are the time gap between two motions of each room.
   */
  private time_living: number = 5;
  private time_kitchen: number = 5;
  private time_dining: number = 5;
  private time_toilet: number = 5;
  private time_bedroom: number = 5;

  /**
   * Firestore referencing object, which is used to get access to the firestore and retrieve data from the database.
   */
  public locations: firebase.firestore.CollectionReference;

  /**
   * Label names of each color in the pir chart. 
   */
  public doughnutChartLabels: string[] =
    ['Time between two movements in Living(mins)',
      'Time between two movements in Kichen(mins)',
      'Time between two movements in Dining(mins)',
      'Time between two movements in Toilet(mins)',
      'Time between two movements in Bedroom(mins)'];

  /**
   * DoughnutChart data set, storing the inactive time gap of each location.
   */
  public doughnutChartData: any[];

  /**
   * ChartType variable, for specifying the type of the chart. 
   */
  public doughnutChartType: string = 'doughnut';


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.doughnutChartData = [
      { data: [this.time_living, this.time_kitchen, this.time_dining, this.time_toilet, this.time_bedroom], label: 'hey' }
    ];

    // Referring the collection specified in the firestore.
    this.locations = firebase.firestore().collection(`/locations`);
    Observable.interval(3000).subscribe(() => {
      this.updateTime();
    });
  }

  ionViewWillEnter() {
    this.updateTime();
  }

  /**
   * Update method for updating values in the doughnut chart. It calls the getDurarion() method to retrieve data from the firebase.
   */
  private async updateTime() {
    await this.getDuration('living');
    await this.getDuration('kitchen');
    await this.getDuration('dining');
    await this.getDuration('toilet');
    await this.getDuration('bedroom');
  }

  /**
   * The core function method of the class, which retrieves the data from the firebase based on the given location string. 
   * Also it compares the current time with the last motion time to get the time gap of inactivity of each room. 
   * And it updates the global fields and the chart values. 
   * @param location 
   */
  public async getDuration(location: string): Promise<any> {
    let motion = await this.getMotion(location);
    let current = await this.getTimeStamp(location)
    if (location == 'living') {
      if (this.last_living == 0 || motion == 1) {
        // update value.
        this.last_living = new Date(current).getTime();
        if (this.last_living < 1) {
          // minimum value.
          this.last_living = 1;
        }
      } else {
        // do gap calculation.
        let gap = new Date(current).getTime() - this.last_living;
        // round the gap to be nice number
        gap = gap / 60000;
        gap = Math.round(gap * 10) / 10;
        this.time_living = gap;
      }
    } else if (location == 'kitchen') {
      if (this.last_kitchen == 0 || motion == 1) {
        // update value.
        this.last_kitchen = new Date(current).getTime();
        if (this.last_kitchen < 1) {
          // minimum value.
          this.last_kitchen = 1;
        }
      } else {
        // do gap calculation.
        let gap = new Date(current).getTime() - this.last_kitchen;
        // round the gap to be nice number
        gap = gap / 60000;
        gap = Math.round(gap * 10) / 10;
        this.time_kitchen = gap;
      }
    } else if (location == 'dining') {
      if (this.last_dining == 0 || motion == 1) {
        // update value.
        this.last_dining = new Date(current).getTime();
        if (this.last_dining < 1) {
          // minimum value.
          this.last_dining = 1;
        }
      } else {
        // do gap calculation.
        let gap = new Date(current).getTime() - this.last_dining;
        // round the gap to be nice number
        gap = gap / 60000;
        gap = Math.round(gap * 10) / 10;
        this.time_dining = gap;
      }
    } else if (location == 'toilet') {
      if (this.last_toilet == 0 || motion == 1) {
        // update value.
        this.last_toilet = new Date(current).getTime();
        if (this.last_toilet < 1) {
          // minimum value.
          this.last_toilet = 1;
        }
      } else {
        // do gap calculation.
        let gap = new Date(current).getTime() - this.last_toilet;
        // round the gap to be nice number
        gap = gap / 60000;
        gap = Math.round(gap * 10) / 10;
        this.time_toilet = gap;
      }
    } else if (location == 'bedroom') {
      if (this.last_bedroom == 0 || motion == 1) {
        // update value.
        this.last_bedroom = new Date(current).getTime();
        if (this.last_bedroom < 1) {
          // minimum value.
          this.last_bedroom = 1;
        }
      } else {
        // do gap calculation.
        let gap = new Date(current).getTime() - this.last_bedroom;
        // round the gap to be nice number
        gap = gap / 60000;
        gap = Math.round(gap * 10) / 10;
        this.time_bedroom = gap;
      }
    }
    this.doughnutChartData = [
      { data: [this.time_living, this.time_kitchen, this.time_dining, this.time_toilet, this.time_bedroom], label: 'hey' }
    ];
  }

  /**
   * Fetch method to fetch timestamp values from firebase. 
   * @param location 
   */
  public async getTimeStamp(location: string): Promise<any> {
    const ref = this.locations.doc(location);
    const tim = await ref.get().then((doc) => {
      if (doc.exists) {
        let loc_fields = doc.data();
        let time = loc_fields.timestamp;
        return time;
      }
    });
    return tim;
  }

  /**
   * Fetch method to fetch motion values from firebase. 
   * @param location 
   */
  public async getMotion(location: string): Promise<any> {
    const ref = this.locations.doc(location);
    const count = await ref.get().then((doc) => {
      if (doc.exists) {
        let loc_fields = doc.data();
        let num = loc_fields.motion_status;
        return num;
      }
    })
    return count;
  }

  // Clicking events, do nothing.
  public chartClicked(e: any): void { }

  // Hovering events, do nothing. 
  public chartHovered(e: any): void { }

}
