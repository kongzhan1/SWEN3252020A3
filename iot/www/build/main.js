webpackJsonp([3],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatteryStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var BatteryStatusPage = /** @class */ (function () {
    function BatteryStatusPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.living = 0;
        this.kitchen = 0;
        this.dining = 0;
        this.toilet = 0;
        this.bedroom = 0;
        // Referring the collection specified in the firestore.
        this.locations = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("/locations");
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].interval(3000).subscribe(function () {
            _this.updateBatteries();
        });
    }
    /**
     * This method is called each time when the battery screen is going to be activated. In order to let the user
     * able to see the up-to-date status of the batteries, it calls the update method when the user enter this page.
     */
    BatteryStatusPage.prototype.ionViewWillEnter = function () {
        this.updateBatteries();
    };
    /**
     * This is the update method that updates the batteries's status showing on the screen. It calls the fetch data
     * method to fetch the newest data from firestore and then assigns them to corresponding variables.
     */
    BatteryStatusPage.prototype.updateBatteries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getBatteryStatus('living')];
                    case 1:
                        _a.living = _f.sent();
                        _b = this;
                        return [4 /*yield*/, this.getBatteryStatus('kitchen')];
                    case 2:
                        _b.kitchen = _f.sent();
                        _c = this;
                        return [4 /*yield*/, this.getBatteryStatus('dining')];
                    case 3:
                        _c.dining = _f.sent();
                        _d = this;
                        return [4 /*yield*/, this.getBatteryStatus('toilet')];
                    case 4:
                        _d.toilet = _f.sent();
                        _e = this;
                        return [4 /*yield*/, this.getBatteryStatus('bedroom')];
                    case 5:
                        _e.bedroom = _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This is the fetch data method which is used to fetch data from firestore. It has one paramter to locate which
     * sensor's battery is going to be retrieved from the firestore.
     */
    BatteryStatusPage.prototype.getBatteryStatus = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var ref, battery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.locations.doc(location);
                        return [4 /*yield*/, ref.get().then(function (doc) {
                                if (doc.exists) {
                                    var loc_fields = doc.data();
                                    var bat = loc_fields.battery_status;
                                    return bat;
                                }
                            })];
                    case 1:
                        battery = _a.sent();
                        return [2 /*return*/, battery];
                }
            });
        });
    };
    BatteryStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-battery-status',template:/*ion-inline-start:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/battery-status/battery-status.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="background-color: rgb(79, 200, 248)">\n      <p align="center">Battery Status</p>\n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: lightblue;">\n  <ion-list >\n    <ion-card style="background-color: lightblue;">\n      <ion-row justify-content: space-betwee>\n        <ion-col>\n          <ion-card-header>Living Room: </ion-card-header>\n        </ion-col>\n        <ion-col>\n          <ion-card-header *ngIf="this.living <= 20">\n            <p style="color: #ea3a3a; font-size: large; font-weight: 1000;">Low Battery</p>\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <progress-bar [progress]="this.living"></progress-bar>\n      </ion-card-content>\n    </ion-card >\n    <ion-card style="background-color: lightblue;">\n      <ion-row justify-content: space-betwee>\n        <ion-col>\n          <ion-card-header>Kitchen Area: </ion-card-header>\n        </ion-col>\n        <ion-col>\n          <ion-card-header *ngIf="this.kitchen <= 20">\n            <p style="color: #ea3a3a; font-size: large; font-weight: 1000;">Low Battery</p>\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <progress-bar [progress]="this.kitchen"></progress-bar>\n      </ion-card-content>\n    </ion-card>\n    <ion-card style="background-color: lightblue;">\n      <ion-row justify-content: space-betwee>\n        <ion-col>\n          <ion-card-header>Dining Room: </ion-card-header>\n        </ion-col>\n        <ion-col>\n          <ion-card-header *ngIf="this.dining <= 20">\n            <p style="color: #ea3a3a; font-size: large; font-weight: 1000;">Low Battery</p>\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <progress-bar [progress]="this.dining"></progress-bar>\n      </ion-card-content>\n    </ion-card>\n    <ion-card style="background-color: lightblue;">\n      <ion-row justify-content: space-betwee>\n        <ion-col>\n          <ion-card-header>Toilet Area: </ion-card-header>\n        </ion-col>\n        <ion-col>\n          <ion-card-header *ngIf="this.toilet <= 20">\n            <p style="color: #ea3a3a; font-size: large; font-weight: 1000;">Low Battery</p>\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <progress-bar [progress]="this.toilet"></progress-bar>\n      </ion-card-content>\n    </ion-card>\n    <ion-card style="background-color: lightblue;">\n      <ion-row justify-content: space-betwee>\n        <ion-col>\n          <ion-card-header>Bedroom Area: </ion-card-header>\n        </ion-col>\n        <ion-col>\n          <ion-card-header *ngIf="this.bedroom <= 20">\n            <p style="color: #ea3a3a; font-size: large; font-weight: 1000;">Low Battery</p>\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n      <ion-card-content>\n        <progress-bar [progress]="this.bedroom"></progress-bar>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/battery-status/battery-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BatteryStatusPage);
    return BatteryStatusPage;
}());

