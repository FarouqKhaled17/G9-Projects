function getUserName() {
    const userName = prompt("What is your name?");
    if (userName) {
        alert(`Hello, ${userName}!`);
    } else {
        alert("Hello, Stranger!");
    }
}
