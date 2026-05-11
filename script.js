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