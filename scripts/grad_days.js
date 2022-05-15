"use strict";

countdown();
setInterval(countdown(), (1000*60*60*24))

function countdown() {
  var today = new Date();
  let m25Date = nextMay25(today);

  let days = (m25Date - today)/(1000*60*60*24);
  document.getElementById('gradDay').innerHTML = Math.floor(days) + "&nbsp days until graduation";

}

function nextMay25(currentDate) {
   var cYear = currentDate.getFullYear();
   var mDate = new Date("May 25, 2020");
   mDate.setFullYear(cYear);
   if ((mDate - currentDate) < 0) mDate.setFullYear(cYear + 1);
   return mDate;
}
