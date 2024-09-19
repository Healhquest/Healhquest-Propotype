// Handwashing Game Logic
let handWashed = false;
let soapApplied = false;

document.getElementById("soap").addEventListener("click", function() {
    soapApplied = true;
    document.getElementById("game-result").innerText = "Soap applied! Now wash your hands.";
});

document.getElementById("wash").addEventListener("click", function() {
    if (soapApplied) {
        handWashed = true;
        document.getElementById("game-result").innerText = "You washed your hands properly! Well done!";
        resetHandWashGame();
    } else {
        document.getElementById("game-result").innerText = "Apply soap before washing!";
    }
});

function resetHandWashGame() {
    setTimeout(() => {
        handWashed = false;
        soapApplied = false;
        document.getElementById("game-result").innerText = "";
    }, 3000);
}

// Quiz Logic
const correctAnswer = 0; // Correct answer is "2 liters"
let quizCompleted = false;

function checkAnswer(answer) {
    if (!quizCompleted) {
        if (answer === correctAnswer) {
            document.getElementById("quiz-feedback").innerText = "Correct! 2 liters is recommended daily.";
        } else {
            document.getElementById("quiz-feedback").innerText = "Incorrect. Try again!";
        }
        quizCompleted = true;
    }
}
