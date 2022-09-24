
// 2.1 Looping a Triangle
let output = "";
let divOutput = '';
for (let i = 0; i < 7; i++) {
  output += "#";
  divOutput += output + '<br>';
  console.log(output); 
}

document.getElementById("triangle").innerHTML = divOutput;

// 2.2 FizzBuzz
let fizzbuzzOutput = '';
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 == 0) output += 'Fizz';
    if (i % 5 == 0) output += 'Buzz';
    fizzbuzzOutput += (output || i) + '<br>';
    console.log(output || i);
}

document.getElementById("fizzbuzz").innerHTML = fizzbuzzOutput;

// Chessboard
const size = 8;
let chessOutput = '';
let chessboardOutput = ' ';
for (y = 1; y <= size; y++) {
    for (x = 1; x <= size; x++) {
        
        let xMod2 = (x % 2);
        let yMod2 = (y % 2);

        if ((xMod2 == 1) && (yMod2 == 1)) {
            chessOutput += ' ';
            chessboardOutput += ' ';
        }

        if ((xMod2 == 0) && (yMod2 == 1)){
            chessOutput += '#';
            chessboardOutput += '#';
        }
        
        if ((xMod2 == 0) && (yMod2 == 0)) {
            chessOutput += ' ';
            chessboardOutput += ' ';
        }

        if ((xMod2 == 1) && (yMod2 == 0)){
            chessOutput += '#';
            chessboardOutput += '#';
        }
        
        if (x == size) {
            chessOutput += '\n';
            chessboardOutput += '<br> ';
        }
    }
}
console.log(chessOutput);
document.getElementById('chessboard').innerHTML = chessboardOutput;

// 3.1 Minimum
function min (num1, num2) {
    let lowest;

    if (num1 < num2) {
        lowest = num1;
    } else if (num2 < num1) {
        lowest = num2;
    } else {
        lowest = 'ERROR INVALID INPUT: please enter two number that are inequal.'
    }

    return lowest;
}
console.log(min(0, 10));
console.log(min(0, -10));
let minOutput = '' + min(0, 10);
minOutput += ', ' + min(0, -10);
document.getElementById('minimum').innerHTML = minOutput;

// 3.2 Recursion
function isEven(posNum){
    // check for proper input, else abort
    if (posNum < 0){
        return 'ERROR INVALID INPUT: please enter a positive number';
    }

    let isEven = false;
    if (posNum % 2 == 0) {
        isEven = true;
    } else if (posNum % 2 == 1) {
        isEven = false;
    } else {
        isEven(posNum - 2)
    }
    return isEven;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
let recursionOutput = '';
recursionOutput += 'isEven(50) = ' + isEven(50) + 
                   ', isEven(75) = ' + isEven(75) + 
                   ', isEven(-1) = ' + isEven(-1);
document.getElementById('recursion').innerHTML = recursionOutput;

// 3.3 Bean Counting
function countBs(input){
    return countChar(input, "B")
}
function countChar(input, char){
    if ((typeof input != 'string') && (char.length > 1) && (typeof char != 'string')){
        return "ERROR INVALID INPUT: please enter a string";
    }
    let totalchars = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === char) totalchars += 1;
    }
    return totalchars;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"))
let beanOutput = 'countBs("BBC") = ' + countBs("BBC") + 
                 '\ncountChar("kakkerlak", "k") = ' + countChar("kakkerlak", "k");
document.getElementById('beanCounting').innerHTML = beanOutput;

// 4.1
function range(start, end, step = 1){
    let rangeArray = []; 
    if (start < end){
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    } else  if (end < start){
        for (let i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
    }
    return rangeArray;
}
function sum(rangeArray){
    let sum = 0;
    for (let i = 0; i < rangeArray.length; i++){
        sum += rangeArray[i];
    }
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// -> 55
let sumOfRangeOutput = 'range(1,10) = ' + range(1,10) + 
                       '<br>range(5, 2, -1) = ' + range(5, 2, -1) +
                       '<br>sum(range(1,10)) = ' + sum(range(1,10));
document.getElementById('sumOfRange').innerHTML = sumOfRangeOutput;

// 4.2
function reverseArray(anArray){
    let reversedArray = [];
    let length = anArray.length;
    for (let i = 0; i < anArray.length; i++) {
        reversedArray[i] = anArray[length -1];
        length--;
    }
    return reversedArray;
}
function reverseArrayInPlace(anArray){
    let reversed = reverseArray(anArray);
    let length = anArray.length;
    for (let i = 0; i < length; i++) {
        anArray[i] = reversed[i];
    }
    return anArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
let reverseOutput = 'reverseArray(["A", "B", "C"]) = [' + reverseArray(["A", "B", "C"]) +
                    ']<br> reverseArrayInPlace([1, 2, 3, 4, 5]) = [' + reverseArrayInPlace([1, 2, 3, 4, 5]) + ']';
document.getElementById('reverseArray').innerHTML = reverseOutput;

// 4.3
function arrayToList(anArray){
    let newList = null;
    for (let i = anArray.length - 1; i >= 0; i--) {
        newList = {value: anArray[i], rest: newList};
    }
    return newList;
}
function listToArray(aList){
    let newArray = [];
    for (let node = aList; node; node = node.rest){
        newArray.push(node.value);
    }
    return newArray;
}
function prepend(anElement, aList){
    return {anElement, rest: aList};
}
function nth(aList, num){
    if (!aList) return undefined;
    else if (num == 0) return aList.value;
    else return nth(aList.rest, num-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

document.getElementById('aList').innerHTML = 'arrayToList([10, 20]) = ' + arrayToList([10, 20]) +
                                            '<br>listToArray(arrayToList([10, 20, 30])) = ' + listToArray(arrayToList([10, 20, 30])) + 
                                            '<br>prepend(10, prepend(20, null)) = ' + prepend(10, prepend(20, null)) +
                                            '<br>nth(arrayToList([10, 20, 30]), 1) = ' + nth(arrayToList([10, 20, 30]), 1);

// 4.4
function deepEqual(value1, value2){
    if (value1 === value2) return true;
    if (value1 == null || typeof value1 != 'object' || 
        value2 == null || typeof value2 != 'object') return false;
    
    let value1keys = Object.keys(value1);
    let value2keys = Object.keys(value2);
    if (value1keys.length != value2keys.length) return false;
    for (let key of value1keys) {
        if (!value2keys.includes(key) || !deepEqual(value1[key], value2[key])) return false;
    }

    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

document.getElementById('deepComparison').innerHTML = 'deepEqual(obj, obj) = ' + deepEqual(obj,obj) +
                                                      '<br>deepEqual(obj, {here: 1, object: 2}) = ' + deepEqual(obj, {here: 1, object: 2}) +
                                                      '<br>deepEqual(obj, {here: {is: "an"}, object: 2}) = ' + deepEqual(obj, {here: {is: "an"}, object: 2});