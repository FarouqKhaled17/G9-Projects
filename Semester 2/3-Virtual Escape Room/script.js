let currentQuestion = 1;

document.getElementById("startBtn").addEventListener("click", () => {
  currentQuestion = 1;
  showQuestion();
});

function showQuestion() {
  let question = "";
  let answer = "";

  if (currentQuestion === 1) {
    question = "🔑 What is the value of `let x = 5`?";
    answer = "5";
  } else if (currentQuestion === 2) {
    question = "🧩 What is the output of `function greet() { return 'Hello, World!'; }`?";
    answer = "hello, world!";
  } else if (currentQuestion === 3) {
    question = "🔄 What will be printed from `for (let i = 0; i < 3; i++) { console.log(i); }`?";
    answer = "0, 1, 2";
  } else if (currentQuestion === 4) {
    question = "⚡ What is the result of `if (x = 10) console.log('High')`?";
    answer = "high";
  }

  document.getElementById("question").textContent = question;
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";
  document.getElementById("submitBtn").style.display = "inline-block";
  document.getElementById("submitBtn").onclick = () => checkAnswer(answer);
}

function checkAnswer(correctAnswer) {
  const userAnswer = document.getElementById("answer").value.toLowerCase();

  if (userAnswer === correctAnswer.toLowerCase()) {
    document.getElementById("feedback").textContent = "🎉 Correct!";
    currentQuestion++;
    if (currentQuestion <= 4) {
      setTimeout(showQuestion, 1000);
    } else {
      document.getElementById("feedback").textContent = "🎉 You've completed the game!";
      document.getElementById("submitBtn").style.display = "none";
    }
  } else {
    document.getElementById("feedback").textContent = "❌ Incorrect! Try again.";
  }
}
