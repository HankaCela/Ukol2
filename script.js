function justFood(numPeople) {
    const pricePerPerson = 1000; 
    const totalCost = numPeople * pricePerPerson;
    return `Catering od Just Food pro ${numPeople} lidí za ${totalCost} Kč`;
}

function yourMama(numPeople) {
    const pricePerPerson = 2000;
    const totalCost = numPeople * pricePerPerson;
    return `Catering od Your Mama pro ${numPeople} lidí za ${totalCost} Kč`;
}

function flavourHaven(numPeople) {
    const pricePerPerson = 3000; 
    const totalCost = numPeople * pricePerPerson;
    return `Catering od Flavour Haven pro ${numPeople} lidí za ${totalCost} Kč`;
}


function createEvent(eventName, numPeople, cateringFunction) {
    const cateringMessage = cateringFunction(numPeople); 
    return `Událost ${eventName} s ${cateringMessage}`;
}


console.log(justFood(100));      
console.log(yourMama(100));      
console.log(flavourHaven(100)); 
console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven));
