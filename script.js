//add dayjs to add current date and time
//have timeblocks with hours, area for text, and button to save to local storage. 
//add diff colors for already happened, upcoming and current. 
//need to be able to retrieve from local storage

//9 of everything- can work with a loop to write code that affects all elements
//hour <p> or <h3>
//use text area for the input field-pref 
//use button for save element 
// querySelectorAll
function getCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
};