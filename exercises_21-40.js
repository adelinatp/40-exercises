// Category 2: Function Implementation

// Instructions: Write the code for the following requirements. Invoke each function as specified.

// 21. Summation
// •	Arguments: Two numbers (x, y).
// •	Logic: Add them.
// •	Return: The sum (number).
// •	Invoke: 3 times with different pairs of numbers.

const summation = (x, y)=>{
    return x + y
}
console.log(`21: Sum: ${summation(2, 8)}`);
console.log(`21: Sum: ${summation(9, 71)}`);
console.log(`21: Sum: ${summation(1, -1)}`);

// 22. String Length
// •	Arguments: One string (str).
// •	Logic: Calculate character count.
// •	Return: Length (number).
// •	Invoke: 2 times.

const stringLength = (str) => {
    return str.length
}
console.log(`22: String length: ${stringLength("Abcde")}`);
console.log(`22: String length: ${stringLength("Pneumonoultramicroscopicsilicovolcanoconiosis")}`);


// 23. Number Checker
// •	Arguments: One number (n).
// •	Logic: Check if even.
// •	Return: true or false (boolean).
// •	Invoke: Once with an even number, once with an odd.

const numberChecker = (n)=>{
    if (n % 2 === 0){
        return true
    }else{
        return false
    }
}
console.log(`23: Is even: ${numberChecker(2)}`);
console.log(`23: Is even: ${numberChecker(3)}`);


// 24. Object Factory
// •	Arguments: Two strings (make, model).
// •	Logic: Create a car object.
// •	Return: Object { make: ..., model: ... }.
// •	Invoke: 2 times.


const objectFactory = (make, model)=>{
    return {make: make, model: model}
}
console.log(objectFactory("Toyota", "Corolla"));
console.log(objectFactory("Honda", "Civic"));


// 25. Array Element Finder
// •	Arguments: Array (arr), Value (val).
// •	Logic: Check if array contains value.
// •	Return: boolean.
// •	Invoke: 2 times.

const elementFinder = (arr, val)=>{
    if (arr.includes(val)){
        return true
    }else{
        return false
    }
}

console.log(`25: Array Element Finder: ${elementFinder(["fruit", "vegetables", "flowers"], "spoons")}`);
console.log(`25: Array Element Finder: ${elementFinder([1,2,3,4,5], 5)}`);

// 26. Safe Divider
// •	Arguments: Numerator, Denominator.
// •	Logic: Divide. If denominator is 0, return 0.
// •	Return: Number.
// •	Invoke: 3 times (including a divide-by-zero case).

const safeDivider = (numerator, denominator)=>{
    if (denominator === 0){
        return 0
    } else{
        return numerator / denominator
    }
}

console.log(`26: Safe Divider: ${safeDivider(10,5)}`);
console.log(`26: Safe Divider: ${safeDivider(5,10)}`);
console.log(`26: Safe Divider: ${safeDivider(5, 0)}`);


// 27. Text Formatter
// •	Arguments: One string.
// •	Logic: Convert to uppercase.
// •	Return: String.
// •	Invoke: 2 times.

const textFormatter = (str)=>{
    return str.toUpperCase()
}
console.log(`27: Text Formatter:${textFormatter("abcd")}`);
console.log(`27: Text Formatter:${textFormatter("LalalALA")}`);


// 28. Age Validator
// •	Arguments: Number (age).
// •	Logic: If age < 18, log "Restricted". Else log "Allowed".
// •	Return: Void.
// •	Invoke: 2 times.

const ageValidator = (age)=>{
    if(age<18){
        console.log("Restricted");
    }else{
        console.log("Allowed");
    }
}
ageValidator(18);
ageValidator(5);


// 29. Tax Calculator
// •	Arguments: Price, TaxRate.
// •	Logic: Calculate total cost.
// •	Return: Number.
// •	Invoke: 3 times.

const taxCalculator = (price, taxRate)=> price + (price * taxRate)
console.log(`29: Tax Calculator: ${taxCalculator(100, 0.2)}`);
console.log(`29: Tax Calculator: ${taxCalculator(250, 0.1)}`);
console.log(`29: Tax Calculator: ${taxCalculator(30, 0.4)}`);


