const userName = prompt("What is your name?").trim();

const greetingMessage = userName 
  ? `Hello, ${userName}!
It's just the beginning of your journey into the world of JavaScript and Backend development 🚀💪🏻`
  : "Hello, Stranger!";

alert(greetingMessage);
