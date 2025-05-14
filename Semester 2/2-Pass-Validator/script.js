let password = prompt("Enter your password:");

if (!password) {
    alert("Please enter a password.");
} else if (password.length < 6) {
    alert("Too short! Try at least 6 characters.");
} else if (password === "123456" || password === "abcdef") {
    alert("Too common! Pick something more unique.");
} else if (password === password.toLowerCase() || password === password.toUpperCase()) {
    alert("Use a mix of uppercase and lowercase letters.");
} else {
    alert("Nice! That’s a strong password.");
}
