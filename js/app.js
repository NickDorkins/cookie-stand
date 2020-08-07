'use strict';

// Create Random Number
function ranNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



var seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (ranNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}




var tokyo = {
  name: 'tokyo'
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (ranNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}








var dubai = {
  name: 'dubai'
  minCust: 11,
  maxCust: 38,
  avgCookieSales: 3.7,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (ranNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}










var paris = {
  name: 'paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSales: 2.3,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (ranNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}










var lima = {
  name: 'lima'
  minCust: 2,
  maxCust: 16,
  avgCookieSales: 4.6,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (ranNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}