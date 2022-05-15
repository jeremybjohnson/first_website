"use strict";

// array for graduation year
let gradYear = [ 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
// array for volunteer hours
let hours = [6033, 7327, 6719, 6320, 14795, 15444, 11706, 7165, 3029];

// initialize hoursSum
let hoursSum = 0;
//hoursHTML is the variable for the HTML insert
let hoursHTML = "<table class='hours'> <tr> <th>Class Of</th> <th>Total Hours</th> </tr>";

// loop through to create the table
for (let i = 0; i < hours.length; i++) {
  hoursHTML += "<tr> <td>" + gradYear[i] + "</td>";
  hoursHTML += "<td>" + hours[i].toLocaleString() + "</td> </tr>";
  hoursSum += hours[i];
}

hoursHTML += "</table>";

document.getElementById("hoursTable").innerHTML = hoursHTML;
document.getElementById("hoursSum").innerHTML = hoursSum.toLocaleString() + "&nbspTotal Hours";
