//Quadratic Equation ax2 + bx + c = 0.
let a = 1;
let b = 6;
let c = 5;
let discriminant = Math.sqrt(b * b - 4 * a * c);
if (discriminant > 0) {
    const root1 = (-b + discriminant) / 2 * a;
    const root2 = (-b - discriminant) / 2 * a;
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if (discriminant == 0) {
    root1 = root2 = -b / 2 * a;
}
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}