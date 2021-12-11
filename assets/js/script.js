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
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: []
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

$("#task-form-modal").on("show.bs.modal", function() {
    $("#modalTaskDescription").val("");
});

$("#task-form-modal").on("shown.bs.modal", function() {
    $("#modalTaskDescription").trigger("focus");
});

$("#task-form-modal .btn-primary").click(function() {
    var taskText = $("#modalTaskDescription").val();

    if(taskText) {

    }
})