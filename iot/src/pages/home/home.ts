import { Component } from '@angular/core';   
import { NavController, AlertController } from 'ionic-angular';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * Variables that are needed for connecting to MQTT.
   */
  private topic: string = 'swen325/a3';
  private clientId: string = '4a5814d425744b059bd8bff8f78dda2f';
  private mqttStatus: string = 'Disconnected';
  private mqttClient: any = null;

  /**
   * Firestore reference. This variable can be used to get access to the firestore database.
   */
  public locations: firebase.firestore.CollectionReference;

  /**
   * Variables that store parsed data from MQTT.
   */
  private message: any = '';
  private timestamp: any = '';
  private sensor_location: any = '';
  private motion_status: any = '';
  private battery_sttaus: any = '';

  /**
   * Variables that store total number of movements of each locations.
   */
  private living: number;
  private kitchen: number;
  private dining: number;
  private toilet: number;
  private bedroom: number;

  /**
   * lastLocation stands for the last location where the activity of the elderly was detected.
   */
  private lastLocation: any = '';

  /**
   * timeAfterLastMotion stands for the time duration of no activity of the elderly was detected, 
   * specifying in mintue units.
   */
  private timeOfLastMotion: number;

  /**
   * This time since the last motion detected. 
   */
  private duration: any = '';
  
  /**
   * Specifying the bar chart attributes. 
   */
  private barChartOptions: any;

  private barChartLabels: string[];
  private barChartType: string;
  private barChartLegend: boolean;
  private barChartData: any[];

  

  private alertFirstTime: boolean = true; 

  constructor(public navCtrl: NavController, public alert: AlertController) {
    // Force the application automatically connect to MQTT.
    this.connect();

    // Referring the collection specified in the firestore.
    this.locations = firebase.firestore().collection(`/locations`);

    // Initialize the lastLocation to be living room.
    this.lastLocation = 'living';
    // Initialize the timeAfterLastMotion to be '0'.
    this.timeOfLastMotion = 0;
    // Initialize the duration to be '0';
    this.duration = '0.0';

    // Initialize bar chart attributes.
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartLabels = ['Living', 'Kitchen', 'Dining', 'Toilet', 'Bedroom'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = this.barChartData = [
      { data: [2.2, 1.4, 3.3, 2.5, 3], label: 'Time between two movements in mins' }
    ];
    
    let time: String = '2019-10-23 16:01:49';
    let bat: String = '0';
    let motion: String = '0';
    let count: number = 0;
    this.locations.doc('living').update({
      timestamp: time,
      battery_status: bat,
      motion_status: motion,
      activity_count: count
    });
    this.locations.doc('kitchen').update({
      timestamp: time,
      battery_status: bat,
      motion_status: motion,
      activity_count: count
    });
    this.locations.doc('dining').update({
      timestamp: time,
      battery_status: bat,
      motion_status: motion,
      activity_count: count
    });
    this.locations.doc('toilet').update({
      timestamp: time,
      battery_status: bat,
      motion_status: motion,
      activity_count: count
    });
    this.locations.doc('bedroom').update({
      timestamp: time,
      battery_status: bat,
      motion_status: motion,
      activity_count: count
    });
  }

  async ionViewWillEnter(){

    this.living = await this.getActivityCount('living');
    this.kitchen = await this.getActivityCount('kitchen');
    this.dining = await this.getActivityCount('dining');
    this.toilet = await this.getActivityCount('toilet');
    this.bedroom = await this.getActivityCount('bedroom');
    this.barChartData = this.barChartData = [
      { data: [this.living, this.kitchen, this.dining, this.toilet, this.bedroom], label: 'Time between two movements in mins' }
    ];
  }

  /**
   * This is the method which connects the MQTT client to the specificed MQTT. 
   */
  public connect() {
    this.mqttStatus = 'Connecting...';
    this.mqttClient = new Paho.Client('barretts.ecs.vuw.ac.nz', 8883, '/mqtt', this.clientId);

    // set callback handlers
    this.mqttClient.onConnectionLost = this.onConnectionLost;
    this.mqttClient.onMessageArrived = this.onMessageArrived;

    // connect the client
    console.log('Connecting to mqtt via websocket');
    this.mqttClient.connect({ timeout: 10, useSSL: false, onSuccess: this.onConnect, onFailure: this.onFailure });
  }

  /**
   * This method is called when connection is successful. This mqtt client will then subscribe to the mqtt. 
   */
  public onConnect = () => {
    console.log('Connected');
    this.mqttStatus = 'Connected';

    // subscribe
    this.mqttClient.subscribe(this.topic);
  }

  /**
   * This method is called when the connection is failed. It sets the mqttStatus field to be failed.
   */
  public onFailure = (responseObject) => {
    console.log('Failed to connect');
    this.mqttStatus = 'Failed to connect';
  }

  /**
   * This method is called to handle the connection lost. 
   */
  public onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      this.mqttStatus = 'Disconnected';
    }
  }

  /**
   * This method is called to handle the messages get from the MQTT.
   */
  public onMessageArrived = (message) => {
    this.message = message.payloadString;
    this.parseMessage();
    console.log("message: " + this.message);
  }

  /**
   * This method is for parsing the message that is in CSV format. It splits the message string based
   * on commas and assigns tokens to corresponding variables. 
   */
  public async parseMessage() {
    var tokens = this.message.split(',');
    this.timestamp = tokens[0];
    this.sensor_location = tokens[1];
    this.motion_status = tokens[2];
    this.battery_sttaus = tokens[3];

    // Update values in firestore.
    this.updateValues(this.sensor_location, this.timestamp, this.battery_sttaus, this.motion_status);


    if (this.motion_status == '1') {
      // Detecting a motion, record the location as well as reset the timer.
      this.lastLocation = this.sensor_location;
      this.timeOfLastMotion = 0
      console.log("motion!!!!");
    } else {
      if (this.timeOfLastMotion == 0) {
        // Giving the timeAfterLastMotion a new value. 
        this.timeOfLastMotion = new Date(this.timestamp).getTime();
      }
      // Calculate the duration of inactive.
      this.calculateInactiveTime(new Date(this.timestamp).getTime());
    }

    // Update bar chart values
    this.barChartData = [
      { data: [this.living, this.kitchen, this.dining, this.toilet, this.bedroom], label: 'Total number of movements' }
    ];

    // Alert behaviors
    if(this.alertFirstTime && this.duration >= 5.0){
      this.alertFirstTime = false;
      const alt = await this.alert.create({
        title: 'Inactive Warning',
        subTitle: 'No activity detection over 5 minutes!',
        buttons: [
          {
            text: 'Acknoledge'
          }
        ]
      })
      await alt.present();
    }
    if(this.motion_status == '1'){
      this.alertFirstTime = true;
    }
  }

  /**
   * Calculate and the inactive time and update it to the duration variable. The method transfers the 
   * current time and the last seen motion time to be millionsecond first, then it calculates the minute
   * with ten seconds values and stores the time into the duration variable. 
   */
  public calculateInactiveTime(current: number) {
    var temp = (current - this.timeOfLastMotion)/1000/60;
    this.duration = temp.toFixed(1);
  }

  /**
   * Update method to update values in firestore. It simply stores the newest timestamp, battery and motion 
   * values into the instance with corresponding location. But for updating activity_count, it calls the get
   * function first, which gets the current count value, and it checks if the motion is 1 or not. If the motion
   * is one, it will increase the count by 1 and update it into the firestore. 
   * @param location 
   * @param time 
   * @param battery 
   * @param activity 
   * @param motion 
   */
  public async updateValues(location: string, time: string, battery: string, motion: string): Promise<any> {
    let count = await this.getActivityCount(location);
    if (motion == '1') {
      count += 1;
    }
    let bat = parseInt(battery);
    if(location == 'living'){
      this.living = count;
    } else if (location == 'kitchen') {
      this.kitchen = count;
    } else if (location == 'dining') {
      this.dining = count;
    } else if (location == 'toilet') {
      this.toilet = count;
    } else if (location == 'bedroom') {
      this.bedroom = count;
    }
    return this.locations.doc(location).update({
      timestamp: time,
      battery_status: bat,
      motion_status: motion,
      activity_count: count
    });
  }

  /**
   * Get activity count method. It takes the location as parameter and gets the current stored activity count 
   * value. 
   * @param location 
   */
  public async getActivityCount(location: string): Promise<any> {
    const ref = this.locations.doc(location);
    const count = await ref.get().then((doc) => {
      if (doc.exists) {
        let loc_fields = doc.data();
        let num = loc_fields.activity_count;
        return num;
      }
    })
    return count;
  }

  /**
   * This is the method called when user clicks on the bar chart. 
   * @param e 
   */
  public chartClicked(e: any): void {
    // Do nothing. 
  }

  /**
   * This is the method called when user's mouse hovers on the bar chart. 
   * @param e 
   */
  public chartHovered(e: any): void {
    // Do nothing. 
  }

}
