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
    var event11 = (localStorage.getItem("event11"));
    var event12 = (localStorage.getItem("event12"));
    var event13 = (localStorage.getItem("event13"));
    var event14 = (localStorage.getItem("event14"));
    var event15 = (localStorage.getItem("event15"));
    var event16 = (localStorage.getItem("event16"));
    var event17 = (localStorage.getItem("event17"));

    $("#9").val(event9)
    $("#10").val(event10)
    $("#11").val(event11)
    $("#12").val(event12)
    $("#13").val(event13)
    $("#14").val(event14)
    $("#15").val(event15)
    $("#16").val(event16)
    $("#17").val(event17)

    colorEffects();
};