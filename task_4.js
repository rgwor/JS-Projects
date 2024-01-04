//area = (base * height) / 2
let base = parseInt(prompt("Enter value of base"))
let height = parseInt(prompt("Enter value of height"))

const area = (base * height) / 2
console.log("this is area of give triangle", area)

/*
we know all side of triangle go with below formula
s = (a+b+c)/2 semi-parameter
area = √(s(s-a)*(s-b)*(s-c))
*/
let side1 = Number(prompt("Enter side1 of triangle"))
let side2 = Number(prompt("Enter side2 of triangle"))
let side3 = Number(prompt("Enter side3 of triangle"))

const s = (side1 + side2 + side3) / 2;
const areaTriangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
console.log("this is area of give triangle", areaTriangle)