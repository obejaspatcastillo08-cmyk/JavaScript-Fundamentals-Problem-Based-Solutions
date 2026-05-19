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

    const greeting =
        document.getElementById("greeting");

    if(nameInput !== ""){

        greeting.textContent =
        `🌍 ${nameInput}'s Weekly Impact`;
    }

    else{

        greeting.textContent =
        "🌍 Weekly Impact";
    }
}

function addTrip(){

    const distance =
        parseFloat(document.getElementById("distance").value);

    const mode =
        document.getElementById("mode").value;

    if(!distance || distance <= 0){

        alert("Please enter a valid distance.");
        return;
    }

    const actualCO2 =
        distance * carbonRates[mode];

    const carCO2 =
        distance * carbonRates["car"];

    const savedCO2 =
        carCO2 - actualCO2;

    trips.push({
        distance,
        mode,
        savedCO2
    });

    renderTrips();
    updateSummary();
    updateName();

    document.getElementById("distance").value = "";
    document.getElementById("mode").selectedIndex = 0;

    alert("Trip added successfully 🌱");
}

function renderTrips(){

    const logList =
        document.getElementById("logList");

    logList.innerHTML = "";

    trips.forEach((trip)=>{

        const li =
            document.createElement("li");

        li.className = "list-group-item";

        li.textContent =
        `${emojis[trip.mode]} ${modeNames[trip.mode]} • ${trip.distance} km • Saved ${trip.savedCO2.toFixed(2)} kg CO₂`;

        logList.appendChild(li);
    });

    if(trips.length === 0){

        logList.innerHTML =
        `
        <li class="list-group-item text-center text-muted">
            No trips added yet.
        </li>
        `;
    }
}

function updateSummary(){

    const totalTrips =
        trips.length;

    const totalSaved =
        trips.reduce((sum, t)=>
        sum + t.savedCO2, 0);

    document.getElementById("summary").textContent =
    `You completed ${totalTrips} eco-friendly trips and saved ${totalSaved.toFixed(2)} kg of CO₂ this week 🌱`;
}

function clearTrips(){

    trips = [];

    renderTrips();

    document.getElementById("summary").textContent =
    "No data yet";
}
please add in the daily log comparation for today and yesterday
Update Your index.html

Replace your Daily Logs section with this:

<!-- LOG SECTION -->
<div class="col-lg-6">

    <div class="card custom-card p-4 h-100">

        <h4>
            Daily Logs
        </h4>

        <p id="comparisonText" class="text-muted small mt-2">
            No comparison data yet.
        </p>

        <ul id="logList" class="list-group mt-3">

            <li class="list-group-item text-center text-muted">
                No trips added yet.
            </li>

        </ul>

    </div>

</div>
Update Your script.js

Replace your whole script.js with this updated version:

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

    const greeting =
        document.getElementById("greeting");

    if(nameInput !== ""){

        greeting.textContent =
        `🌍 ${nameInput}'s Weekly Impact`;
    }

    else{

        greeting.textContent =
        "🌍 Weekly Impact";
    }
}

function addTrip(){

    const distance =
        parseFloat(document.getElementById("distance").value);

    const mode =
        document.getElementById("mode").value;

    if(!distance || distance <= 0){

        alert("Please enter a valid distance.");
        return;
    }

    const actualCO2 =
        distance * carbonRates[mode];

    const carCO2 =
        distance * carbonRates["car"];

    const savedCO2 =
        carCO2 - actualCO2;

    const today =
        new Date().toLocaleDateString();

    trips.push({
        distance,
        mode,
        savedCO2,
        date: today
    });

    renderTrips();
    updateSummary();
    updateComparison();
    updateName();

    document.getElementById("distance").value = "";
    document.getElementById("mode").selectedIndex = 0;

    alert("Trip added successfully 🌱");
}

function renderTrips(){

    const logList =
        document.getElementById("logList");

    logList.innerHTML = "";

    trips.forEach((trip)=>{

        const li =
            document.createElement("li");

        li.className = "list-group-item";

        li.textContent =
        `${emojis[trip.mode]} ${modeNames[trip.mode]} • ${trip.distance} km • Saved ${trip.savedCO2.toFixed(2)} kg CO₂ • ${trip.date}`;

        logList.appendChild(li);
    });

    if(trips.length === 0){

        logList.innerHTML =
        `
        <li class="list-group-item text-center text-muted">
            No trips added yet.
        </li>
        `;
    }
}

function updateSummary(){

    const totalTrips =
        trips.length;

    const totalSaved =
        trips.reduce((sum, t)=>
        sum + t.savedCO2, 0);

    document.getElementById("summary").textContent =
    `You completed ${totalTrips} eco-friendly trips and saved ${totalSaved.toFixed(2)} kg of CO₂ this week 🌱`;
}

function updateComparison(){

    const today =
        new Date();

    const yesterday =
        new Date();

    yesterday.setDate(today.getDate() - 1);

    const todayString =
        today.toLocaleDateString();

    const yesterdayString =
        yesterday.toLocaleDateString();

    const todayTrips =
        trips.filter(t => t.date === todayString).length;

    const yesterdayTrips =
        trips.filter(t => t.date === yesterdayString).length;

    const comparison =
        document.getElementById("comparisonText");

    if(todayTrips > yesterdayTrips){

        comparison.textContent =
        `📈 Great job! You made ${todayTrips - yesterdayTrips} more eco trips today compared to yesterday.`;
    }

    else if(todayTrips < yesterdayTrips){

        comparison.textContent =
        `📉 You made ${yesterdayTrips - todayTrips} fewer eco trips today compared to yesterday.`;
    }

    else{

        comparison.textContent =
        `⚖️ Your eco trips today are the same as yesterday.`;
    }
}

function clearTrips(){

    trips = [];

    renderTrips();

    document.getElementById("summary").textContent =
    "No data yet";

    document.getElementById("comparisonText").textContent =
    "No comparison data yet.";
}