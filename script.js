const carbonRates = {
    car: 0.2,
    bus: 0.1,
    bike: 0,
    walk: 0
};

const emojis = {
    car: "🚗",
    bus: "🚌",
    bike: "🚴",
    walk: "🚶"
};

const modeNames = {
    car: "Car",
    bus: "Bus",
    bike: "Bike",
    walk: "Walk"
};

let trips = [];

function updateName(){

    const nameInput =
        document.getElementById("username").value.trim();

    document.getElementById("greeting").textContent =
        nameInput
        ? `🌍 ${nameInput}'s Weekly Impact`
        : "🌍 Weekly Impact";
}

function addTrip(){

    const distance =
        parseFloat(document.getElementById("distance").value);

    const mode =
        document.getElementById("mode").value;

    if(isNaN(distance) || distance <= 0){
        alert("Please enter a valid distance.");
        return;
    }

    const actualCO2 =
        distance * carbonRates[mode];

    const savedCO2 =
        (distance * carbonRates.car) - actualCO2;

    const now = new Date();

    // ⏰ TIME (03:46 AM)
    const timeOnly = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    // 📅 DATE (Tue, May 19, 2026)
    const dateOnly = now.toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    trips.push({
        distance,
        mode,
        savedCO2,
        time: timeOnly,
        date: dateOnly
    });

    renderTrips();
    updateSummary();

    document.getElementById("distance").value = "";
    document.getElementById("mode").selectedIndex = 0;
}

function renderTrips(){

    const logList =
        document.getElementById("logList");

    logList.innerHTML = "";

    if(trips.length === 0){

        logList.innerHTML = `
            <li class="list-group-item text-center text-muted">
                No trips added yet.
            </li>
        `;
        return;
    }

    trips.forEach((trip)=>{

        const li = document.createElement("li");
        li.className = "list-group-item";

        // ✅ FINAL 2-LINE FORMAT
        li.innerHTML = `
            <div style="font-weight:600; margin-bottom:4px;">
                ${trip.date}
            </div>
            <div>
                ${trip.time} → ${emojis[trip.mode]} ${modeNames[trip.mode]} ${trip.distance} km → Saved ${trip.savedCO2.toFixed(2)} kg CO₂
            </div>
        `;

        logList.appendChild(li);
    });
}

function updateSummary(){

    const totalTrips = trips.length;

    const totalSaved = trips.reduce((sum, t)=>
        sum + t.savedCO2, 0);

    document.getElementById("summary").textContent =
        `You completed ${totalTrips} eco-friendly trips and saved ${totalSaved.toFixed(2)} kg of CO₂ this week 🌱`;
}

function clearTrips(){

    if(!confirm("Are you sure you want to clear all trips?")) return;

    trips = [];
    renderTrips();
    updateSummary();
}