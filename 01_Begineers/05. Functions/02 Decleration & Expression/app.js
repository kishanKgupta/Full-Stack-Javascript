// Function Declaration
sayHello("HuXn");
//work properly but not work in function expression

function sayHello(username) {
  console.log(`Hello ${username}`);
}

// Function Expressions
const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("Doe");

// -------------------------
console.log(x); // ERROR
let x = 10;
