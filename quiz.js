const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris',
    timeLimit: 15 // in seconds
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
    answer: 'Jupiter',
    timeLimit: 10 // in seconds
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Caravaggio'],
    answer: 'Leonardo da Vinci',
    timeLimit: 20 // in seconds
  }
];

let currentQuestionIndex = 0;
let score = 0;
let quizTimeLimit = 60; // in seconds
let quizTimer;
let questionTimer;

function displayQuestion() 
{
  const currentQuestion = quizQuestions[currentQuestionIndex];
  console.log(`\n${currentQuestion.question}`);
  console.log(currentQuestion.options.join('\n'));
  console.log(`You have ${currentQuestion.timeLimit} seconds to answer the question`);

  questionTimer = setInterval(() => 
    {
        currentQuestion.timeLimit--;
        // console.log(`Time remaining: ${currentQuestion.timeLimit} seconds`);
        if (currentQuestion.timeLimit === 0) 
        {
            clearInterval(questionTimer);
            console.log('Time\'s up!');
            displayNextQuestion();
        }
    }, 1000);
}

function displayNextQuestion() 
{
    console.log('----------------------------------------------');
    
    clearInterval(questionTimer);
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) 
    {
        endQuiz();
    } 
    else { displayQuestion(); }
}

function endQuiz() 
{
    clearInterval(quizTimer);
    console.log(`\nQuiz over! Your final score is: ${score}/${quizQuestions.length}`);
    process.exit();
}

function handleUserInput(answer) 
{
  clearInterval(questionTimer);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) 
  {
    score++;
    console.log('Correct!');
  } 
  else { console.log(`Incorrect. The correct answer was ${currentQuestion.answer}.`); }

  displayNextQuestion();
}

function startQuiz() 
{
  quizTimer = setInterval(() => 
    {
        quizTimeLimit--;
        // console.log(`Quiz time remaining: ${quizTimeLimit} seconds`);
        if (quizTimeLimit === 0) 
        {
            clearInterval(quizTimer);
            console.log('Quiz time\'s up!');
            endQuiz();
        }
    }, 1000);

  displayQuestion();

  rl.setPrompt('Enter your answer: ');
  rl.prompt();
  rl.on('line', (answer) => {
    handleUserInput(answer);
    rl.prompt();
  });
}

startQuiz();