$(document).ready(function(){

    var todaysDate = moment().format('dddd, MMMM Do, YYYY');
        $("#todayIs").text(todaysDate);
});

    var todaysDate = moment().format('h:mm:ss a');
        $("#rightNow").text(todaysDate);

    $("#clear").click(function() {
        localStorage.clear();
        location.reload()
});































    
// })