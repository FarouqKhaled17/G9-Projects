let password = prompt("Enter your password (Hint: It should be strong enough!)");
if (password === "") {
    alert("❌ Oops, you forgot to enter a password! Come on, give it a try!");
} else if (password.length < 6) {
    alert("❌ Uh-oh! Your password is too short. Try at least 6 characters.");
} else {
    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i].toLowerCase() >= 'a' && password[i].toLowerCase() <= 'z') {
            hasLetter = true;
        }
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
        }
    }
    if (!hasLetter || !hasNumber) {
        alert("❌ Whoops! Your password needs both letters and numbers. Don't make it too easy for hackers!");
    } else {
        alert("🎉 Boom! Your password is strong and ready to go. You’re unstoppable!");
    }
}
