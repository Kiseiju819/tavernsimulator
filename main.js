import {dayGenerator, clearAllGeneratedElements, eventElements} from "./functions.js";

document.querySelector("#daysToGenerateSubmit").onclick = function plusOneDay(){
    var dtg = document.querySelector("#daysToGenerateTextBox").value;
    if (dtg === "69" || dtg === "420" ) {
        alert("Nice.")
    } else if (dtg > 0 && dtg < 26) {
        dayGenerator(dtg);
    } else {
        alert("Something went wrong, try a number from 1 to 25.");
    }
}

document.querySelector("#daysToGenerateClear").onclick = function elementClear(){
    if (eventElements.length > 0){
    eventElements.forEach(clearAllGeneratedElements);
    } else {
        alert("Something went wrong, there appears to be no days.");
    }
}


