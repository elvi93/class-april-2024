const cafeName = "central perk" ;
console.log(`Welcome to ${cafeName}! What would you like to order today?`);

let priceOfCoffe = 2 ;
let howManyCoffe = 2 ; 
let total = priceOfCoffe * howManyCoffe
console.log(`There you go, that'll be ${total} euros`);

let isBestCoffee = true;

if (isBestCoffee) {
    console.log("You said this coffee is the best, and that was actually true.");
} else {
    console.log("You said this coffee is the best, but that was not true.");
}



var cafeGuests = 20;

console.log("Initial number of cafe guests:", cafeGuests);


cafeGuests = 15;


console.log("New number of cafe guests:", cafeGuests);


const maxGuests = 25;
console.log("our place of guests:", maxGuests);

// const maxGuests = 20;
//console.log("max nummber of guests:", maxGuests);

let myString = "coding is fun"
console.log(myString.toLocaleUpperCase);
console.log(myString.toLowerCase);









let myNumber;

myNumber = 20;

myNumber = myNumber + 1;

console.log(myNumber);

myNumber +=1;

console.log(myNumber);

myNumber++;

console.log(myNumber);
console.log(myNumber +1);



let varOne = 3;
let varTwo = "3";

console.log(varOne == varTwo)

console.log(varOne === varTwo);

console.log(varOne>varTwo);

console.log(varOne>=7);

console.log(varOne===varTwo || varOne <= 3 );


let totalResult = 0;

for (let i = 0; i <= 100; i++) {
    totalResult += i;
}

console.log("The total result is:", totalResult);





let number = 2;

while (number <= 20) {
    console.log(number);
    number += 2;

}

console.log("------------------");
console.log("------------------");
console.log("------------------");
console.log("------------------");
console.log("------------------");
console.log("------------------");
console.log("------------------");



function person(name, age, livesIn) {
    if (livesIn.livesInCity) {
        return true;
    } else if (livesIn.livesInTown) {
        return false;
    }
}


function describePerson(name, age, livesIn) {
    const place = person(name, age, livesIn) ? "city" : "town";
    return `${name} is ${age} years old and lives in the ${place}.`;
}

function person(name, age, livesIn) {
    if (livesIn.livesInCity) {
        return true;
    } else if (livesIn.livesInTown) {
        return false;
    }
}

const personDetails = {
    name: "Elvin",
    age: 31,
    livesIn: {
        livesInCity: true,
        livesInTown: false
    }
};

console.log(describePerson(personDetails.name, personDetails.age, personDetails.livesIn));

console.log("------------------");
console.log("------------------");
console.log("------------------");
console.log("------------------");
console.log("------------------");
console.log("------------------");

function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

// Example usage:
const radius = 5;
const area = calculateCircleArea(radius);
console.log("The area of the circle with radius", radius, "is", area.toFixed(2));

