'use strict';

// Instructions
// B̶e̶f̶o̶r̶e̶ y̶o̶u̶ b̶e̶g̶i̶n̶,̶ c̶r̶e̶a̶t̶e̶ a̶ n̶e̶w̶ r̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ w̶i̶t̶h̶i̶n̶ G̶i̶t̶H̶u̶b̶ c̶a̶l̶l̶l̶e̶d̶ “̶c̶o̶o̶k̶i̶e̶-̶s̶t̶a̶n̶d̶”̶.̶ M̶a̶k̶e̶ s̶u̶r̶e̶ t̶h̶a̶t̶ t̶h̶i̶s̶ r̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ i̶s̶ p̶r̶o̶p̶e̶r̶t̶l̶y̶ s̶e̶t̶ u̶p̶ w̶i̶t̶h̶ a̶ l̶i̶c̶e̶n̶s̶e̶ a̶n̶d̶ a̶ r̶e̶a̶d̶m̶e̶.̶ C̶l̶o̶n̶e̶ t̶h̶i̶s̶ r̶e̶p̶o̶ d̶o̶w̶n̶ t̶o̶ y̶o̶u̶r̶ l̶o̶c̶a̶l̶ m̶a̶c̶h̶i̶n̶e̶

// C̶r̶e̶a̶t̶e̶ t̶w̶o̶ n̶e̶w̶ p̶a̶g̶e̶s̶ w̶i̶t̶h̶i̶n̶ y̶o̶u̶r̶ p̶r̶o̶j̶e̶c̶t̶.̶ O̶n̶e̶ f̶o̶r̶ S̶a̶l̶e̶s̶ D̶a̶t̶a̶ (̶s̶a̶l̶e̶s̶.̶h̶t̶m̶l̶)̶ a̶n̶d̶ a̶n̶o̶t̶h̶e̶r̶ f̶o̶r̶ t̶h̶e̶ h̶o̶m̶e̶p̶a̶g̶e̶ (̶i̶n̶d̶e̶x̶.̶h̶t̶m̶l̶)̶.̶

// S̶a̶l̶e̶s̶ D̶a̶t̶a̶
// W̶i̶t̶h̶i̶n̶ y̶o̶u̶r̶ j̶a̶v̶a̶s̶c̶r̶i̶p̶t̶ f̶i̶l̶e̶ (̶e̶x̶a̶m̶p̶l̶e̶:̶ a̶p̶p̶.̶j̶s̶)̶,̶ c̶r̶e̶a̶t̶e̶ s̶e̶p̶a̶r̶a̶t̶e̶ J̶S̶ o̶b̶j̶e̶c̶t̶ l̶i̶t̶e̶r̶a̶l̶s̶ f̶o̶r̶ e̶a̶c̶h̶ s̶h̶o̶p̶ l̶o̶c̶a̶t̶i̶o̶n̶ t̶h̶a̶t̶ o̶u̶t̶p̶u̶t̶s̶ t̶h̶e̶ f̶o̶l̶l̶o̶w̶i̶n̶g̶ t̶o̶ t̶h̶e̶ s̶a̶l̶e̶s̶.̶h̶t̶m̶l̶ f̶i̶l̶e̶:̶

