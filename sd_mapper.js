"use strict";
// stricco mode
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Christian Gregorio
   Date: 2.12.19

*/

// Set time variables, setting that to the locale string
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

// Change the inner HTML of the time stamp value in conjunction with the timeStr variable
document.getElementById("timeStamp").innerHTML = timeStr;

//Skymap Determiner
// Determine the hour from the time stated earlier
var thisHour = thisTime.getHours();
// Determine the month from the time stated earlier
var thisMonth = thisTime.getMonth();
// Choose a value from 0-23 to choose a picture to display
var mapNum = ((2 * thisMonth + thisHour) % 24);

// Display the sky image in the webpage
// <img src='sd_sky(mapNumber).png' />
var imgStr = "<img src ='sd_sky" + mapNum + ".png'/>";
// Inserts it inside the element tags directly after the beginning tag.
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);