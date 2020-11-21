$(document).ready(function(){

    var todaysDate = moment().format('dddd, MMMM Do, YYYY');
        $("#todayIs").text(todaysDate);
});

    var todaysDate = moment().format('h:mm:ss a');
        $("#rightNow").text(todaysDate);
        
    $("#clear").click(function() {
});

var workDayHrs = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];

var presentTime = moment().format("HH");

$("#textInput").each(function() {
    var timeSlot = parseInt($(this).prev().attr("data-hour"));
    if (timeSlot == presentTime) {
        $(this).addClass("present");
    }
    else if (timeSlot < presentTime) {
        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }
});



































    
// })