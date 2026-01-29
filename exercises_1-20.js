// Category 1: Function Analysis

// Instructions: For each snippet below, determine:
// 1.	Number of parameters defined.
// 2.	Is it a void function (no return value) or does it return a value?
// 3.	The data type of the returned value (if applicable).

// 1. Basic Arithmetic
// JavaScript
function calculateLoad(a, b) {
  return a + b;
}
console.log(calculateLoad(3,5))
// two param, returns value, number

// 2. String Concatenation
function buildPath(dir, file) {
  return dir + "/" + file;
}
console.log(buildPath("C:", "Users"));
// two param, returns value, string

// 3. Void Logger
function logError(message) {
  console.error("System Failure: " + message);
}
console.log(logError(404));
//one param, returns undefined - void; and shows message  

// 4. Boolean Logic
function isValid(age, limit) {
  return age >= limit;
}
console.log(isValid(21,20));
// two param, returns value, boolean

// 5. Object Return
function createUser(name) {
  return { id: 1, username: name };
}
console.log(createUser("User1"));
// one param, returns value, object

// 6. Array Processing
function getFirstThree(items) {
  return items.slice(0, 3);
}
console.log(getFirstThree([3,4,6,7]));
// one param, returns value, array

// 7. Default Parameters
function setConfig(retries = 3) {
  return retries;
}
console.log(setConfig(5));
console.log(setConfig());
// one param, returns value, number

// 8. Explicit Void
function resetSystem() {
  return;
}
console.log(resetSystem());
// no param, returns undefined (void)
// 9. Arrow Function (Implicit Return)
const double = (x) => x * 2;
console.log(double(5));
//one param, returns value, number 

// 10. Arrow Function (Block Body)
const process = (data) => {
  if (!data) return false;
  return true;
};
console.log(process());
//one param, returns value, boolean

// 11. Type Conversion
function asString(val) {
  return String(val);
}
console.log(asString(20));
//one param, returns string

// 12. Conditional Return
function checkStatus(code) {
  if (code === 200) return "OK";
  return null;
}
console.log(checkStatus(200));
// one param, returns string or null
// 13. Nested Object Access
const user = {
  address: {
    city: "Chisinau"
  }
};

function getCity(user) {
  return user.address.city;
}
console.log(getCity(user));
// one param, returns value, string

// 14. Math Operations
function calcArea(r) {
  return Math.PI * r * r;
}
console.log(calcArea(2));
//one param, returns value, number

// 15. Array Mutation (Side Effect)
function pushItem(arr, item) {
  arr.push(item);
}
console.log(pushItem([2,6,4], 9));
// two params, returns undefined (void)
// 16. MultipleReturns
function getSign(n) {
  if (n > 0) return 1;
  if (n < 0) return -1;
  return 0;
}
console.log(getSign(5));
// 17. Undefined Return
function doNothing(x) {
  const y = x + 1;
}
console.log(doNothing(2));
// one param, returns undefined (void)
// 18. Date Object
function now() {
  return new Date();
}
console.log(now());
// no param, returns value, object (Date)
// 19. Template Literal
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("lola"));
//one param, returns string
// 20. Higher Order
function getAction() {
  return function() { console.log("Action"); };
}
console.log(getAction());
// no param, returns function 