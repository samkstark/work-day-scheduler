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
function timeblockColor() {
    var hour = moment().hours();

$(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));
    if (currentHour < hour) {
        $(this).addClass("past");
    } else if (currentHour === hour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
})

};
timeblockColor();

var saveBtn = $(".saveBtn");