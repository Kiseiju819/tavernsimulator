import {neutralEvents, negativeEvents, positiveEvents} from "./events.js";
import {Staff, Establishment} from "./constructors.js";
import {allStaff} from "./main.js";

// Variables creation
let totalBeauty = 0;
let totalEfficiency = 0;
let totalSecurity = 0;
let bartenderBeauty;
let bartenderBeauties = [];
let bartenderEffect;
let bartenderEfficiencies =  [];
let cookEffect;
let cookEfficiencies = [];
let guardEffect;
let guardEfficiencies = [];
let serverBeauty;
let serverBeauties = [];
let serverEffect;
let serverEfficiencies =  [];
export const eventElements = [];
// Variables creation end


// Staff sorting and stat summing 
export function sort(index) {
 if (index.position === "Guard") {
        guardEffect = index.efficiency;
            guardEfficiencies.push(guardEffect);
    }
else if (index.position === "Bartender") {
        bartenderBeauty = index.beauty;
            bartenderBeauties.push(bartenderBeauty)
        bartenderEffect = index.efficiency;
            bartenderEfficiencies.push(bartenderEffect)
    }
else if (index.position === "Server") {
        serverBeauty = index.beauty;
            serverBeauties.push(serverBeauty)
        serverEffect = index.efficiency;
            serverEfficiencies.push(serverEffect)
    }
else if (index.position === "Cook") {
        cookEffect = index.efficiency;
            cookEfficiencies.push(cookEffect);
    }
}
for (let i = 0; i < guardEfficiencies.length; i++) {
    totalSecurity += guardEfficiencies[i]
}
for (let i = 0; i < bartenderEfficiencies.length; i++) {
    totalEfficiency += bartenderEfficiencies[i]
}
for (let i = 0; i < cookEfficiencies.length; i++) {
    totalEfficiency += cookEfficiencies[i]
}
for (let i = 0; i < serverEfficiencies.length; i++) {
    totalEfficiency += serverEfficiencies[i]
}
for (let i = 0; i < bartenderBeauties.length; i++) {
    totalBeauty += bartenderBeauties[i]
}
for (let i = 0; i < serverBeauties.length; i++) {
    totalBeauty += serverBeauties[i]
}

totalEfficiency /= (serverEfficiencies.length + cookEfficiencies.length + bartenderEfficiencies.length)
totalBeauty /= (serverBeauties.length + bartenderBeauties.length)
totalSecurity /= guardEfficiencies.length
// Staff sorting and stat summing end

// Establishment creation
const establishment1 = new Establishment("Tavern",totalSecurity,totalBeauty,0,0);
// Establishment creation end