//# sourceMappingURL=battery-status.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfDesignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SelfDesignPage = /** @class */ (function () {
    function SelfDesignPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /**
         * These variables are for displaying on the pie chart. They are the time gap between two motions of each room.
         * These variables are for recording the last motion time, for calculating the inactive gap time.
         */
        this.last_living = 0;
        this.last_kitchen = 0;
        this.last_dining = 0;
        this.last_toilet = 0;
        this.last_bedroom = 0;
        /**
         * These variables are for displaying on the pie chart. They are the time gap between two motions of each room.
         */
        this.time_living = 5;
        this.time_kitchen = 5;
        this.time_dining = 5;
        this.time_toilet = 5;
        this.time_bedroom = 5;
        /**
         * Label names of each color in the pir chart.
         */
        this.doughnutChartLabels = ['Time between two movements in Living(mins)',
            'Time between two movements in Kichen(mins)',
            'Time between two movements in Dining(mins)',
            'Time between two movements in Toilet(mins)',
            'Time between two movements in Bedroom(mins)'];
        /**
         * ChartType variable, for specifying the type of the chart.
         */
        this.doughnutChartType = 'doughnut';
        this.doughnutChartData = [
            { data: [this.time_living, this.time_kitchen, this.time_dining, this.time_toilet, this.time_bedroom], label: 'hey' }
        ];
        // Referring the collection specified in the firestore.
        this.locations = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("/locations");
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].interval(3000).subscribe(function () {
            _this.updateTime();
        });
    }
    SelfDesignPage.prototype.ionViewWillEnter = function () {
        this.updateTime();
    };
    /**
     * Update method for updating values in the doughnut chart. It calls the getDurarion() method to retrieve data from the firebase.
     */
    SelfDesignPage.prototype.updateTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDuration('living')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getDuration('kitchen')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getDuration('dining')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getDuration('toilet')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getDuration('bedroom')];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The core function method of the class, which retrieves the data from the firebase based on the given location string.
     * Also it compares the current time with the last motion time to get the time gap of inactivity of each room.
     * And it updates the global fields and the chart values.
     * @param location
     */
    SelfDesignPage.prototype.getDuration = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var motion, current, gap, gap, gap, gap, gap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMotion(location)];
                    case 1:
                        motion = _a.sent();
                        return [4 /*yield*/, this.getTimeStamp(location)];
                    case 2:
                        current = _a.sent();
                        if (location == 'living') {
                            if (this.last_living == 0 || motion == 1) {
                                // update value.
                                this.last_living = new Date(current).getTime();
                                if (this.last_living < 1) {
                                    // minimum value.
                                    this.last_living = 1;
                                }
                            }
                            else {
                                gap = new Date(current).getTime() - this.last_living;
                                // round the gap to be nice number
                                gap = gap / 60000;
                                gap = Math.round(gap * 10) / 10;
                                this.time_living = gap;
                            }
                        }
                        else if (location == 'kitchen') {
                            if (this.last_kitchen == 0 || motion == 1) {
                                // update value.
                                this.last_kitchen = new Date(current).getTime();
                                if (this.last_kitchen < 1) {
                                    // minimum value.
                                    this.last_kitchen = 1;
                                }
                            }
                            else {
                                gap = new Date(current).getTime() - this.last_kitchen;
                                // round the gap to be nice number
                                gap = gap / 60000;
                                gap = Math.round(gap * 10) / 10;
                                this.time_kitchen = gap;
                            }
                        }
                        else if (location == 'dining') {
                            if (this.last_dining == 0 || motion == 1) {
                                // update value.
                                this.last_dining = new Date(current).getTime();
                                if (this.last_dining < 1) {
                                    // minimum value.
                                    this.last_dining = 1;
                                }
                            }
                            else {
                                gap = new Date(current).getTime() - this.last_dining;
                                // round the gap to be nice number
                                gap = gap / 60000;
                                gap = Math.round(gap * 10) / 10;
                                this.time_dining = gap;
                            }
                        }
                        else if (location == 'toilet') {
                            if (this.last_toilet == 0 || motion == 1) {
                                // update value.
                                this.last_toilet = new Date(current).getTime();
                                if (this.last_toilet < 1) {
                                    // minimum value.
                                    this.last_toilet = 1;
                                }
                            }
                            else {
                                gap = new Date(current).getTime() - this.last_toilet;
                                // round the gap to be nice number
                                gap = gap / 60000;
                                gap = Math.round(gap * 10) / 10;
                                this.time_toilet = gap;
                            }
                        }
                        else if (location == 'bedroom') {
                            if (this.last_bedroom == 0 || motion == 1) {
                                // update value.
                                this.last_bedroom = new Date(current).getTime();
                                if (this.last_bedroom < 1) {
                                    // minimum value.
                                    this.last_bedroom = 1;
                                }
                            }
                            else {
                                gap = new Date(current).getTime() - this.last_bedroom;
                                // round the gap to be nice number
                                gap = gap / 60000;
                                gap = Math.round(gap * 10) / 10;
                                this.time_bedroom = gap;
                            }
                        }
                        this.doughnutChartData = [
                            { data: [this.time_living, this.time_kitchen, this.time_dining, this.time_toilet, this.time_bedroom], label: 'hey' }
                        ];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch method to fetch timestamp values from firebase.
     * @param location
     */
    SelfDesignPage.prototype.getTimeStamp = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var ref, tim;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.locations.doc(location);
                        return [4 /*yield*/, ref.get().then(function (doc) {
                                if (doc.exists) {
                                    var loc_fields = doc.data();
                                    var time = loc_fields.timestamp;
                                    return time;
                                }
                            })];
                    case 1:
                        tim = _a.sent();
                        return [2 /*return*/, tim];
                }
            });
        });
    };
    /**
     * Fetch method to fetch motion values from firebase.
     * @param location
     */
    SelfDesignPage.prototype.getMotion = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var ref, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.locations.doc(location);
                        return [4 /*yield*/, ref.get().then(function (doc) {
                                if (doc.exists) {
                                    var loc_fields = doc.data();
                                    var num = loc_fields.motion_status;
                                    return num;
                                }
                            })];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, count];
                }
            });
        });
    };
    // Clicking events, do nothing.
    SelfDesignPage.prototype.chartClicked = function (e) { };
    // Hovering events, do nothing. 
    SelfDesignPage.prototype.chartHovered = function (e) { };
    SelfDesignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-self-design',template:/*ion-inline-start:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/self-design/self-design.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="background-color: rgb(79, 200, 248)">\n      <p align="center">AverageMovement</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: lightblue;">\n  <div style="display: block">\n    <canvas \n    baseChart \n    [datasets]="doughnutChartData" \n    [labels]="doughnutChartLabels" \n    [chartType]="doughnutChartType"\n    (chartHover)="chartHovered($event)" \n    (chartClick)="chartClicked($event)"></canvas>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/self-design/self-design.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SelfDesignPage);
    return SelfDesignPage;
}());

