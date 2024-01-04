let number = parseInt(prompt("Enter the Number"));

if (number == 0) {
    console.log("The given number is Zero");
}
else if (number % 2 == 0) {
    console.log(`the given number is Even`);
}
else {
    console.log(`the given number is Odd`);
}

number % 2 == 0 ? console.log("the given number is Even") : console.log("the given number is Odd");