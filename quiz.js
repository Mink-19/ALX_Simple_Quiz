// Step 1: Define the function
function checkAnswer() {
    // Step 2: Set the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option was selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
