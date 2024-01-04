let minValue = 100000;
let maxValue = 999999;


function otp() {
   const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    console.log(`random value between ${minValue} and ${maxValue} is :- ${randomValue}`);
    return randomValue;
}
const otpValue=otp();

if (otpValue) {
    console.log("Success");
}
else {
    console.log("invalid otp");
}