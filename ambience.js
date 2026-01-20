let modeT = document.getElementById("modeText")
let clockD = document.getElementById("clock")
let connectionM = document.getElementById("message")
let focusB = document.getElementById("focusBtn")
let relaxB = document.getElementById("relaxBtn")
let nightB = document.getElementById("nightBtn")
let resetB = document.getElementById("resetBtn")
let statusD = document.getElementById("status")

function modeSwitch() {
    focusB.addEventListener("click", () => {
        modeT.innerText = "MODE: FOCUS"
        document.body.style.background = "radial-gradient(circle at top, #2563eb, #000)";
    });

    relaxB.addEventListener("click", () => {
        modeT.innerText = "MODE: RELAXED"
        document.body.style.background = "radial-gradient(circle at top, #6b7280, #000)";
    });

    nightB.addEventListener("click", () => {
        modeT.innerText = "MODE: NIGHT"
        document.body.style.background = "radial-gradient(circle at top, #0f172a, #000)";
    });

    resetB.addEventListener("click", () => {
        modeT.innerText = "MODE: IDLE"
        document.body.style.background = "radial-gradient(circle at top, #374151, #000)";
    });
}

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockD.innerText = `${hours}:${minutes}:${seconds}`;
}

connectionM.innerText = navigator.onLine
    ? "System Connection available."
    : "System Connection lost.";

window.addEventListener("online", () => {
    connectionM.innerText = "System Connection available."
});

window.addEventListener("offline", () => {
    connectionM.innerText = "System Connection lost."
});

let wordlist = [
    "Comfort now is pain later. Discipline now is freedom later.",
    "If you avoid the work, you inherit the regret.",
    "Shortcuts feel good until they become dead ends.",
    "The price of growth is effort. The price of comfort is decay.",
    "What you tolerate today becomes what you live with tomorrow.",
    "Excuses make today easier and tomorrow impossible.",
    "Hard choices hurt once. Weak choices hurt forever.",
    "You don’t rise to motivation — you fall to your habits.",
    "Every day you delay is a day your future pays for.",
    "Discipline is choosing the pain you can control."
];

function updateStatus() {
    const randomIndex = Math.floor(Math.random() * wordlist.length);
    statusD.innerText = wordlist[randomIndex];
}

modeSwitch();
updateTime();
setInterval(updateTime, 1000);
updateStatus()
setInterval(updateStatus, 15000)