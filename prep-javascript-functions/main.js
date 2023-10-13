function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const sum = addTwoNumbers(2, 2);
console.log('addTwoNumber Exercise:', sum);

function convertHourstoMinutes(hours) {
  const result = hours * 60;
  return result;
}
const minutes = convertHourstoMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  const result = 'Hello ' + name + '!';
  return result;
}
const greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}
const result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5:', result);

function multiplyAndDivideBy5(num1, num2) {
  const number = (num1 * num2) / 5;
  return number;
}
const number = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5:', number);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}
const difference = subtractTwoNumbers(22, 7);
console.log('subractTwoNumbers:', difference);

function getCircleCircumference(radius) {
  const result = radius * 3.14 * 2;
  return result;
}
const circumference = getCircleCircumference(5);
console.log('getCircleCircumference:', circumference);

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}
const fullName = getFullName('Juan', 'Ramirez');
console.log('fullName:', fullName);

function cube(number) {
  const result = number * number * number;
  return result;
}
const cubed = cube(5);
console.log('cubed:', cubed);
