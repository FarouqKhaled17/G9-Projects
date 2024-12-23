function startGame() {
  alert("Welcome to the JavaScript Escape Room! Can you solve all the challenges?");

  let answer1 = prompt("🔑 What is the value of the variable `let x = 5`?");
  if (answer1 === "5") {
    alert("🎉 Correct! You've unlocked the first clue.");
  } else {
    alert("❌ Incorrect! Try again.");
    return;
  }

  let answer2 = prompt("🧩 What is the output of this function: `function greet() { return 'Hello, World!'; }`?");
  if (answer2.toLowerCase() === "hello, world!") {
    alert("🎉 Correct! You're getting closer!");
  } else {
    alert("❌ Oops! Try again!");
    return;
  }

  let answer3 = prompt("🔄 What will be printed from this loop: `for (let i = 0; i < 3; i++) { console.log(i); }`?");
  if (answer3 === "0, 1, 2") {
    alert("🎉 Correct! You're halfway through!");
  } else {
    alert("❌ Incorrect! Try again.");
    return;
  }

  let answer4 = prompt("⚡ What will be the result of the following code: `let x = 10; if (x > 5) { console.log('High'); } else { console.log('Low'); }`?");
  if (answer4.toLowerCase() === "high") {
    alert("🎉 Congratulations! You've escaped the room!");
  } else {
    alert("❌ Oh no, try again!");
    return;
  }

  setTimeout(() => {
    document.body.innerHTML = `
      <div class="content">
        <h1>🎉 You Escaped the Room! 🎉</h1>
        <p>Great job! You solved all the JavaScript challenges and escaped the room! 🎉🚀</p>
      </div>`;
  }, 500);
}
