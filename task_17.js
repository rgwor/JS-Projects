//Example 1: Fibonacci Series Up to n Terms
const number=5;
let n1=0;
let n2=1;

for(let i=0;i<number;i++){
    console.log(n1);
    nexterm=n1+n2;
    n1=n2;
    n2=nexterm;
}
console.log("===================");
let n3=0;
let n4=1;
nextTerm = n3 + n4;
while (nextTerm <= number) {
    console.log(nextTerm);
    n3 = n4;
    n4 = nextTerm;
    nextTerm = n3 + n4;
}