// S̶t̶o̶r̶e̶s̶ t̶h̶e̶ m̶i̶n̶/̶m̶a̶x̶ h̶o̶u̶r̶l̶y̶ c̶u̶s̶t̶o̶m̶e̶r̶s̶,̶ a̶n̶d̶ t̶h̶e̶ a̶v̶e̶r̶a̶g̶e̶ c̶o̶o̶k̶i̶e̶s̶ p̶e̶r̶ c̶u̶s̶t̶o̶m̶e̶r̶,̶ i̶n̶ o̶b̶j̶e̶c̶t̶ p̶r̶o̶p̶e̶r̶t̶i̶e̶s̶
// U̶s̶e̶s̶ a̶ m̶e̶t̶h̶o̶d̶ o̶f̶ t̶h̶a̶t̶ o̶b̶j̶e̶c̶t̶ t̶o̶ g̶e̶n̶e̶r̶a̶t̶e̶ a̶ r̶a̶n̶d̶o̶m̶ n̶u̶m̶b̶e̶r̶ o̶f̶ c̶u̶s̶t̶o̶m̶e̶r̶s̶ p̶e̶r̶ h̶o̶u̶r̶.̶ O̶b̶j̶e̶c̶t̶s̶/̶M̶a̶t̶h̶/̶r̶a̶n̶d̶o̶m̶
// C̶a̶l̶c̶u̶l̶a̶t̶e̶ a̶n̶d̶ s̶t̶o̶r̶e̶ t̶h̶e̶ s̶i̶m̶u̶l̶a̶t̶e̶d̶ a̶m̶o̶u̶n̶t̶s̶ o̶f̶ c̶o̶o̶k̶i̶e̶s̶ p̶u̶r̶c̶h̶a̶s̶e̶d̶ f̶o̶r̶ e̶a̶c̶h̶ h̶o̶u̶r̶ a̶t̶ e̶a̶c̶h̶ l̶o̶c̶a̶t̶i̶o̶n̶ u̶s̶i̶n̶g̶ a̶v̶e̶r̶a̶g̶e̶ c̶o̶o̶k̶i̶e̶s̶ p̶u̶r̶c̶h̶a̶s̶e̶d̶ a̶n̶d̶ t̶h̶e̶ r̶a̶n̶d̶o̶m̶ n̶u̶m̶b̶e̶r̶ o̶f̶ c̶u̶s̶t̶o̶m̶e̶r̶s̶ g̶e̶n̶e̶r̶a̶t̶e̶d̶
// S̶t̶o̶r̶e̶ t̶h̶e̶ r̶e̶s̶u̶l̶t̶s̶ f̶o̶r̶ e̶a̶c̶h̶ l̶o̶c̶a̶t̶i̶o̶n̶ i̶n̶ a̶ s̶e̶p̶a̶r̶a̶t̶e̶ a̶r̶r̶a̶y̶…̶ p̶e̶r̶h̶a̶p̶s̶ a̶s̶ a̶ p̶r̶o̶p̶e̶r̶t̶y̶ o̶f̶ t̶h̶e̶ o̶b̶j̶e̶c̶t̶ r̶e̶p̶r̶e̶s̶e̶n̶t̶i̶n̶g̶ t̶h̶a̶t̶ l̶o̶c̶a̶t̶i̶o̶n̶
// D̶i̶s̶p̶l̶a̶y̶ t̶h̶e̶ v̶a̶l̶u̶e̶s̶ o̶f̶ e̶a̶c̶h̶ a̶r̶r̶a̶y̶ a̶s̶ u̶n̶o̶r̶d̶e̶r̶e̶d̶ l̶i̶s̶t̶s̶ i̶n̶ t̶h̶e̶ b̶r̶o̶w̶s̶e̶r̶
// C̶a̶l̶c̶u̶l̶a̶t̶i̶n̶g̶ t̶h̶e̶ s̶u̶m̶ o̶f̶ t̶h̶e̶s̶e̶ h̶o̶u̶r̶l̶y̶ t̶o̶t̶a̶l̶s̶;̶ y̶o̶u̶r̶ o̶u̶t̶p̶u̶t̶ f̶o̶r̶ e̶a̶c̶h̶ l̶o̶c̶a̶t̶i̶o̶n̶ s̶h̶o̶u̶l̶d̶ l̶o̶o̶k̶ l̶i̶k̶e̶ t̶h̶i̶s̶:̶

// S̶e̶a̶t̶t̶l̶e̶

