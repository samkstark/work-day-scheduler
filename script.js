//add dayjs to add current date and time
//have timeblocks with hours, area for text, and button to save to local storage. 
//add diff colors for already happened, upcoming and current. 
//need to be able to retrieve from local storage

//9 of everything- can work with a loop to write code that affects all elements
//hour <p> or <h3>
//use text area for the input field-pref 
//use button for save element 
// querySelectorAll

//current day displayed in top field
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//time block color coding to indicate whether task is in the past, present, or future

$(document).ready(function() {
    timeblockColor ();
});

function timeblockColor() {
    var currentTime = moment().hours();
   

$(".time-block").each(function () {
    var scheduledTime = parseInt($(this).attr("id").split("-")[1]);
   console.log(scheduledTime);

   if (currentTime > scheduledTime) {
    $(this).addClass("past");
   } else if (currentTime < scheduledTime) {
    $(this).addClass("future");
   } else {
    $(this).addClass("present");
   }
});
} 
var saveBtn = $(".saveBtn");
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var planner = $(this).siblings(".planner").val();

    localStorage.setItem(time, planner);
});

function scheduler() {

    $(".hour").each(function(){
        var currentTime = $(this).text();
        var currentSchedule = localStorage.getItem(currentTime);

    if (currentSchedule !== null) {
        $(this).siblings(".planner").val(currentSchedule);
    }
});
}

timeblockColor();
scheduler();
