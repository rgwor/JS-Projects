//fahrenheit = (celsius * 1.8) + 32
let cels = 50;
const fahr = (cels*1.8)+32;
console.log(`${cels} degree celsius is equal to ${fahr} degree fahrenheit.`);
cels = (fahr-32)/1.8
console.log(`${fahr} degree fahrenheit is equal to ${cels} degree celsius.`);