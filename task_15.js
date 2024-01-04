//find the factorial of a number
let number = 5;
let factorial = 1;
if (number > 0) {
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    console.log("this is factorial of given number :-", factorial);
}
else if (number == 0) {
    console.log(`the factorial of ${0} is :- 1`);
}
else {
    console.log("the nagetive numbers are  does not exist");
}