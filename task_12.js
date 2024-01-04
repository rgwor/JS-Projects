let a = 20;
let b = 30;
let c = 5;
let maxValue;

//find the maxValue

if (a > b && a > c) {
    maxValue = a;
}
else if (b > a && b > c) {
    maxValue = b;
}
else {
    maxValue = c;
}

function largestNumber(maxValue) {
    if (a == maxValue) {
        return console.log(`the largest number is  ${maxValue}`);;
    }
    else if (b == maxValue) {
        return b
    } else {
        return c;
    }

}
console.log();
//find the minValue
var minValue;
if (a < b && a < c) {
    minValue = a
}
else if (b < a && b < c) {
    minValue = b
} else {
    minValue = c
}
console.log(minValue);