// 6̶a̶m̶:̶ 1̶6̶ c̶o̶o̶k̶i̶e̶s̶
// 7̶a̶m̶:̶ 2̶0̶ c̶o̶o̶k̶i̶e̶s̶
// 8̶a̶m̶:̶ 3̶5̶ c̶o̶o̶k̶i̶e̶s̶
// 9̶a̶m̶:̶ 4̶8̶ c̶o̶o̶k̶i̶e̶s̶
// 1̶0̶a̶m̶:̶ 5̶6̶ c̶o̶o̶k̶i̶e̶s̶
// 1̶1̶a̶m̶:̶ 7̶7̶ c̶o̶o̶k̶i̶e̶s̶
// 1̶2̶p̶m̶:̶ 9̶3̶ c̶o̶o̶k̶i̶e̶s̶
// 1̶p̶m̶:̶ 1̶4̶4̶ c̶o̶o̶k̶i̶e̶s̶
// 2̶p̶m̶:̶ 1̶1̶9̶ c̶o̶o̶k̶i̶e̶s̶
// 3̶p̶m̶:̶ 8̶4̶ c̶o̶o̶k̶i̶e̶s̶
// 4̶p̶m̶:̶ 6̶1̶ c̶o̶o̶k̶i̶e̶s̶
// 5̶p̶m̶:̶ 2̶3̶ c̶o̶o̶k̶i̶e̶s̶
// 6̶p̶m̶:̶ 4̶2̶ c̶o̶o̶k̶i̶e̶s̶
// 7̶p̶m̶:̶ 5̶7̶ c̶o̶o̶k̶i̶e̶s̶
// T̶o̶t̶a̶l̶:̶ 8̶7̶5̶ c̶o̶o̶k̶i̶e̶s̶
// D̶i̶s̶p̶l̶a̶y̶ t̶h̶e̶ l̶i̶s̶t̶s̶ o̶n̶ s̶a̶l̶e̶s̶.̶h̶t̶m̶l̶.̶ W̶e̶ w̶i̶l̶l̶ b̶e̶ a̶d̶d̶i̶n̶g̶ f̶e̶a̶t̶u̶r̶e̶s̶ t̶o̶ t̶h̶i̶s̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ a̶n̶d̶ w̶o̶r̶k̶i̶n̶g̶ w̶i̶t̶h̶ i̶t̶s̶ l̶a̶y̶o̶u̶t̶ i̶n̶ t̶h̶e̶ u̶p̶c̶o̶m̶i̶n̶g̶ l̶a̶b̶s̶.̶

// H̶e̶r̶e̶ a̶r̶e̶ t̶h̶e̶ s̶t̶a̶r̶t̶i̶n̶g̶ n̶u̶m̶b̶e̶r̶s̶ t̶h̶a̶t̶ y̶o̶u̶’̶l̶l̶ n̶e̶e̶d̶ t̶o̶ b̶u̶i̶l̶d̶ t̶h̶e̶s̶e̶ o̶b̶j̶e̶c̶t̶s̶:̶

// L̶o̶c̶a̶t̶i̶o̶n̶	M̶i̶n̶ /̶ C̶u̶s̶t̶	M̶a̶x̶ /̶ C̶u̶s̶t̶	A̶v̶g̶ C̶o̶o̶k̶i̶e̶ /̶ S̶a̶l̶e̶
// S̶e̶a̶t̶t̶l̶e̶	2̶3̶	6̶5̶	6̶.̶3̶
// T̶o̶k̶y̶o̶	3̶	2̶4̶	1̶.̶2̶
// D̶u̶b̶a̶i̶	1̶1̶	3̶8̶	3̶.̶7̶
// P̶a̶r̶i̶s̶	2̶0̶	3̶8̶	2̶.̶3̶
// L̶i̶m̶a̶	2̶	1̶6̶	4̶.̶6̶
// T̶h̶e̶s̶e̶ n̶u̶m̶b̶e̶r̶s̶ a̶r̶e̶ s̶i̶m̶p̶l̶y̶ P̶a̶t̶’̶s̶ e̶s̶t̶i̶m̶a̶t̶e̶s̶ f̶o̶r̶ n̶o̶w̶,̶ b̶u̶t̶ e̶v̶e̶n̶t̶u̶a̶l̶l̶y̶,̶ o̶n̶c̶e̶ t̶h̶e̶r̶e̶ h̶a̶s̶ b̶e̶e̶n̶ s̶o̶m̶e̶ h̶i̶s̶t̶o̶r̶y̶ c̶o̶l̶l̶e̶c̶t̶e̶d̶ t̶h̶a̶t̶ p̶r̶o̶v̶i̶d̶e̶s̶ m̶o̶r̶e̶ a̶c̶c̶u̶r̶a̶t̶e̶ n̶u̶m̶b̶e̶r̶s̶,̶ w̶e̶’̶l̶l̶ w̶a̶n̶t̶ t̶h̶e̶ a̶b̶i̶l̶i̶t̶y̶ t̶o̶ u̶p̶d̶a̶t̶e̶ t̶h̶e̶s̶e̶ n̶u̶m̶b̶e̶r̶s̶ f̶o̶r̶ e̶a̶c̶h̶ l̶o̶c̶a̶t̶i̶o̶n̶,̶ a̶n̶d̶ t̶o̶ a̶d̶d̶/̶r̶e̶m̶o̶v̶e̶ l̶o̶c̶a̶t̶i̶o̶n̶s̶.̶ B̶u̶t̶ w̶e̶’̶l̶l̶ n̶o̶t̶ b̶u̶i̶l̶d̶ a̶l̶l̶ o̶f̶ t̶h̶a̶t̶ t̶o̶d̶a̶y̶.̶ M̶a̶k̶e̶ s̶u̶r̶e̶ t̶o̶ m̶a̶k̶e̶ e̶a̶c̶h̶ l̶o̶c̶a̶t̶i̶o̶n̶ i̶s̶ i̶t̶s̶ o̶w̶n̶ J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶ o̶b̶j̶e̶c̶t̶.̶


