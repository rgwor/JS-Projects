let number = parseInt(prompt("Enter the Number"));

if (number == 0) {
    console.log("The given number is Neutral");
}
else if (number > 0) {
    console.log(`the given number is Positive`);

}
else {
    console.log(`the given number is Negative`);
}

number > 0 ? console.log("the given number is Positive") : console.log("the given number is Negative");