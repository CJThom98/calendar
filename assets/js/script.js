//Current Date
var today = new Date();

var date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear();

var currentDate = "Today's Date is: " + date;

document.getElementById("currentDay").innerHTML = currentDate;

var newTime = new Date();
var thisHour = newTime.getHours();
console.log(thisHour);

var loadEvents = function () {
    var event9 = (localStorage.getItem("event9"));
    var event10 = (localStorage.getItem("event10"));
}