function getUserName() {
    const userName = prompt("What is your name?").trim();
    if (userName) {
        alert(`Hello, ${userName}!
It's just the beginning of your journey into the world of JavaScript and Backend development 🚀💪🏻`);
    } else {
        alert("Hello, Stranger!");
    }
}