//# sourceMappingURL=self-design.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__self_design_self_design__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__battery_status_battery_status__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Assigning 3 pages to correspond variables which will be used 
        // by the bottom navigation tap bar. 
        this.screenOne = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.screenTwo = __WEBPACK_IMPORTED_MODULE_4__battery_status_battery_status__["a" /* BatteryStatusPage */];
        this.screenTri = __WEBPACK_IMPORTED_MODULE_3__self_design_self_design__["a" /* SelfDesignPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/tabs/tabs.html"*/'<!-- This file specifies the design of the bottom navigation bar. -->\n<ion-tabs>\n  <ion-tab [root]="screenOne" tabTitle="SeniorStatus" tabIcon="home">\n  </ion-tab>\n  \n  <ion-tab [root]="screenTwo" tabTitle="BatterStatus" tabIcon="battery-charging">\n  </ion-tab>\n\n  <ion-tab [root]="screenTri" tabTitle="AverageMovement" tabIcon="cube">\n  </ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/battery-status/battery-status.module": [
		423,
		2
	],
	"../pages/self-design/self-design.module": [
		424,
		1
	],
	"../pages/tabs/tabs.module": [
		425,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alert = alert;
        /**
         * Variables that are needed for connecting to MQTT.
         */
        this.topic = 'swen325/a3';
        this.clientId = '4a5814d425744b059bd8bff8f78dda2f';
        this.mqttStatus = 'Disconnected';
        this.mqttClient = null;
        /**
         * Variables that store parsed data from MQTT.
         */
        this.message = '';
        this.timestamp = '';
        this.sensor_location = '';
        this.motion_status = '';
        this.battery_sttaus = '';
        /**
         * lastLocation stands for the last location where the activity of the elderly was detected.
         */
        this.lastLocation = '';
        /**
         * This time since the last motion detected.
         */
        this.duration = '';
        this.alertFirstTime = true;
        /**
         * This method is called when connection is successful. This mqtt client will then subscribe to the mqtt.
         */
        this.onConnect = function () {
            console.log('Connected');
            _this.mqttStatus = 'Connected';
            // subscribe
            _this.mqttClient.subscribe(_this.topic);
        };
        /**
         * This method is called when the connection is failed. It sets the mqttStatus field to be failed.
         */
        this.onFailure = function (responseObject) {
            console.log('Failed to connect');
            _this.mqttStatus = 'Failed to connect';
        };
        /**
         * This method is called to handle the connection lost.
         */
        this.onConnectionLost = function (responseObject) {
            if (responseObject.errorCode !== 0) {
                _this.mqttStatus = 'Disconnected';
            }
        };
        /**
         * This method is called to handle the messages get from the MQTT.
         */
        this.onMessageArrived = function (message) {
            _this.message = message.payloadString;
            _this.parseMessage();
            console.log("message: " + _this.message);
        };
        // Force the application automatically connect to MQTT.
        this.connect();
        // Referring the collection specified in the firestore.
        this.locations = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"]().collection("/locations");
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
        var time = '2019-10-23 16:01:49';
        var bat = '0';
        var motion = '0';
        var count = 0;
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
    HomePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getActivityCount('living')];
                    case 1:
                        _a.living = _f.sent();
                        _b = this;
                        return [4 /*yield*/, this.getActivityCount('kitchen')];
                    case 2:
                        _b.kitchen = _f.sent();
                        _c = this;
                        return [4 /*yield*/, this.getActivityCount('dining')];
                    case 3:
                        _c.dining = _f.sent();
                        _d = this;
                        return [4 /*yield*/, this.getActivityCount('toilet')];
                    case 4:
                        _d.toilet = _f.sent();
                        _e = this;
                        return [4 /*yield*/, this.getActivityCount('bedroom')];
                    case 5:
                        _e.bedroom = _f.sent();
                        this.barChartData = this.barChartData = [
                            { data: [this.living, this.kitchen, this.dining, this.toilet, this.bedroom], label: 'Time between two movements in mins' }
                        ];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This is the method which connects the MQTT client to the specificed MQTT.
     */
    HomePage.prototype.connect = function () {
        this.mqttStatus = 'Connecting...';
        this.mqttClient = new Paho.Client('barretts.ecs.vuw.ac.nz', 8883, '/mqtt', this.clientId);
        // set callback handlers
        this.mqttClient.onConnectionLost = this.onConnectionLost;
        this.mqttClient.onMessageArrived = this.onMessageArrived;
        // connect the client
        console.log('Connecting to mqtt via websocket');
        this.mqttClient.connect({ timeout: 10, useSSL: false, onSuccess: this.onConnect, onFailure: this.onFailure });
    };
    /**
     * This method is for parsing the message that is in CSV format. It splits the message string based
     * on commas and assigns tokens to corresponding variables.
     */
    HomePage.prototype.parseMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tokens, alt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokens = this.message.split(',');
                        this.timestamp = tokens[0];
                        this.sensor_location = tokens[1];
                        this.motion_status = tokens[2];
                        this.battery_sttaus = tokens[3];
                        // Update values in firestore.
                        this.updateValues(this.sensor_location, this.timestamp, this.battery_sttaus, this.motion_status);
                        if (this.motion_status == '1') {
                            // Detecting a motion, record the location as well as reset the timer.
                            this.lastLocation = this.sensor_location;
                            this.timeOfLastMotion = 0;
                            console.log("motion!!!!");
                        }
                        else {
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
                        if (!(this.alertFirstTime && this.duration >= 5.0)) return [3 /*break*/, 3];
                        this.alertFirstTime = false;
                        return [4 /*yield*/, this.alert.create({
                                title: 'Inactive Warning',
                                subTitle: 'No activity detection over 5 minutes!',
                                buttons: [
                                    {
                                        text: 'Acknoledge'
                                    }
                                ]
                            })];
                    case 1:
                        alt = _a.sent();
                        return [4 /*yield*/, alt.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (this.motion_status == '1') {
                            this.alertFirstTime = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Calculate and the inactive time and update it to the duration variable. The method transfers the
     * current time and the last seen motion time to be millionsecond first, then it calculates the minute
     * with ten seconds values and stores the time into the duration variable.
     */
    HomePage.prototype.calculateInactiveTime = function (current) {
        var temp = (current - this.timeOfLastMotion) / 1000 / 60;
        this.duration = temp.toFixed(1);
    };
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
    HomePage.prototype.updateValues = function (location, time, battery, motion) {
        return __awaiter(this, void 0, void 0, function () {
            var count, bat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getActivityCount(location)];
                    case 1:
                        count = _a.sent();
                        if (motion == '1') {
                            count += 1;
                        }
                        bat = parseInt(battery);
                        if (location == 'living') {
                            this.living = count;
                        }
                        else if (location == 'kitchen') {
                            this.kitchen = count;
                        }
                        else if (location == 'dining') {
                            this.dining = count;
                        }
                        else if (location == 'toilet') {
                            this.toilet = count;
                        }
                        else if (location == 'bedroom') {
                            this.bedroom = count;
                        }
                        return [2 /*return*/, this.locations.doc(location).update({
                                timestamp: time,
                                battery_status: bat,
                                motion_status: motion,
                                activity_count: count
                            })];
                }
            });
        });
    };
    /**
     * Get activity count method. It takes the location as parameter and gets the current stored activity count
     * value.
     * @param location
     */
    HomePage.prototype.getActivityCount = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var ref, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.locations.doc(location);
                        return [4 /*yield*/, ref.get().then(function (doc) {
                                if (doc.exists) {
                                    var loc_fields = doc.data();
                                    var num = loc_fields.activity_count;
                                    return num;
                                }
                            })];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, count];
                }
            });
        });
    };
    /**
     * This is the method called when user clicks on the bar chart.
     * @param e
     */
    HomePage.prototype.chartClicked = function (e) {
        // Do nothing. 
    };
    /**
     * This is the method called when user's mouse hovers on the bar chart.
     * @param e
     */
    HomePage.prototype.chartHovered = function (e) {
        // Do nothing. 
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title style="background-color: rgb(79, 200, 248)">\n      <p align="center">Senior Status</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: lightblue">\n  <div style="height: 30%;align-items: center">\n  <ion-card style="background-color: lightblue; align-items: center;" >\n    <ion-card-header>Last Seen Location:</ion-card-header>\n    <ion-card-content *ngIf="this.duration >= 0.1">\n      <p style="font-size: 120%; font-weight: bold; color: black">{{this.lastLocation}}</p>\n    </ion-card-content>\n    <ion-card-content *ngIf="this.duration < 0.1">\n        <p style="font-size: 120%; font-weight: bold; color: orange">{{this.lastLocation}}</p>\n      </ion-card-content>\n  </ion-card>\n</div>\n<div style="height: 30%;align-items: center">\n  <ion-card style="background-color: lightblue;">\n    <ion-card-header>Time Since Last Motion:</ion-card-header>\n    <ion-card-content *ngIf="this.duration >= 0.1">\n      <p style="font-size: 120%; font-weight: bold; color: black">{{this.duration}} minute</p>\n    </ion-card-content>\n    <ion-card-content *ngIf="this.duration < 0.1">\n      <p style="font-size: 120%; font-weight: bold; color: orange">{{this.duration}} minutes</p>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n  <div>\n    <div>\n      <canvas \n        baseChart \n        [datasets]="barChartData"  \n        [options]="barChartOptions"\n        [legend]="barChartLegend" \n        [chartType]="barChartType" \n        [colors]="dark"\n        (chartHover)="chartHovered($event)"\n        (chartClick)="chartClicked($event)"\n        [labels]="barChartLabels"></canvas>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_battery_status_battery_status__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_self_design_self_design__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_x__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_progress_bar_progress_bar__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_battery_status_battery_status__["a" /* BatteryStatusPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_self_design_self_design__["a" /* SelfDesignPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/battery-status/battery-status.module#BatteryStatusPageModule', name: 'BatteryStatusPage', segment: 'battery-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/self-design/self-design.module#SelfDesignPageModule', name: 'SelfDesignPage', segment: 'self-design', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts_x__["a" /* ChartsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_battery_status_battery_status__["a" /* BatteryStatusPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_self_design_self_design__["a" /* SelfDesignPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__credentials__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // Change the root page to be the page that handles the 
        // bottom navigation tab bar.
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_6__credentials__["a" /* firebaseConfig */]);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyC0pRZaFuQRXpY75mM2E04xNDghvcIhtjA",
    authDomain: "iot-project-1ff0b.firebaseapp.com",
    databaseURL: "https://iot-project-1ff0b.firebaseio.com",
    projectId: "iot-project-1ff0b",
    storageBucket: "iot-project-1ff0b.appspot.com",
    messagingSenderId: "286086746070",
    appId: "1:286086746070:web:dfa07013e37bd50f4b5e77",
    measurementId: "G-ZMWWYWH4GL"
};
//# sourceMappingURL=credentials.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 205,
	"./af.js": 205,
	"./ar": 206,
	"./ar-dz": 207,
	"./ar-dz.js": 207,
	"./ar-kw": 208,
	"./ar-kw.js": 208,
	"./ar-ly": 209,
	"./ar-ly.js": 209,
	"./ar-ma": 210,
	"./ar-ma.js": 210,
	"./ar-sa": 211,
	"./ar-sa.js": 211,
	"./ar-tn": 212,
	"./ar-tn.js": 212,
	"./ar.js": 206,
	"./az": 213,
	"./az.js": 213,
	"./be": 214,
	"./be.js": 214,
	"./bg": 215,
	"./bg.js": 215,
	"./bm": 216,
	"./bm.js": 216,
	"./bn": 217,
	"./bn.js": 217,
	"./bo": 218,
	"./bo.js": 218,
	"./br": 219,
	"./br.js": 219,
	"./bs": 220,
	"./bs.js": 220,
	"./ca": 221,
	"./ca.js": 221,
	"./cs": 222,
	"./cs.js": 222,
	"./cv": 223,
	"./cv.js": 223,
	"./cy": 224,
	"./cy.js": 224,
	"./da": 225,
	"./da.js": 225,
	"./de": 226,
	"./de-at": 227,
	"./de-at.js": 227,
	"./de-ch": 228,
	"./de-ch.js": 228,
	"./de.js": 226,
	"./dv": 229,
	"./dv.js": 229,
	"./el": 230,
	"./el.js": 230,
	"./en-SG": 231,
	"./en-SG.js": 231,
	"./en-au": 232,
	"./en-au.js": 232,
	"./en-ca": 233,
	"./en-ca.js": 233,
	"./en-gb": 234,
	"./en-gb.js": 234,
	"./en-ie": 235,
	"./en-ie.js": 235,
	"./en-il": 236,
	"./en-il.js": 236,
	"./en-nz": 237,
	"./en-nz.js": 237,
	"./eo": 238,
	"./eo.js": 238,
	"./es": 239,
	"./es-do": 240,
	"./es-do.js": 240,
	"./es-us": 241,
	"./es-us.js": 241,
	"./es.js": 239,
	"./et": 242,
	"./et.js": 242,
	"./eu": 243,
	"./eu.js": 243,
	"./fa": 244,
	"./fa.js": 244,
	"./fi": 245,
	"./fi.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./ga": 251,
	"./ga.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it-ch": 264,
	"./it-ch.js": 264,
	"./it.js": 263,
	"./ja": 265,
	"./ja.js": 265,
	"./jv": 266,
	"./jv.js": 266,
	"./ka": 267,
	"./ka.js": 267,
	"./kk": 268,
	"./kk.js": 268,
	"./km": 269,
	"./km.js": 269,
	"./kn": 270,
	"./kn.js": 270,
	"./ko": 271,
	"./ko.js": 271,
	"./ku": 272,
	"./ku.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mn": 282,
	"./mn.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./mt": 286,
	"./mt.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./tg": 313,
	"./tg.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./ug-cn": 321,
	"./ug-cn.js": 321,
	"./uk": 322,
	"./uk.js": 322,
	"./ur": 323,
	"./ur.js": 323,
	"./uz": 324,
	"./uz-latn": 325,
	"./uz-latn.js": 325,
	"./uz.js": 324,
	"./vi": 326,
	"./vi.js": 326,
	"./x-pseudo": 327,
	"./x-pseudo.js": 327,
	"./yo": 328,
	"./yo.js": 328,
	"./zh-cn": 329,
	"./zh-cn.js": 329,
	"./zh-hk": 330,
	"./zh-hk.js": 330,
	"./zh-tw": 331,
	"./zh-tw.js": 331
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 421;

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/components/progress-bar/progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'" style="background-color: orange; color:black">\n    {{progress}}%\n  </div>  \n</div>\n'/*ion-inline-end:"/Users/zhanghaokong/Downloads/325-a3/swen325-a3/iot/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ })

},[332]);
//# sourceMappingURL=main.js.map