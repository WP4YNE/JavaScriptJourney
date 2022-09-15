// === is always true - 18 === 18 - 17 === 18 - false
// Does not perform type coercion
const age = 18;
if (age === 18) console.log('You just become a adult(strict)');
if (age == 18) console.log('You have just become a Adult(loose)');

// == does do type coercion
// '18' == 18 - TRUE
// '18' === 18 - FALSE

//Comparing values ===


const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23 - loose type coercion inserting Number( will make it work as a number
    console.log('cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

// this can be continued infinitely with more else if statements.

if (favourite !== 23) console.log('Why not 23?');

/* Boolean Logic
 True or False
Non Specific for JS it applies to languages.
*/


/* Logical Operators in JavaScript

*/

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

// If she is not tired has license and has good vision she can drive
// True + True + False = Someone else should drive.
// True + True + True = Sarah should drive.
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}


