// ✅ JavaScript Quiz
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correct: 0
  },
  {
    question: "Which language is used for styling?",
    options: ["HTML", "CSS", "JavaScript"],
    correct: 1
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Object Management"],
    correct: 0
  }
];

let currentIndex = 0;

function loadQuestion() {
  const q = quizData[currentIndex];
  document.getElementById('question').innerText = q.question;
  const answerDiv = document.getElementById('answers');
  answerDiv.innerHTML = '';
  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.style.display = 'block';
    btn.style.margin = '5px 0';
    btn.onclick = () => {
      if (index === q.correct) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
    };
    answerDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % quizData.length;
  loadQuestion();
}

loadQuestion();

// ✅ Joke API Example (Fetch External API)
async function loadJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });
  const data = await response.json();
  document.getElementById('joke').innerText = data.joke;
}