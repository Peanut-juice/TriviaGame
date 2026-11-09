const PERSONAL_RECORD_KEY = "triviaGamePersonalRecord";

function loadPersonalRecord() {
    const savedScores = localStorage.getItem(PERSONAL_RECORD_KEY);
    if (savedScores === null) {
        return [];
    }
    try {
        const parsedScores = JSON.parse(savedScores);
        return Array.isArray(parsedScores)
            ? parsedScores
            : [];
    } catch (error) {
        console.error("Could not load personal record:", error);
        return [];
    }
}

function saveScore(name, score, time) {
    const personal_record = loadPersonalRecord();
    personal_record.push({
        name: name,
        score: score,
        time: time
    });
    personal_record.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.time - b.time;
    });
    const topTen = personal_record.slice(0, 10);
    localStorage.setItem(PERSONAL_RECORD_KEY, JSON.stringify(topTen));
}

function displayPersonalRecord() {
    const personalRecordList = document.getElementById("personal_record-list");
    const personalRecord = loadPersonalRecord();
    personalRecordList.replaceChildren();
    if (personalRecord.length === 0) {
        personalRecordList.textContent =
            "No scores yet. Complete a race to appear here!";
        return;
    }
    personalRecord.forEach((player, index) => {
        const card = document.createElement("div");
        card.className = "question-card";
        const heading = document.createElement("h4");
        heading.textContent = `#${index + 1} - ${player.name}`;
        const details = document.createElement("p");
        details.textContent = `Score: ${player.score} | Time: ${player.time}s`;
        card.appendChild(heading);
        card.appendChild(details);
        personalRecordList.appendChild(card);
    });
}
