
$(document).ready(function() {
    var storageArray;
 
    ///local storage =====> when page refrehsed, it works
    if(localStorage.storageArray){

        // took it out of localstorage
        var thisArray = JSON.parse(localStorage.storageArray);
        generate();
        for (var i = 0 ; i < thisArray.length; i++){
            // console.log(`current store time# ${thisArray[i].storeTime}`);
            for(var j = 0; j < 25; j++){
                // console.log(`checking hour ${j}`);
                if(thisArray[i].storeTime == `hour${j}`)
                {  
                    $(`#hour${j}`).val(thisArray[i].userReminder); 
                }
            }   
        }
        

    }else {
        generate();
    }
    //Gives the current time
    var now = moment().format("dddd MMM Do YYYY");
    const currentDayDisplay = $("#currentDay");  
    currentDayDisplay.text(now);
    
    
    //creating a table using jquery
    function generate(){
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
        }
    }

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

});

////local storage ======> storing it  and putting it in an array
storageArray = localStorage.storageArray ? JSON.parse(localStorage.storageArray) : [];
function saveButton(i){
    var storageObj = {
        userReminder: $(`#hour${i}`).val(),
        storeTime: `hour${i}`
    };

    
    storageArray.push(storageObj);
    localStorage.setItem("storageArray", JSON.stringify(storageArray));

}

// function deleteButton(i){
//     var i = 0
//     for (i =  0 ; i < storageArray.length; i++){
//         if (storageArray[i] == $(`#hour${i}`).val()){
//             break;
//         }
//     }



if(localStorage.storageArray){

    // took it out of localstorage
    var thisArray = JSON.parse(localStorage.storageArray);
    generate();
    for (var i = 0 ; i < thisArray.length; i++){
        // console.log(`current store time# ${thisArray[i].storeTime}`);
        for(var j = 0; j < 25; j++){
            // console.log(`checking hour ${j}`);
            if(thisArray[i].storeTime == `hour${j}`)
            {  
                $(`#hour${j}`).val(thisArray[i].userReminder); 
            }
        }   
    }
    
//    storageArray.splice(i,0);
//    console.log(storageArray[i]);
// }

