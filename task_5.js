//swap two Numbers
let a = 10;
let b = 20;
//type1
[a, b] = [b, a]
console.log(a, "and", b);
let p = 5;
let q = 9;
let temp;
//type-2
temp = p;
p = q;
q = temp;
console.log(p, "and", q);
//type-3
let x = 0;
let y = -1;
x = x ^ y
y = x ^ y
x = x ^ y
console.log(x, "and", y);