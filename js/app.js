const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

document.getElementById("start-button").addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value.trim();
    if (playerName === "") {
        alert("Please enter your name first!");
        return;
    }
    currentPlayerName = playerName;
    if (startDrive()) {
        showScreen("drive-screen");
    }
});

document.getElementById("personal_record-button").addEventListener("click", () => {
    showScreen("personal_record-screen");
});

document.querySelectorAll(".back-button").forEach(button => {
    button.addEventListener("click", () => {
        showScreen("home-screen");
    });
});

document.getElementById("play-again-button").addEventListener("click", () => {
    if (startDrive()) {
        showScreen("drive-screen");
    }
});

document.getElementById("results-personal_records-button").addEventListener("click", () => {
    showScreen("personal_record-screen");
});