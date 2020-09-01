'use strict';

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

// Create Random Number
function ranNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(seattle);

// Hours Array
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// Store Array

// Store Constructor
function Stores(name, minCust, maxCust, avgCookieSales, openTime, closeTime) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.hourlyTotal = [];
  this.dailyTotal = 0;
  // this.allStoresArray.push?
}

// Cookies Per Hour Calculator
Stores.prototype.cookiesPerHour = function () {
  for (var i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(
      ranNum(this.minCust, this.maxCust) * this.avgCookieSales
    );
    // console.log(this.hourlyTotal[i]);
  }
};

Stores.prototype.render = function () {
  this.cookiesPerHour();
  var tableEl = document.getElementById('dataTable');

  var trElement = document.createElement('tr');
  tableEl.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (var j = 0; j < this.hourlyTotal.length; j++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyTotal[j];
    trElement.appendChild(tdElement);
    this.dailyTotal += this.hourlyTotal[j];
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
  tableEl.appendChild(trElement);
};

// Store Property Equations (^Inserts for Objects^)
var seattle = new Stores('Seattle', 23, 65, 6.3, 6, 20);
var tokyo = new Stores('Tokyo', 3, 24, 1.2, 6, 20);
var dubai = new Stores('Dubai', 11, 38, 3.7, 6, 20);
var paris = new Stores('Paris', 20, 38, 2.3, 6, 20);
var lima = new Stores('Lima', 2, 16, 4.6, 6, 20);

// Move Store Properties into Array
var city = [seattle, tokyo, dubai, paris, lima];

// Call each city from array and run through cookie calculator
// for (var k = 0; k < city.length; k++) {
//   city[k].cookiesPerHour();
// }

var tableStructure = document.getElementById('dataTable');

function renderheader() {
  var headerrow = document.createElement('tr');
  var headerstore = document.createElement('th');
  headerstore.textContent = 'Location';
  headerrow.appendChild(headerstore);
  tableStructure.appendChild(headerrow);
  for (var i = 0; i < hours.length; i++) {
    var headerhour = document.createElement('th');
    headerhour.textContent = hours[i];
    headerstore.appendChild(headerhour);
    headerrow.appendChild(headerhour);
  }
  var headertotal = document.createElement('th');
  headertotal.textContent = 'Store Totals';
  headerrow.appendChild(headertotal);
}

renderheader();

function renderTable() {
  for (var l = 0; l < city.length; l++) {
    city[l].render();
  }
}

renderTable();
renderFooter();

function renderFooter() {
  var trEl = document.createElement('tr');
  tableStructure.appendChild(trEl);
  var tdElement = document.createElement('td');

  tdElement.textContent = 'Daily Total';
  trEl.appendChild(tdElement);

  var runningTotal = [];
  for (var k = 0; k < city.length; k++) {
    runningTotal[k] = city[k].hourlyTotal;
  }
  // console.log(runningTotal);

  var grandHourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var grandDailyTotal = 0;

  for (var l = 0; l < runningTotal[0].length; l++) {
    for (var m = 0; m < runningTotal.length; m++) {
      grandHourlyTotal[l] += Number(runningTotal[m][l]);
      grandDailyTotal += Number(runningTotal[m][l]);
      // console.log(grandHourlyTotal[l]);
      // console.log(grandDailyTotal);
    }
  }
  for (var n = 0; n < grandHourlyTotal.length; n++) {
    tdElement = document.createElement('td');
    tdElement.textContent = grandHourlyTotal[n];
    trEl.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandDailyTotal;
  trEl.appendChild(tdElement);
}

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookieSales = parseInt(event.target.avgCookieSales.value);

  console.log(name, minCust, maxCust, avgCookieSales);

  city.push(new Stores(name, minCust, maxCust, avgCookieSales));
  console.log(city);
  event.target.name.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookieSales.value = null;
  document.getElementById('dataTable').innerHTML = '';
  renderheader();
  renderTable();
  renderFooter();
  // document.getElementById('inputInfo').reset();
}


var inputInfo = document.getElementById('inputInfo');


inputInfo.addEventListener('submit', handleSubmit);



