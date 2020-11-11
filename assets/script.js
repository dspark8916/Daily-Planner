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

function timeSlot() {
    var taskTime = moment().hour();
    var presentTime = $('.row');

    presentTime.each(function() {
        var confirm = parseInt($(this).attr('id'))
        if (confirm < 9) {
            confirm += 12;
        }
        let time = $(this)[0];
        if (taskTime === confirm) {
            $(time).addClass('prsent')
        } else if (taskTime > confirm) {
            $(time).addClass('past')
        } else if (taskTime < confirm) {
            $(time).addClass('future')
        }
    })
}

timeSlot();

Storage = window.localStorage;
function saveToStorage(key, value) {
    localStorage.setItem(key, value);
}

function getStorage(key) {
    let item = localStorage.getItem(key);
    if (item == null) return "";
    return item;
}































    
// })