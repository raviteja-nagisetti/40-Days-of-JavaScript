// output based question
/*
 * The output is "It's a normal day". Since "Monday" is not equal to "monday" in JavaScript, because JavaScript is case sensitive.
 */

// Task 1
let withdrawlAmount = 5000;
if (withdrawlAmount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid Amount");
}

// Task 2
let operator = "%";
let num1 = 21;
let num2 = 3;
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  case "%":
    result = num1 % num2;
    break;
  default:
    console.log("Invalid operator");
}

console.log(result);

// Task 3
let age = 30;
if (age < 18) {
  console.log("Ticket price is $3");
} else if (age <= 60) {
  console.log("Ticket price is $10");
} else {
  console.log("Ticket price is $8");
}

// Task 4
let month = "March";
let zodaicSign = null;
switch (month) {
  case "January":
    zodaicSign = "Aquarius";
    break;
  case "February":
    zodaicSign = "Pisces";
    break;
  case "March":
    zodaicSign = "Aries";
    break;
  case "April":
    zodaicSign = "Taurus";
    break;
  case "May":
    zodaicSign = "Gemini";
    break;
  case "June":
    zodaicSign = "Cancer";
    break;
  case "July":
    zodaicSign = "Leo";
    break;
  case "August":
    zodaicSign = "Virgo";
    break;
  case "September":
    zodaicSign = "Libra";
    break;
  case "October":
    zodaicSign = "Scorpius";
    break;
  case "November":
    zodaicSign = "Sagittarius";
    break;
  case "December":
    zodaicSign = "Capricornus";
    break;
}
console.log(zodaicSign);

// Task 5
let side1 = 20;
let side2 = 15;
let side3 = 14;
if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
