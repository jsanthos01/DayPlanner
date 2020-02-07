
$(document).ready(function() {

    //Gives the current time
    var now = moment().format("dddd MMM Do YYYY");
    const currentDayDisplay = $("#currentDay");  
    currentDayDisplay.text(now);
    
    //creating a table using jquery
    for (var i = 1; i <=24; i++){
        $(".container").append(
        `<div class="row">
            <div class="col-1 hour">${i}:00</div>
            <input id="hour${i}"class="col-10" type="text">
            <div class="col-1 saveBtn" onclick='saveButton("${i}")'><i class="fas fa-lock"></i></div>
        </div>`
        
        );
    }
        //try forEach
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
// event.preventDefault();
//     scoreContainer.classList.add('hide');
//     finalScoreBoard.classList.remove('hide');

//     var playerInfo = {
//         playerName: playerInitials.value, //J.S
//         playerScore: score

//     };

//     if(playerInfo.playerName == ""){
//         errorMsgDisplay();
//     } else {
//         localStorage.setItem("playerInfo",JSON.stringify(playerInfo));
//         var player = localStorage.getItem("playerInfo");
        
//         player = JSON.parse(player);
//         console.log(player.playerScore.toString());
//         var stringScore = player.playerScore.toString();
//         storeUserInitials.innerHTML = player.playerName;
//         storeUserScore.innerHTML = stringScore;
        
//     }

function saveButton(id){

    var storageObj = {
        userInput: $(`#hour${id}`).val(),
        storeTime: id
    };

    localStorage.setItem("storageObj", JSON.stringify(storageObj));
    var itemList = localStorage.getItem("storageObj");
    itemList = JSON.parse(itemList);
    console.log(itemList.userInput.toString());
    $(`#hour${id}`).html()=userInput;

}
        
// localStorage.user = userInput.value;
// localStorage.
