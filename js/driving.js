let drivingQuestions = [];
let currentQuestionIndex = 0, distance = 0, score = 0, totalTime = 0, carPosition = 0;
let answered = false;
let currentPlayerName = "";

function startDrive() {
    drivingQuestions = [...questions];
    drivingQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    distance = 0;
    score = 0;
    totalTime = 0;
    carPosition = 0;
    updateCarPosition();
    displayDriveQuestion();
    return true;
}

function updateCarPosition() {
    const car = document.getElementById("player-car");
    if (car) {
        car.classList.add("accelerating");
        car.style.left = carPosition + "%";
    }
    car.addEventListener("transitionend", function removeAcceleration(event) {
        if (event.propertyName === "transform") {
            car.classList.remove("accelerating");
            car.removeEventListener("transitionend", removeAcceleration);
        }

    });
    const progressBar = document.getElementById("drive-progress");
    const progressText = document.getElementById("progress-text");
    if (progressBar) {
        progressBar.style.width = carPosition + "%";
    }
    if (progressText) {
        progressText.textContent = `Driving Progress: ${carPosition}%`;
    }
}

function displayDriveQuestion() {
    const question = drivingQuestions[currentQuestionIndex];
    answered = false;
    document.getElementById("question-number").textContent = `${currentQuestionIndex + 1} of ${drivingQuestions.length}`;
    document.getElementById("question-text").textContent = question.question;
    const questionImage = document.getElementById("question-image");
    questionImage.src = question.image;
    questionImage.alt = "Image for: " + question.question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("distance").textContent = `: ${distance}`;
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.replaceChildren();
    let shuffledAnswers = question.answers.map((text, originalIndex) => ({ text, originalIndex })).sort(() => Math.random() - 0.5);
    shuffledAnswers.sort(() => Math.random() - 0.5);
    shuffledAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.addEventListener("click", function() {
            checkAnswer(answer.originalIndex);
        });
        answerButtons.appendChild(button);
    });
    startTimer(function() {
        checkAnswer(-1);
    });
}

function checkAnswer(selectedAnswer) {
    if (answered) return;
    answered = true;
    stopTimer();
    const question = drivingQuestions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");
    const secondsRemaining = getTimeLeft();
    totalTime += 20 - secondsRemaining;
    if (selectedAnswer === question.correctAnswer) {
        const pointsEarned = 100 + (secondsRemaining * 10);
        let movement = 0;
        if (secondsRemaining >= 16) {
            movement = 10;
        } else if (secondsRemaining >= 11) {
            movement = 8;
        } else if (secondsRemaining >= 6) {
            movement = 6;
        } else {
            movement = 4;
        }
        score += pointsEarned;
        carPosition = Math.min(100, carPosition + movement);
        distance = carPosition;
        updateCarPosition();
        feedback.textContent = `Correct!+${pointsEarned} points! Car moved ${movement}%!`;
    } else {
        feedback.textContent = selectedAnswer === -1 ? "Time's up!" : "Incorrect! +0 points.";
    }
    document.getElementById("answer-buttons").querySelectorAll("button").forEach(button => {
            button.disabled = true;
    });
    document.getElementById("distance").textContent = `Distance: ${distance}`;
    setTimeout(function() {
        nextQuestion();
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= drivingQuestions.length) {
        endDrive();
        return;
    }
    displayDriveQuestion();
}

function endDrive() {
    stopTimer();
    document.getElementById("results-player-name").textContent = `Player: ${currentPlayerName}`;
    document.getElementById("final-score").textContent = `Final Score: ${score}`;
    document.getElementById("final-time").textContent = `Total Time: ${totalTime} seconds`;
    document.getElementById("final-distance").textContent = `Race Progress: ${carPosition}%`;
    saveScore(currentPlayerName, score, totalTime);
    showScreen("results-screen");
    displayPersonalRecord();
}