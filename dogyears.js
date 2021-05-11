//this var stores my age and can be changed
let myAge = 30;

//this var stores an age and can be changed
let earlyYears = 2;

// this reassigns the value of early years to it's stored value times 10.5
earlyYears *= 10.5;

// this assigns a var that formulates later years
let laterYears = (myAge - 2) * 4;

// This reassigns the value of lateryears to it's value times 4
console.log(`Early years: ${earlyYears} and Later years: ${laterYears}.`);

// this var stores a formula to convert your age to dog years 
 const myAgeInDogYears = earlyYears + laterYears;

 //this var stores my name and converts it to lowercase
const myName = 'Allison'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `);