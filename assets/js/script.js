//Current Date
var today = new Date();

var date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear();

var currentDate = "Today's Date is: " + date;

document.getElementById("currentDay").innerHTML = currentDate;

var tasks = {};

var createTask = function(taskText, taskTime, taskList) {

    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>").addClass("badge badge-primary badge-pill").text(taskTime);
    var taskP = $("<p>").addClass("m-1").text(taskText);

    taskLi.append(taskSpan, taskP);

    auditTask(taskLi);

    $("#list-" + taskList).append(taskLi);
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            900: [],
            1000: [],
            1100: [],
            1200: [],
            1300: [],
            1400: [],
            1500: [],
            1600: [],
            1700: []
        };
    }

    $.each(tasks, function(list, arr) {
        arr.forEach(function(task) {
            createTask(task.text, task.date, list);
        });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};