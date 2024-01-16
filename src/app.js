const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a programming language?",
    options: ["HTML", "CSS", "JavaScript"],
    correctAnswer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: ["Counter Strike: Source", "Corrective Style Sheet", "Cascading Style Sheet"],
    correctAnswer: 2,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'alert' function in JavaScript?",
    options: ["Display a message box", "Create an array", "Define a variable"],
    correctAnswer: 0,
  },
  {
    question: "What is the latest version of ECMAScript?",
    options: ["ES5", "ES6", "ES2021"],
    correctAnswer: 2,
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    options: ["onMouseOver", "onClick", "onSubmit"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the 'localStorage' in web development?",
    options: ["To store session cookies", "To store data persistently on the client-side", "To send data to the server"],
    correctAnswer: 1,
  },
  {
    question: "In CSS, what property is used to change the text color of an element?",
    options: ["color", "text-color", "font-color"],
    correctAnswer: 0,
  },
  {
    question: "What is the result of the expression '2 + 2 + '2' in JavaScript?",
    options: ["6", "22", "42"],
    correctAnswer: 1,
  }
];

let currentQuestion = 0;
let score = 0;
const quizTime = 300; // 300 seconds
let timeRemaining = quizTime;
let timerInterval;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  questionElement.textContent = questions[currentQuestion].question;

  optionsElement.innerHTML = "";
  questions[currentQuestion].options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.onclick = () => checkAnswer(index);
    optionsElement.appendChild(optionButton);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    clearInterval(timerInterval);
    displayScore();
  }
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correctAnswer;

  if (selectedIndex === correctIndex) {
    score++;
  }

  alert(selectedIndex === correctIndex ? "Correct!" : "Incorrect!");

  nextQuestion();
}

function startTimer() {
  timerInterval = setInterval(function () {
    if (timeRemaining > 0) {
      document.getElementById("timer").textContent = `Time Remaining: ${timeRemaining}s`;
      timeRemaining--;
    } else {
      clearInterval(timerInterval);
      displayScore();
    }
  }, 1000);
}

function displayScore() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
}

// Start the quiz
displayQuestion();
startTimer();
