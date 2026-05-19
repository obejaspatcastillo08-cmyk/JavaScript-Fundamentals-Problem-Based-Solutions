#  Commute Carbon Tracker

A simple web application that helps users track transportation habits and calculate carbon dioxide (CO₂) savings from eco-friendly commuting choices.

---

# Problem Analysis

Transportation contributes significantly to global carbon emissions. Many people are unaware of how daily commuting choices affect the environment.

This project solves that problem by providing a simple tool where users can:

- Log daily trips
- Select transportation methods
- Calculate estimated CO₂ emissions
- Track environmental impact
- Encourage sustainable transportation habits

The application promotes environmental awareness through real-time carbon savings feedback.

---

# ⚙ Technical Approach

The project was developed using:
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

## System Workflow

1. User enters:
   - Name
   - Distance traveled
   - Transportation mode
2. JavaScript validates the input.
3. The app calculates CO₂ emissions using predefined carbon rates.
4. Trips are stored temporarily in an array.
5. The UI updates dynamically to display:
   - Trip logs
   - Date and time
   - Weekly carbon savings summary

---

# Carbon Calculation Formula

Saved CO₂ is calculated using:
Saved CO₂ = (Distance × Car Emission Rate) − (Distance × Selected Transport Rate)

Example:
- Car = 0.2 kg/km
- Bus = 0.1 kg/km
- Bike = 0 kg/km
- Walk = 0 kg/km

---

# Features

- ✅ Add commute logs
- ✅ Carbon savings calculator
- ✅ Dynamic trip history
- ✅ Weekly environmental impact summary
- ✅ Responsive UI design
- ✅ Personalized greeting
- ✅ Date and time tracking
- ✅ Clear logs functionality

---

# Project Structure

```plaintext
CommuteCarbonTracker/
│
├── index.html
├── style.css
├── script.js
└── README.md