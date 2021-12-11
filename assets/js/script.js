//Current Date
var today = new Date();

var date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear();

var currentDate = "Today's Date is: " + date;

document.getElementById("currentDay").innerHTML = currentDate;

var tasks = {};