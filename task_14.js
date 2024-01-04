//JavaScript Program to Print All Prime Numbers in an Interval
let maxValue = 100;
let minValue = 2;
let countPrimes=0;

for (let i = minValue; i <= maxValue; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i%j==0) {
            flag = 1;
            break
        }
    }
    if(i>1 && flag==0){
        countPrimes +=1;
        console.log(`this is Prime Number ${i}`);
    }
}
console.log(`Number of Prime Numbers  ${countPrimes}`);