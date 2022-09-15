//Discovering Variables and variable types
//Let, If, VAR, Const etc

let js = 'amazing';
if (js === 'amazing') alert("JavaScript is FUN!");

//numbers
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

//displaying string/numbers in console
console.log("William");
console.log("23");



////////////////////////////
// Coding Challenge #1
/*
Mark and John are trying to compare their BMI(Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// Declare my Variables
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.5;

//Calculate their BMI
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

//Display their BMI's
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`Johns BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}








// Declare Variables
const firstName = 'Kairi';
const job = 'unemployed bum';
const birthYear = 2016;
const year = 2022;

// Form a string with Variables
const kairi = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(kairi);

// Deviant String
const kairiNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(kairiNew);

// Regular String
console.log(`Just a regular string...`);

// Old Multi Line Code
console.log('String with \n\
multiple \n\
lines');

// using `` makes it multi-lined
console.log(`string
multiple
lines`);


// Playing with If Statements for being able to learn to drive.
const age = 6;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Kairi can start driving license 🚗');
} else {
    const yearsLeft = 17 - age;
    console.log(`Kairi is too young. Wait another ${yearsLeft} years :)`);
}

//The Below is all on TYPE CONVERSION.
//JS will do Type Conversion for us automatically.

//this won't add 18 to the year 1991 as it's considered a string unless we change the information type.
let inputYear = '1991';

console.log(Number(inputYear) + 18);
//This will enable it to be converted and turn it to 2009

console.log(Number('Will'));
//this will generate 'NaN' - Not a Number.

console.log(typeof NaN); // this will say it is a "Number"

console.log(String(23));
//This will convert it to a String.
//Number or String will need to begin with a CAPITAL

console.log(String(23), 23);
//this will generate 23 as a string and as a number.

//type coercion

console.log('I am' + 23 + ' years old');
//this will say "I am 23 Year's old."
//String + Number + String - type coercion
//Not all Types will automatically
console.log('23' - '10' - 3);
//this will generate the number '10'
console.log('23' * '2');
//this will generate 46 even though it's written as as string.
//All mathimatical types - + / * will convert to number.


n = n - 1;
console.log(n);
// the '1' + 1 will equal 11, then n - 1 = 10

// Truthy & Falsey Values

// JS has 5 Falsey Values: 0, '', undefined, null, NaN
//Everything else is Truthy

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Will')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 100; //if it's 0 it will state get a job - >0 value it will convert to Don't spend it all
if (money) {
    console.log("Don't spend it all;)");
} else {
    console.log('You should get a Job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}