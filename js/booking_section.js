// GUEST


function increaseGuest() {
  numberGuest = document.getElementById('number_guests').innerHTML;
  new_numberGuest = parseInt(numberGuest) + 1;
  document.getElementById('number_guests').innerHTML = new_numberGuest;
}

function decreaseGuest() {
  numberGuest = document.getElementById('number_guests').innerHTML;
  new_numberGuest = parseInt(numberGuest) - 1;
  if(new_numberGuest < 1) {
    new_numberGuest = 1;
    alert('A number of guests are not under 1')
  }
  document.getElementById('number_guests').innerHTML = new_numberGuest;
}


// ---------------------------------------------------------------------------------------------
// CHECK DATE AND MONTH

var full_month = ['Jan','Mar','May','Jul','Aug','Oct','Dec'];
var monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// there are months that are after lack months, except: 2
var after_lack_months = ['May', 'Jul', 'Oct', 'Dec'];

function getDate(dateID) {
  return parseInt(document.getElementById(dateID).innerHTML);
}

function getMonth(monthID) {
  return document.getElementById(monthID).innerHTML;
}



function maxDateInMonth(month) {
  var maxDate;
  if(month === 'Feb') {
    maxDate = 29;
  } else {
    if(full_month.indexOf(month) > -1) {
      maxDate = 31;
    } else {
      maxDate = 30;
    }
  }
  return maxDate;
}



function increaseMonth(dateID, monthID){
  var date = getDate(dateID);
  var month = getMonth(monthID);

  var monthIndex = monthList.indexOf(month);
  var new_monthIndex = monthIndex + 1;

  if(new_monthIndex === 12) {
    new_monthIndex = 0;
  }

  var newMonth = monthList[new_monthIndex];
  document.getElementById(monthID).innerHTML = newMonth;

  var maxDate = maxDateInMonth(newMonth);
  if(date > maxDate) {
    document.getElementById(dateID).innerHTML = maxDate; 
  }
}

function decreaseMonth(monthID) {
  var month = getMonth(monthID);

  var monthIndex = monthList.indexOf(month);
  var new_monthIndex = monthIndex - 1;

  if(new_monthIndex === -1) {
    new_monthIndex = 12;
  }

  var newMonth = monthList[new_monthIndex];
  document.getElementById(monthID).innerHTML = newMonth;
}

function increaseDate(dateID, monthID) {
  var new_date = getDate(dateID) + 1;
  var month = getMonth(monthID);

  var maxDate = maxDateInMonth(month);
  if(new_date > maxDate) {
    increaseMonth(dateID,monthID);
    new_date = 1;
  }

  if(new_date < 10) {
    new_date = '0' + JSON.stringify(new_date);
  }

  document.getElementById(dateID).innerHTML = new_date;
}


function decreaseDate(dateID, monthID){
  var new_date = getDate(dateID) - 1;

  if(new_date < 1) {
    decreaseMonth(monthID);
    var month = getMonth(monthID);
    new_date = maxDateInMonth(month);
  }

  if(new_date < 10) {
    new_date = '0' + JSON.stringify(new_date);
  }

   document.getElementById(dateID).innerHTML = new_date;
}


function checkAvai() {
  var dateCheckIn = document.getElementById('check-in-date').innerHTML;
  var dateCheckOut = document.getElementById('check-out-date').innerHTML;

  var monthCheckIn = document.getElementById('check-in-month').innerHTML;
  var monthCheckOut = document.getElementById('check-out-month').innerHTML;

  var monthCheckInIndex = monthList.indexOf(monthCheckIn);
  var monthCheckOutIndex = monthList.indexOf(monthCheckOut);

  var timeCheckIn = new Date(2020,monthCheckInIndex,dateCheckIn);
  var timeCheckOut = new Date(2020,monthCheckOutIndex,dateCheckOut);

  if((timeCheckOut - timeCheckIn) < 0) {
    alert('Check-out date have to be later check-in date')
  }
}











