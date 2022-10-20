import {dayGenerator, clearAllGeneratedElements, eventElements, sort} from "./functions.js";
import{Establishment, Staff} from "./constructors.js";
export const allStaff = [];



document.querySelector("#staffCreationSubmit").onclick = function createStaff(){
    var selection = document.querySelector("#staffCreationList");
    var staff = new Staff(selection.value, 0, 0, 0);
    allStaff.push(staff);
}





document.querySelector("#daysToGenerateSubmit").onclick = function plusOneDay(){
    var dtg = document.querySelector("#daysToGenerateTextBox").value;
    if (dtg === "69" || dtg === "420" ) {
        alert("Nice.")
    } else if (dtg > 0 && dtg < 26) {
        allStaff.forEach(sort);
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


