$(document).ready(function(){

    var todaysDate = moment().format('dddd, MMMM Do, YYYY');
        $("#todayIs").text(todaysDate);
        refreshPlans();
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

let plans = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

function refreshPlans() {
    for (text of plans) {
        let item = getStorage(text);
        if (item != null) {
            let inputArea = text + "text";
            document.getElementById(inputArea).value = item;
        }
    }
}































    
// })