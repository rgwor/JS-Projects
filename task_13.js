// Prime Number
const number = 20;
var isPrime=true;
for(let i=2;i<number;i++){
    if(number%i==0){
        isPrime=false;
        break;
    }
}
if(isPrime){
    console.log("The given number is prime number");
}
else{
    console.log("The given number is not prime number");
}