// Create Random Number
function ranNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // Example from 8/8/20 Lecture
// // CookiePerHour function() {
// //   for(var i = 0; i < hours.length; i++) {
// //     this.sales.push(Math.ceil(this.ranNum(this.minCust, this.maxCust) * thisavgCookieSales));
// //   }
// // }

// // Hours Variable
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// // 

// // render: function() {
// // call/invoke cookiesPerHourData
// this.cookiesPerHour();
// // render to the DOM sales array property
// // Step 1 find target in HTML
// var seattle = document.getElementById('seattle');

// for (var i = 0; i < cookiesPerHour.length; i++) {
//   // Step 2 create the element
//   // Step 2 (optional) populate the text
//   var liEl = document.createElement('li');
//   liEl.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//   // Step 3 append it to the DOM
//   seattle.append(ilEl);
// };

// seattle.render();

// console.log(seattle);
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Seattle Store
var seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,
  calcCookiesPerHour: function () {
    var perHour = 0;
    for (var i = 0; i < hours.length; i++) {
      perHour = Math.ceil(ranNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHourArray.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();

    var parentEl = document.getElementById('seattle');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `${this.dailyTotal} total cookies`;
    parentEl.appendChild(liEl);
  }
};
seattle.render();
// console.log(seattle);


// Tokyo Store
var tokyo = {
  name: 'tokyo',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,
  calcCookiesPerHour: function () {
    var perHour = 0;
    for (var i = 0; i < hours.length; i++) {
      perHour = Math.ceil(ranNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHourArray.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();

    var parentEl = document.getElementById('tokyo');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `${this.dailyTotal} total cookies`;
    parentEl.appendChild(liEl);
  }
};
tokyo.render();

// Dubai Store
var dubai = {
  name: 'dubai',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,
  calcCookiesPerHour: function () {
    var perHour = 0;
    for (var i = 0; i < hours.length; i++) {
      perHour = Math.ceil(ranNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHourArray.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();

    var parentEl = document.getElementById('dubai');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `${this.dailyTotal} total cookies`;
    parentEl.appendChild(liEl);
  }
};
dubai.render();
console.log(dubai);

// Paris Store
var paris = {
  name: 'paris',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,
  calcCookiesPerHour: function () {
    var perHour = 0;
    for (var i = 0; i < hours.length; i++) {
      perHour = Math.ceil(ranNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHourArray.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();

    var parentEl = document.getElementById('paris');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `${this.dailyTotal} total cookies`;
    parentEl.appendChild(liEl);
  }
};
paris.render();
console.log(paris);

// Lima Store
var lima = {
  name: 'lima',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,
  calcCookiesPerHour: function () {
    var perHour = 0;
    for (var i = 0; i < hours.length; i++) {
      perHour = Math.ceil(ranNum(this.minCust, this.maxCust) * this.avgCookieSales);
      this.cookiesPerHourArray.push(perHour);
      this.dailyTotal += perHour;
    }
  },
  render: function () {
    this.calcCookiesPerHour();

    var parentEl = document.getElementById('lima');
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `${this.dailyTotal} total cookies`;
    parentEl.appendChild(liEl);
  }
};
lima.render();
console.log(lima);