// 30. List Appender
// •	Arguments: Array, Item.
// •	Logic: Return a new array with the item added (do not mutate original).
// •	Return: Array.
// •	Invoke: 2 times.

const listAppender = (arr, item) => {
    const newArr = arr.slice()
    newArr.push(item)
    return newArr
}
console.log(listAppender([4,5,6],4));
console.log(listAppender(["a","b","c"],"d"));


// 31. User Greeter
// •	Arguments: Name (string), TimeOfDay (string).
// •	Logic: Return "Good [TimeOfDay], [Name]".
// •	Return: String.
// •	Invoke: 2 times.

const userGreeter = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}`
}
console.log(`31: User Greeter: ${userGreeter("Alina", "morning")}`);
console.log(`31: User Greeter: ${userGreeter("Peter", "afternoon")}`);


// 32. Range Generator
// •	Arguments: Start, End.
// •	Logic: Create array of numbers from start to end (inclusive).
// •	Return: Array.
// •	Invoke: 2 times.

const rangeGenerator = (start, end) => {
    const arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}
console.log(rangeGenerator(3,5));
console.log(rangeGenerator(-5,5));

// 33. Property Extractor
// •	Arguments: Object (with id property).
// •	Logic: Extract id.
// •	Return: The value of id.
// •	Invoke: 2 times.

const propertyExtractor = (obj) => {
    return obj.id
}
console.log(`33: Property Extractor: ${propertyExtractor({id:9})}`);
console.log(`33: Property Extractor: ${propertyExtractor({id:43})}`);

// 34. Null Coalescer
// •	Arguments: Input.
// •	Logic: If input is null/undefined, return "Default". Else return Input.
// •	Return: Value or String.
// •	Invoke: 3 times (including null case).

const nullCoalescer = (input) => {
    if (input === null || input === undefined){
        return "Default"
    }else{
        return input
    }
}

console.log(`34: Null Coalescer: ${nullCoalescer("Text 1")}`);
console.log(`34: Null Coalescer: ${nullCoalescer(null)}`);
console.log(`34: Null Coalescer: ${nullCoalescer()}`);


// 35. Coordinate Mapper
// •	Arguments: x, y, z.
// •	Logic: Create a 3D point object.
// •	Return: { x, y, z }.
// •	Invoke: 2 times.

const coordinateMapper = (x, y, z) => {
    return {x,y,z}
}
console.log("35:");

console.log(coordinateMapper(20,30,40));
console.log(coordinateMapper(10,10,40));


// 36. Filter Logic
// •	Arguments: Array of numbers.
// •	Logic: Return array with only positive numbers.
// •	Return: Array.
// •	Invoke: 2 times.

const filterLogic = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            result.push(arr[i]);
        }
    }
    return result
}
console.log("36:");
console.log(filterLogic([-1,4,-7]));
console.log(filterLogic([1,4,8.9]));


// 37. Delayed Logger
// •	Arguments: Message.
// •	Logic: Use setTimeout to log message after 1 second.
// •	Return: Void.
// •	Invoke: 2 times.

const delayedLogger = (message)=> {
    setTimeout(() => {
        console.log(message)
    }, 1000);
}

delayedLogger("Message");
delayedLogger("Message2");


// 38. Status Flipper
// •	Arguments: Boolean.
// •	Logic: Return the opposite (!).
// •	Return: Boolean.
// •	Invoke: 2 times.

const statusFlipper = (boolean) => {
    return !boolean
}

console.log(`38: Status Flipper: ${statusFlipper(true)}`);
console.log(`38: Status Flipper: ${statusFlipper(false)}`);


// 39. Multi-Argument Sum
// •	Arguments: Array of numbers.
// •	Logic: Sum all elements in array.
// •	Return: Number.
// •	Invoke: 2 times.

const multiArgumentSum = (numArray) =>{
    let sum = 0
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i]
    }
    return sum
}

console.log(multiArgumentSum([5,2,3,8,2]));


// 40. Type Reporter
// •	Arguments: Any value.
// •	Logic: Determine type using typeof.
// •	Return: String (e.g., "string", "number").
// •	Invoke: 3 times with different types.

const typeReporter = (anyValue) => {
    return typeof anyValue
}

console.log(typeReporter("Abcde"));
console.log(typeReporter(243));
console.log(typeReporter(true));
