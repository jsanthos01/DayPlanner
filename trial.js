
$(document).ready(renderStuff);

function renderStuff() {

    //Gives the current time
    var now = moment().format("dddd MMM Do YYYY");
    const currentDayDisplay = $("#currentDay");  
    currentDayDisplay.text(now);
    
    var reminderItems = [];
    //creating a table using jquery
    for (var i = 1; i <=24; i++){
        $(".container").append(
        `<div class="row">
            <div class="col-1 hour">${i}:00</div>
            <input id="hour${i}"class="col-10" type="text">
            <div class="col-1 saveBtn" >
                <i class="fas fa-lock " onclick='saveButton("${i}")'></i> 
                <i class="fas fa-unlock" onclick='deleteButton("${i}")'></i> 
            </div>
        </div>
        `
        );


    //Conditions to check 
    var hourlyTime = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    const currentHour = moment().hours();
    
    for (var i = 0; i <hourlyTime.length ; i++){
        // passed, present future
        const activeHour = hourlyTime[i];

        if( activeHour < currentHour ){
            $(`#hour${activeHour}`).addClass("past");
        } else if( activeHour == currentHour ){

            $(`#hour${activeHour}`).addClass("present");

        } else {
            $(`#hour${activeHour}`).addClass("future");
        }
        
    }

    
}

// storing the object

function saveButton(id) {
    var storageArray = [];
    var storageObj = {
        userReminder: $(`#hour${id}`).val(),
        storeTime: id
    };
   //Saved in localStorage
    localStorage.setItem("storageObj", JSON.stringify(storageObj));
    var reminderItem = JSON.parse(localStorage.getItem("storageObj"));
    storageArray.push(reminderItem);
    console.log("item saved");

}
 
function deleteButton(id){
    var storageObj = {
        userReminder: $(`#hour${id}`).val(),
        storeTime: id
    };
    console.log("item removed")
    localStorage.remove('storageObj');
}
