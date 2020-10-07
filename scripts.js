// Dog years

const myAge = parseInt(prompt("Please enter your age!"));
// // This variable is represents my age

let earlyYears = 2;
earlyYears *= 10.5;
// First 2 years of the dog's life is bigger 10.5 times than human age.

let laterYears = myAge - 2;
laterYears *= 4;
// We already calculated the first 2 years.
// For later years, dog's life is bigger 4 times than human age.

// console.log(`Early years: ${earlyYears} - later years: ${laterYears}`);

let myAgeInDogYears = earlyYears + laterYears;
myAgeInDogYears = Math.round(myAgeInDogYears);
// When added to early years and later years together, we can calculate the dogs years

const myName = prompt("Please enter your name!").toLowerCase();
alert(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// Dog age to human age;
const dogAge = parseInt(prompt("Please enter dog age!"));
let earlyDog = 2; 
earlyDog *= 10.5;

let laterDog = dogAge - 2;
laterDog *= 4;

let dogAgeToHumanAge = earlyDog + laterDog;
dogAgeToHumanAge = Math.round(dogAgeToHumanAge);

alert(`Dog age is ${dogAge} years old. Its human age is ${dogAgeToHumanAge} years old.`)

// 14 -> Challange -> “tortoise years” to “human years”
const turtiesAge = parseInt(prompt("Please enter turtle age!"));
let firstTurtle = 12;
let lastTurtle = turtiesAge - 1;
lastTurtle *= 10;

let turtleHumanAge = firstTurtle + lastTurtle;
alert(`Turtle age is ${turtiesAge} years old. Its human age is ${turtleHumanAge} years old.`)