let myArray = [];
const numbers = [1, 2, 3, 4, 5, 8, 10];

console.log(numbers);
console.log(numbers[3]);
console.log("Array length: " + numbers.length);
console.log("Number 3: " + numbers[numbers.length - 4]);

numbers.push(25);
console.log(numbers);

numbers.pop();
console.log(numbers);

let cloudy = true;
const items = [1, 'two', [3, 4], cloudy, null];
console.log(items);

for(let i = 0; i < items.length; i++){
    // console.log('Value of i: ', i);
    console.log('Value of array at i: ', items[i]);
}

for(let item of items){
    console.log('Item: ', item)
}

console.log("Beginning of array methods split and join:");

function arrayToString(array) {
    console.log("Array to string: ");
    console.log(array.join(', '));
}
const files = ["bundle.js", "*.js.map", ".c9"];
arrayToString(files);



function stringToArray(input) {
    console.log(input.split(','));
}

console.log("String to array: ");
stringToArray("bundle.js, *.js.map, .c9");

const myObject = {};
const smallNumbers = {
    one: 1,
    two: 2,
    three: 3, 
    four: 4
}
console.log("Objects: ", myObject, smallNumbers);
console.log("Values in our object: ",
smallNumbers.one,
smallNumbers.two,
smallNumbers.three,
smallNumbers.four);

const secondObject = {
    five: 5,
    six: 'six'
};            

secondObject.newItem = 'This is a new item in second object.'
console.log(secondObject.five);
console.log(secondObject.six);
console.log(secondObject.newItem);

myObject.newItem = 'Object is no longer empty';
console.log("Object with new item: ", myObject)
items.push(secondObject);
console.log(items);