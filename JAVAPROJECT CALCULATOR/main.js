"use strict";

function addMonths(elem) {
var annualUseKw=0, dailyUseKw=0, i=0, x=0;
var months=document.getElementById(elem).getElementsByTagName('input');

    for(i=0; i<months.length; i++) {
        x = Number(months[i].value);
        annualUseKw += x;
    } // end loop
    dailyUseKw = annualUseKw/365;
     return dailyUseKw;

    } // end the function



function sunHours(){
var hrs;
var theZone = document.forms.solarForm.zone.selectedIndex;
theZone +=1
switch(theZone) {
        case 1:
            hrs=6;
            break;
        case 2:
            hrs=5.5;
            break;
        case 3:
            hrs=5;
            break;
        case 4:
            hrs=4.5;
            break;
        case 5:
            hrs=4.2;
            break;
        case 6:
            hrs=3.5;
            break;
        default:
            hrs=0;
    } // end of swich 
return hrs;
} // end function


function calculatePannel() {
    var userChoice = document.forms.solarForm.panel.selectedIndex;
    var panelOptions = document.forms.solarForm.panel.options;
    var power = panelOptions[userChoice].value;
    var name = panelOptions[userChoice].text;
    var x = [power, name];
    return x

} // end functions




function calculateSolar() {
    var dailyUseKw = addMonths('mpc');
    //console.log(dailyUseKw);

    var sunHoursPerDay = sunHours();
    //console.log(sunHoursPerDay);

    var minkwNeeds = dailyUseKw/sunHoursPerDay;
    //console.log(minkwNeeds);

    var realKWNeeds = minkwNeeds * 1.25;
    //console.log(realKWNeeds);

    var realWattNeeds = realKWNeeds * 1000;
    //console.log(realWattNeeds);

    var pannelInfo = calculatePannel();
    var panelOutput = pannelInfo[0];
    var panelName = pannelInfo[1];
    //console.log(panelOutput);
    //console.log(panelName);

    var panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
    //console.log(panelsNeeded);


var feedback ="";
    feedback +="<p>Based on your average daily use of "+Math.round(dailyUseKw)+" kWh, you need to purchase "+ panelsNeeded  +" "+ panelName+" solar panels to offset 100% of your electricity bill.</p>";
    feedback +="<h2>Additional Details</h2>";
    feedback +="<p>Your average daily electricity consumption: "+Math.round(dailyUseKw) +" kmh per day.</p>";
    feedback +="<p>Average sunshine hours per day: "+sunHoursPerDay +" hours</p>";
    feedback +="<p>Realistic watts needed per hour: "+Math.round(realWattNeeds)+" watts/hours.</p>";
    feedback +="<p>The "+panelName+" pannel you selected generates about "+panelOutput+" watts per hour.</p>";

    document.getElementById('feedback').innerHTML=feedback;

} 