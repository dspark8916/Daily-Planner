$(document).ready(function(){

    var todaysDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#todayIs").text(todaysDate);
});

$("#clear").click(function() {
    localStorage.clear();
    location.reload()
});































    
// })