let timeLeft = 30;
let timerInterval = null;

function startTimer(onTimeUp) {
    stopTimer();
    timeLeft = 30;
    updateTimerDisplay();
    timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            stopTimer();
            onTimeUp();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    document.getElementById("timer").textContent = `Time: ${timeLeft}s`;
}

function getTimeLeft() {
    return timeLeft;
}