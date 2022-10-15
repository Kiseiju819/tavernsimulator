import {neutralEvents, negativeEvents, positiveEvents, staffNegativeEvents, staffNeutralEvents, staffPositiveEvents} from "./events.js";
import {Staff, Establishment} from "./constructors.js";


// Variables creation
let allStaff = [];
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
let localPopulation;
let localSecurity;
export const eventElements = [];
// Variables creation end


// Staff creation
const staff1 = new Staff("Guard",23,6,0);
const staff2 = new Staff("Bartender",17,1,0);
const staff3 = new Staff("Server",43,21,0);
const staff4 = new Staff("Cook",23,11,0);
const staff5 = new Staff("Guard",15,9,0);
const staff6 = new Staff("Bartender",17,1,0);
const staff7 = new Staff("Server",6,7,0);
const staff8 = new Staff("Cook",9,3,0);
allStaff.push(staff1,staff2,staff3,staff4,staff5,staff6,staff7,staff8,)
// Staff creation end


// Staff sorting and stat summing 
allStaff.forEach(sort)
function sort(index) {
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
console.log(establishment1)
// Establishment creation end

// Day generator variables creation
let gpd;
let gpdLow = 0;
let gpdHigh = 10;
// Day generator variables creation end


// Day generator function
export function dayGenerator(days){
for(let dayCount = 1; dayCount <= days; dayCount++){
    let eventHasHappened = 0;
    let eventp;
    let negativeEventChance = Math.random();
    let positiveEventChance = Math.random();
    let neutralEventChance = Math.random();

        if (totalSecurity > 0 || totalSecurity < 0) {
            negativeEventChance += totalSecurity/200
            gpdLow += totalSecurity/10
}       if (totalBeauty > 0 || totalBeauty < 0) {
            positiveEventChance += totalSecurity/200
            gpdLow += totalSecurity/10
}       if (neutralEventChance - 0.1 >= 0.50000000000000) {
            neutralEventChance = 1;
}       else {
            neutralEventChance = 0;
}       if (negativeEventChance - 0.1 >= 0.50000000000000) {
            negativeEventChance = 1;
}       else {
            negativeEventChance = 0;
}       if (positiveEventChance - 0.1 >= 0.50000000000000) {
        positiveEventChance = 1;
}       else {
            positiveEventChance = 0;
}       if (eventHasHappened == 0 && neutralEventChance == 1){
            eventp = neutralEvents[getRandomInt(0,neutralEvents.length-1)];
            eventHasHappened = 1;
}       else if (eventHasHappened == 0 && positiveEventChance == 1) {
            eventp = positiveEvents[getRandomInt(0,positiveEvents.length-1)];
            eventHasHappened = 1;
}       else if (eventHasHappened == 0 && negativeEventChance == 1) {
            eventp = negativeEvents[getRandomInt(0,negativeEvents.length-1)];
            eventHasHappened = 1;
}       else {
            eventp = "Nothing of interest happened this day"
}

    gpd = getRandomInt(gpdLow,gpdHigh);
    
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
    let goldD = `Your establishment generated ${gpd} gold`;
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

// Random functions
function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
// Random functions end