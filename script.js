const carbonRates = {
    car: 0.2,
    bus: 0.1,
    bike: 0,
    walk: 0
};

let trips = [];

function updateName() {
    const nameInput = document.getElementById("username").value.trim();
    const greeting = document.getElementById("greeting");

    if (nameInput !== "") {
        greeting.textContent = `🌍 ${nameInput}'s Weekly Impact`;
    } else {
        greeting.textContent = "🌍 Weekly Impact";
    }
}

function addTrip() {
    const distance = parseFloat(document.getElementById("distance").value);
    const mode = document.getElementById("mode").value;

    if (!distance || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    const actualCO2 = distance * carbonRates[mode];
    const carCO2 = distance * carbonRates["car"];
    const savedCO2 = carCO2 - actualCO2;