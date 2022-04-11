$(document).ready(function() {
    // save to localstorage
    $(".saveBtn").on("click", function() {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        localStorage.setItem(time, text);
    });

    // track past, present, future
    function schedule() {
        var time = moment().hour();
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            
            if (blockTime === time) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else if (blockTime < time) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        });
    }

    //load from localStorage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // run schedule function
    schedule();
})

//get date
function getDate() {
    var timeEl = document.querySelector("#currentDay");
    var currentTime = moment().format("dddd, MMM Do YYYY - HH:mm:ss");
    timeEl.textContent = currentTime;
}

getDate();