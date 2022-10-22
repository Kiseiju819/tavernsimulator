import {dayGenerator, clearAllGeneratedElements, eventElements, sort} from "./functions.js";
import{Establishment, Staff} from "./constructors.js";
export const allStaff = [];



document.querySelector("#staffCreationSubmit").onclick = function createStaff(){
    var selection = document.querySelector("#staffCreationList");
    var staff = new Staff(selection.value, 0, 0, 0);
    allStaff.push(staff);
    console.log(allStaff)
    switch(true){
        case selection.value === "Bartender":
            var bCount = document.querySelector("#countBartender");
            bCount.innerHTML++;
            break;
        case selection.value === "Server":
            var sCount = document.querySelector("#countServer");
            sCount.innerHTML++
            break;
        case selection.value === "Cook":
            var cCount = document.querySelector("#countCook");
            cCount.innerHTML++
            break;
        case selection.value === "Guard":
            var gCount = document.querySelector("#countGuard");
            gCount.innerHTML++
            break;
    }
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


