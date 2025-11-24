const scheduleList = document.getElementById('schedule-list');
const coffeeAlert = document.getElementById('coffee-alert');
const updateBtn = document.getElementById('update');

// Schedule
const wakeUp = 5;
const commuteStart = 5;
const commuteEnd = 7;
const workStart = 8;
const workEnd = 17;
const break1Start = 11.5; // 11:30 AM
const break1End = 12.5;   // 12:30 PM
const break2Start = 15.5; // 3:30 PM
const break2End = 16.5;   // 4:30 PM
const sleepStart = 22.5;  // 10:30 PM
const sleepEnd = 5;

function updateSchedule() {
    const now = new Date();
    const hour = now.getHours() + now.getMinutes()/60;

    scheduleList.innerHTML = `
        <li>Wake-up: 5:00 AM</li>
        <li>Commute: 5:00 AM - 7:00 AM</li>
        <li>Work: 8:00 AM - 5:00 PM</li>
        <li>Break 1: 11:30 AM - 12:30 PM</li>
        <li>Break 2: 3:30 PM - 4:30 PM</li>
        <li>Lifestyle/Relax: 5:30 PM - 10:30 PM</li>
        <li>Sleep: 10:30 PM - 5:00 AM</li>
    `;

    // Coffee rules: avoid after 11:30 AM
    if(hour >= break1Start){
        coffeeAlert.textContent = "⚠️ Too late for coffee, avoid to sleep well!";
    } else if(hour >= wakeUp && hour < break1Start){
        coffeeAlert.textContent = "☕ You can have coffee now.";
    } else {
        coffeeAlert.textContent = "";
    }
}

updateBtn.addEventListener('click', updateSchedule);
updateSchedule();