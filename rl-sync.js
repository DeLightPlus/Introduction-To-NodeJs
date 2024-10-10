const readlineSync = require('readline-sync');

// Define quiz questions and answers
const questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
  },
  // Add more questions here
];

// Set the timer duration in seconds
const timerDuration = 10;

// Function to start the quiz
function startQuiz() {
  let score = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  console.log("Welcome to the Quiz! You have " + timerDuration + " seconds per question.");

  let currentQuestionIndex = 0;

  function askQuestion() {
    if (currentQuestionIndex >= questions.length) {
      endQuiz();
      return;
    }

    const question = questions[currentQuestionIndex].question;
    const answer = questions[currentQuestionIndex].answer;
    let timeRemaining = timerDuration;

    console.log("\nQuestion " + (currentQuestionIndex + 1) + ": " + question);

    const timerId = setInterval(() => {
      timeRemaining--;
      console.log("Time remaining: " + timeRemaining + " seconds");

      if (timeRemaining <= 0) {
        console.log("Time's up! The correct answer was: " + answer);
        incorrectAnswers++;
        clearInterval(timerId);
        currentQuestionIndex++;
        askQuestion(); // Move to the next question
      }
    }, 1000);

    // Wait for user input
    const userAnswer = readlineSync.question("> ");

    clearInterval(timerId); // Stop the timer
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      console.log("Correct!");
      score++;
      correctAnswers++;
    } else {
      console.log("Incorrect. The correct answer is: " + answer);
      incorrectAnswers++;
    }

    currentQuestionIndex++;
    askQuestion(); // Move to the next question
  }

  askQuestion(); // Start the quiz

  function endQuiz() {
    console.log("\nYour score: " + score + "/" + questions.length);
    console.log("Correct answers: " + correctAnswers);
    console.log("Incorrect answers: " + incorrectAnswers);
  }
}

startQuiz();
