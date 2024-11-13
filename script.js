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


const outputDiv = document.getElementById('output');


outputDiv.innerHTML += `<p>${createEvent("Inaugurace prezidenta", 100, flavourHaven)}</p>`;
outputDiv.innerHTML += `<p>${createEvent("Firemní večírek", 50, yourMama)}</p>`;
outputDiv.innerHTML += `<p>${createEvent("Svatební hostina", 150, justFood)}</p>`;