// Day generator function
export function dayGenerator(days){
for(let dayCount = 1; dayCount <= days; dayCount++){
    let eventHasHappened = 0;
    let eventp;
    let gpd = 0;
    let gpdLow = 0;
    let gpdHigh = 10;
    let negativeEventChance = Math.random();
    let positiveEventChance = Math.random();
    let neutralEventChance = Math.random();

        if (totalSecurity > 0 || totalSecurity < 0) {
            negativeEventChance += (totalSecurity/200 + totalBeauty/200 / 2)
            gpdLow += totalSecurity/10
}       if (totalBeauty > 0 || totalBeauty < 0) {
            positiveEventChance += (totalSecurity/200 + totalBeauty/200 / 2)
            gpdHigh += totalBeauty/10
}       if (neutralEventChance - 0.4 >= 0.5) {
            neutralEventChance = 1;
}       else {
            neutralEventChance = 0;
}       if (negativeEventChance - 0.4 >= 0.5) {
            negativeEventChance = 1;
}       else {
            negativeEventChance = 0;
}       if (positiveEventChance - 0.4 >= 0.5) {
        positiveEventChance = 1;
}       else {
            positiveEventChance = 0;

}       if (eventHasHappened == 0 && neutralEventChance == 1){
            eventp = neutralEvents[getRandomInt(0,neutralEvents.length - 1)];
            eventHasHappened = 1;
}       else if (eventHasHappened == 0 && positiveEventChance == 1) {
            eventp = positiveEvents[getRandomInt(0,positiveEvents.length - 1)];
            eventHasHappened = 1;
}       else if (eventHasHappened == 0 && negativeEventChance == 1) {
            eventp = negativeEvents[getRandomInt(0,negativeEvents.length - 1)];
            eventHasHappened = 1;
}       else {
            eventp = "Nothing of interest happened this day"
}
    console.log(eventp)
    let eventGoldChange = eventChecker(eventp);
    gpd += (getRandomInt(gpdLow,gpdHigh) + eventGoldChange);

    
    let eventBubble = document.createElement("div");
    eventBubble.setAttribute("id", "eventBubbleHTMLid");
    eventBubble.setAttribute("style", "background-color: rgb(40,40,40); color:rgb(210,210,210); border: .25em solid rgb(171,164,153); border-radius: 10px; margin: 1em;");
    
    let dailyEvents = document.createElement("p");
    dailyEvents.setAttribute("id", "dailyEventsHTMLid");
    dailyEvents.setAttribute("style","padding: 0.5em; margin: 0.75em; border: .12em solid rgb(171,164,153); border-radius: 10px; background-color: rgb(60,60,60); color:rgb(210,210,210); font-family: Georgia, serif; font-size: 1.5em; ");
    dailyEvents.innerHTML = eventp;
  
    let dailyGold = document.createElement("p");
    dailyGold.setAttribute("id","dailyGoldHTMLid");
    dailyGold.setAttribute("style", "padding: 0.5em; margin: 0.75em; border: .15em solid rgb(171,164,153); border-radius: 10px; background-color: rgb(60,60,60); color:rgb(180,125,32); font-family: Georgia, serif; font-size: 1.5em; ");
    let goldD = `Your tavern generated ${gpd} gold`;
    dailyGold.innerHTML = goldD;

    document.body.append(eventBubble);
    eventBubble.appendChild(dailyEvents);
    eventBubble.appendChild(dailyGold);

    eventElements.push(eventBubble);
    }
}
// Day generator function end

// Clear Button function
export function clearAllGeneratedElements(index){
    let id = index;
    id.remove();
}
// Clear Button function end

// Utility functions
function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let rInt = Math.floor(Math.random()*(max - min + 1)) + min;
    return rInt;
}
// Utility functions end

// Daily gold modifier function
function eventChecker(eventp) {
    let eventGpd = 0;
    let gpdIndexOne;
    let gpdIndexTwo;
    switch(true){
        case eventp.includes("gain a little"):
            eventGpd += getRandomInt(1,3);
                break;
        case eventp.includes("gain some"):
            eventGpd += getRandomInt(1,5);
                break;
        case eventp.includes("gain a lot"):
            eventGpd += getRandomInt(1,10);
                break;
        case eventp.includes("lose a little"):
            eventGpd -= getRandomInt(1,3);
                break;
        case eventp.includes("lose some"):
            eventGpd -= getRandomInt(1,5);
                break;
        case eventp.includes("lose a lot"):
            eventGpd -= getRandomInt(1,10);
                break;
        case eventp.includes("You lose"):
                gpdIndexOne = eventp[eventp.length - 4];
                    if (eventp.length - 4 != " ") {gpdIndexTwo = eventp[eventp.length - 5]};
                        eventGpd -= parseInt(gpdIndexTwo + gpdIndexOne);
                break;
        case eventp.includes("You gain"):
                gpdIndexOne = eventp[eventp.length - 4];
                    if (eventp.length - 4 != " ") {gpdIndexTwo = eventp[eventp.length - 5]};
                        eventGpd += parseInt(gpdIndexTwo + gpdIndexOne);
                break;
    }
    return eventGpd;
}
// Daily gold modifier end
