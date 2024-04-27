function multiply(num1, num2, callback) {
    const result = num1 * num2;
    callback(result);
}


function callback(result) {
    console.log("The result is:", result);
}

multiply(7, 7, callback); 


console.log("------------");
console.log("------------");
console.log("------------");
console.log("------------");




let callbackDva = (result) => {
    console.log("The result is:", result);
};

multiply(8, 8, callbackDva);


console.log("------------");
console.log("------------");
console.log("------------");
console.log("------------");

function greetUser(name, callback) {
    const greetingMessage = `Hello, ${name}!`;
    callback(greetingMessage);
}


function callbackTwo(message) {
    console.log(message);
}

greetUser("Elvin", callbackTwo); 
