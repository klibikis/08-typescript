console.log('Ready for coding');

// Task 1
// Write a function that takes two numbers (a and b) as argument
// Subtract b from a
// Return the result

const subtract = (num1:number, num2:number):number => num1-num2;

console.log("Answers for task 1:")
console.log(subtract(1, 2)); //-1
console.log(subtract(10, 5)) //5
console.log(subtract(99, 1)) //98

// Task 2
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const add = (num1: number, num2: number):number => num1 + num2;

console.log("Answers for task 2:")
console.log(add(1, 2)); //3
console.log(add(1, 10)); //11
console.log(add(99, 1)); //100

// Task 3
// Write a function that takes a value as argument
// Return the type of the value

const type = (value: any): any => typeof(value);

console.log("Answers for task 3:")
console.log(type(1));
console.log(type(false));
console.log(type({}));
console.log(type(null));
console.log(type("string"));
console.log(type(["array"]));

// Task 4
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const strongEquality = (value1: any, value2: any):any => {
   return value1 === value2
}

console.log("Answers for task 4:")
console.log(strongEquality(2, 3));
console.log(strongEquality(3, 3));
console.log(strongEquality(1, "1"));
console.log(strongEquality("10", "10"));

// Task 5
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const charReturn = (str: string, num: number):string => str.split("")[num-1];

console.log("Answers for task 5:")
console.log(charReturn('abcd',1));
console.log(charReturn('zyxbwpl',5));
console.log(charReturn('gfedcba',3));

// Task 6
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const stringCutter = (str: string): string => str.substring(3);

console.log("Answers for task 6:")
console.log(stringCutter('abcdefg'));
console.log(stringCutter('1234'));
console.log(stringCutter('fgedcba'));

// Task 7
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const stringEnd = (str: string):string => str.slice(-3);

console.log("Answers for task 7:")
console.log(stringEnd('abcdefg'));
console.log(stringEnd('1234'));
console.log(stringEnd('fgedcba'));

// Task 8
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const stringStart = (str: string):string => str.slice(0, 3);

console.log("Answers for task 8:")
console.log(stringStart('abcdefg'));
console.log(stringStart('1234'));
console.log(stringStart('fgedcba'));

// Task 9
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const halfString = (str: string) => str.slice(0, (str.length)/2);

console.log("Answers for task 9:")
console.log(halfString('abcdefgh'));
console.log(halfString('1234'));
console.log(halfString('gedcba'));

// Task 10
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const stringEndCutter = (str: string):string => str.slice(0, -3);

console.log("Answers for task 10:")
console.log(stringEndCutter('abcdefg'));
console.log(stringEndCutter('1234'));
console.log(stringEndCutter('fgedcba'));

// Task 11
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentage = (num1: number, num2: number): number => num2/num1*100;

console.log("Answers for task 11:")
console.log(percentage(100, 50));
console.log(percentage(10, 1));
console.log(percentage(500, 25));

// Task 12
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const mathTrain = (n1: number, n2: number, n3: number, n4: number, n5: number, n6: number): number => 
Math.pow((n1 + n2 - n3) * n4 / n5, n6);

console.log("Answers for task 12:")
console.log(mathTrain(6,5,4,3,2,1));
console.log(mathTrain(6,2,1,4,2,3));
console.log(mathTrain(2,3,6,4,2,3));

// Task 13
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const evenNumber = (num: number) => num % 2 == 0 ;

console.log("Answers for task 13:")
console.log(evenNumber(10));
console.log(evenNumber(-4));
console.log(evenNumber(5));
console.log(evenNumber(-111));

// Task 14
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const occurances = (str1: string, str2: string):number => {
    const splittedString: string[] = str2.split("");
    let sum = 0;
    for( let i=0; i < splittedString.length; i++){
        if(splittedString[i] === str1){
            sum +=1;
        }
    }
    return sum;
}

console.log("Answers for task 14:")
console.log(occurances('m', 'how many times does the character occur in this sentence?'));
console.log(occurances('h', 'how many times does the character occur in this sentence?'));
console.log(occurances('?', 'how many times does the character occur in this sentence?'));
console.log(occurances('z', 'how many times does the character occur in this sentence?'));

// Task 15
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const wholeNumber = (num: number):boolean => num === Math.round(num);

console.log("Answers for task 15:")
console.log(wholeNumber(4));
console.log(wholeNumber(1.123));
console.log(wholeNumber(1048));
console.log(wholeNumber(10.48));

// Task 16
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const mathGames = (num1: number, num2: number): number => {
    if(num1 < num2){
        return num1 / num2;
    }else{
        return num1 * num2;
    }
}

console.log("Answers for task 16:")
console.log(mathGames(10, 100));
console.log(mathGames(90, 45));
console.log(mathGames(8, 20));
console.log(mathGames(2, 0.5));

// Task 17
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const stringAppendix = (str1: string, str2: string): string => {
    if (str1.includes(str2) === true){
        return str2.concat(str1);
    }
    return str1.concat(str2);
}

console.log("Answers for task 17:")
console.log(stringAppendix('cheese', 'cake'));
console.log(stringAppendix('lips', 's'));
console.log(stringAppendix('Java', 'script'));
console.log(stringAppendix(' think, therefore I am', 'I'));

// Task 18
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundNumber = (num: number): number => Math.round(num * 100)/100;

console.log("Answers for task 18:")
console.log(roundNumber(2.12397));
console.log(roundNumber(3.136));
console.log(roundNumber(1.12397));
console.log(roundNumber(26.1379));

// Task 19
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const numberSplit = (num: number): number[] => {
    const stringArray = String(num).split("")
    const numberArray = stringArray.map(elem => +elem);
    return numberArray;
}

console.log("Answers for task 19:")
console.log(numberSplit(10));
console.log(numberSplit(931));
console.log(numberSplit(193278));

// Task 20
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const clearUpStrings = (str1: string, str2: string): string => {
    const clearStr1 = str1.replace("%", "");
    const lowerStr1 = clearStr1.slice(1);
    const capitalStr1 = clearStr1.slice(0, 1).toUpperCase();
    const clearStr2 = str2.replace("%", "");
    const reversedStr2 = clearStr2.split("").reverse().join("")
    const result = capitalStr1 + lowerStr1 + reversedStr2;
    return result;
}

console.log("Answers for task 20:")
console.log(clearUpStrings('java', 'tpi%rcs'));
console.log(clearUpStrings('c%ountry', 'edis'));
console.log(clearUpStrings('down', 'nw%ot'));

// Task 21
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const primeNumber = (num: number): number => {
    let prime = true;
    while(prime === true){
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime){
        return num;
    }
    num += 1;
    prime = true;
    }
}

console.log("Answers for task 21:")
console.log(primeNumber(38));
console.log(primeNumber(7));
console.log(primeNumber(115));
console.log(primeNumber(2000));

// Task 22
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const divisableNumbers = (num1: number, num2: number):number => {
    if(num1 % num2 === 0){
        return num1;
    }
    while(true){
        num1 += 1;
        if(num1 % num2 === 0){
            return num1;
        }
    }
}

console.log("Answers for task 22:")
console.log(divisableNumbers(1, 23));
console.log(divisableNumbers(23, 23));
console.log(divisableNumbers(7, 3));
console.log(divisableNumbers(-5, 7));

// Task 23
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertText = (str1: string, str2: string): string => {
    let stringArray = str1.split("");
    let result: string[] = [];
    for(let i = 0; i = Math.floor(stringArray.length/3); i++){
        for(let i = 0; i < 3; i++){   
            result.unshift(stringArray.pop());
        }
        result.unshift(str2);
    }
    if(stringArray.length >= 0){
        for(let i = stringArray.length - 1; i >= 0; i--){
            result.unshift(stringArray[i]);
        }
    }
    
    return result.join("");
}

console.log("Answers for task 23:");
console.log(insertText('1234567','.'));
console.log(insertText('abcde','$'));
console.log(insertText('zxyzxyzxyzxyzxyz','w'));

// Task 24
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const letterIncrement = (str: string): string => {
    const charSetAsString: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charSet = charSetAsString.split("");
    let resultWord = str.split("").map(letter =>{
        let letterIndex = charSetAsString.indexOf(letter)+1;
        letter = charSetAsString[letterIndex];
        return letter;
    })
    return resultWord.join("")
}

console.log("Answers for task 24:");
console.log(letterIncrement('bnchmf'));
console.log(letterIncrement('bgddrd'));
console.log(letterIncrement('sdrshmf'));

// Task 25
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const arrayElement = (arr: number[], value: number) => arr[value-1];

console.log("Answers for task 25:");
console.log(arrayElement([1,2,3,4,5],3));
console.log(arrayElement([10,9,8,7,6],5));
console.log(arrayElement([7,2,1,6,3],1));

// Task 26
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const shortenedArray = (arr: number[]): number[] => arr.slice(3);

console.log("Answers for task 26:");
console.log(shortenedArray([1,2,3,4]));
console.log(shortenedArray([5,4,3,2,1,0]));
console.log(shortenedArray([99,1,1]));

// Task 27
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const extractedArray = (arr: number[]): number[] => arr.slice(-3);

console.log("Answers for task 27:");
console.log(extractedArray([1,2,3,4]));
console.log(extractedArray([5,4,3,2,1,0]));
console.log(extractedArray([99,1,1]));

// Task 28
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const extractedArrayFromStart = (arr: number[]): number[] => arr.slice(0, 3);

console.log("Answers for task 28:");
console.log(extractedArrayFromStart([1,2,3,4]));
console.log(extractedArrayFromStart([5,4,3,2,1,0]));
console.log(extractedArrayFromStart([99,1,1]));

// Task 29
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const arrayOfN = (arr: number[], num: number):number[] => arr.slice(-num);

console.log("Answers for task 29:");
console.log(arrayOfN([1, 2, 3, 4, 5], 2));
console.log(arrayOfN([1, 2, 3], 6));
console.log(arrayOfN([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Task 30
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const filteredArray = (arr: any[], value: any):any[] => {
    let finalArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== value){
            finalArray.push(arr[i]);
        }
    }
    return finalArray;
}

console.log("Answers for task 30:");
console.log(filteredArray([1,2,3], 2));
console.log(filteredArray([1,2,'2'], '2'));
console.log(filteredArray([false,'2',1], false));
console.log(filteredArray([1,2,'2',1], 1));

// Task 31
// Write a function that takes an array (a) as argument
// Return the number of elements in a

const elementsInArray = (arr: any[]):number => arr.length;

console.log("Answers for task 31:");
console.log(elementsInArray([1,2,2,4]));
console.log(elementsInArray([9,9,9]));
console.log(elementsInArray([4,3,2,1,0]));

// Task 32
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const negativeNumbers = (arr: number[]):number => {
    let sum = 0;
    arr.forEach(element => {
        if(element < 0){
            sum += 1;
        }
    })
    return sum;
}

console.log("Answers for task 32:");
console.log(negativeNumbers([1,-2,2,-4]));
console.log(negativeNumbers([0,9,1]));
console.log(negativeNumbers([4,-3,2,1,0]));

// Task 33
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const descendingNumbers = (arr: number[]):number[] => arr.sort((a, b) => b - a);

console.log("Answers for task 33:");
console.log(descendingNumbers([1,3,2]));
console.log(descendingNumbers([4,2,3,1]));

// Task 34
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const stringSort = (arr: string[]): string[] => arr.sort();

console.log("Answers for task 34:");
console.log(stringSort(['b', 'c', 'd', 'a']));
console.log(stringSort(['z', 'c', 'd', 'a', 'y', 'a', 'w']));


// Task 35
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

const averageNumber = (arr:number[]):number => {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum/arr.length;
}

console.log("Answers for task 35:");
console.log(averageNumber([10,100,40]));
console.log(averageNumber([10,100,1000]));
console.log(averageNumber([-50,0,50,200]));

// Task 36
// Write a function that takes an array of strings as argument
// Return the longest string

const longestStrings = (arr: string[]): string => {
    let maxLength = 0;
    let longestString = "";
    arr.forEach(element => {
        if(element.length > maxLength){
            maxLength = element.length;
            longestString = element;
        }
    })
    return longestString;
}

console.log("Answers for task 36:");
console.log(longestStrings(['help', 'me']));
console.log(longestStrings(['I', 'need', 'candy']));

// Task 37
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const equalArray = (arr: any[]): boolean => {
    const value = arr[0];
    let isEqual = true;
    arr.forEach(element => {
        if(element !== value){
            isEqual = false;
        }
    })
    return isEqual;
}

console.log("Answers for task 37:");
console.log(equalArray([true, true, true, true]));
console.log(equalArray(['test', 'test', 'test']));
console.log(equalArray([1,1,1,2]));
console.log(equalArray(['10',10,10,10]));

// Task 38
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const wholeArray = (...args: any[]) => {
    return args.reduce(function(acc, cur){
        return acc.concat(cur);
    })
}

console.log("Answers for task 38:");
console.log(wholeArray([1, 2, 3], [4, 5, 6]));
console.log(wholeArray(['a', 'b', 'c'], [4, 5, 6]));
console.log(wholeArray([true, true], [1, 2], ['a', 'b']));

// Task 39
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const sortedObjectArray = (arr: {a: number, b: number}[]): {a: number, b: number}[] => {
    arr.sort((object1, object2) => {
        return object1.b - object2.b;
    });
    return arr;
}

console.log("Answers for task 39:");
console.log(sortedObjectArray([{a:1,b:2},{a:5,b:4}]));
console.log(sortedObjectArray([{a:2,b:10},{a:5,b:4}]));
console.log(sortedObjectArray([{a:1,b:7},{a:2,b:1}]));

// Task 40
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const arrayMerge = (arr1: number[], arr2: number[]):number[] => {
    const arrayWithDuplicates = arr1.concat(arr2).sort((a, b) => a - b);
    return [...new Set(arrayWithDuplicates)];
}

console.log("Answers for task 40:");
console.log(arrayMerge([1, 2, 3], [3, 4, 5]));
console.log(arrayMerge([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// Task 41
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const weirdArraySum = (arr: number[], num: number): number => {
    let sum = 0;
    arr.forEach(value => {
        if(value > num){
            sum += value;
        }
    })
    return sum;
}

console.log("Answers for task 41:");
console.log(weirdArraySum([1, 2, 3, 4, 5, 6, 7], 2));
console.log(weirdArraySum([-10, -11, -3, 1, -4], -3));
console.log(weirdArraySum([78, 99, 100, 101, 401], 99));

// Task 42
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const rangedArray = (num1: number, num2: number): number[] => {
    let resultArray = [];
    for(let i = num1; i <= num2; i++){
        resultArray.push(i);
    }
    return resultArray;
}

console.log("Answers for task 42:");
console.log(rangedArray(2, 10));
console.log(rangedArray(1, 3));
console.log(rangedArray(-5, 5));
console.log(rangedArray(2, 7));

// Task 43
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const transformArrays = (stringArray: string[]) => {
    return;
}

console.log("Answers for task 43:");
console.log(transformArrays(['Alf', 'Alice', 'Ben']));
console.log(transformArrays(['Ant', 'Bear', 'Bird']));
console.log(transformArrays(['Berlin', 'Paris', 'Prague']));

// Task 44
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

const differentArray = (arr: any[], num: number) => {
    if(num >= 6){
        return [num].concat(arr);
    }
    return [0].concat(arr);
}

console.log("Answers for task 44:");
console.log(differentArray([1,2,3], 6));
console.log(differentArray(['a','b'], 2));
console.log(differentArray([null,false], 11));

// Task 45
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

const nthArray = (arr: number[], num: number): number[] => {
    let rounds = num - 1;
    let finalArray = [];
    while(rounds < arr.length){
        finalArray.push(arr[rounds]);
        rounds += num;
    }
    return finalArray;
}

console.log("Answers for task 45:");
console.log(nthArray([1,2,3,4,5,6,7,8,9,10],3));
console.log(nthArray([10,9,8,7,6,5,4,3,2,1],5));
console.log(nthArray([7,2,1,6,3,4,5,8,9,10],2));

// Task 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

const objectValue = (obj: {continent: string, country: string}) => obj.country;

console.log("Answers for task 46:");
console.log(objectValue({  continent: 'Asia',  country: 'Japan'}));
console.log(objectValue({  country: 'Sweden',  continent: 'Europe'}));

// Task 47
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

const objectValue2 = (obj: {[key: string]: any}) => {
    return obj['prop-2'];
}

console.log("Answers for task 47:");
console.log(objectValue2({  one: 1,  'prop-2': 2}));
console.log(objectValue2({  'prop-2': 'two',  prop: 'test'}));

// Task 48
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const objectValueOfString = (obj: {[key: string]: string}, str: string) => obj[str];

console.log("Answers for task 48:");
console.log(objectValueOfString({  continent: 'Asia',  country: 'Japan'}, 'continent'));
console.log(objectValueOfString({  country: 'Sweden',  continent: 'Europe'}, 'country'));

// Task 49
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const hasArgumentProperty = (obj: {[key: string]: any}, str: string) => {
    return obj.hasOwnProperty(str);
}

console.log("Answers for task 49:");
console.log(hasArgumentProperty({a:1,b:2,c:3},'b'));
console.log(hasArgumentProperty({x:'a',y:'b',z:'c'},'a'));
console.log(hasArgumentProperty({x:'a',y:'b',z:'c'},'z'));

// Task 50
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

interface Object {
    key: string;
}
const objectFromString = (str: string) => {
    const obj = new Object();
    obj.key = str;
    return obj;
}

console.log("Answers for task 50:");
console.log(objectFromString('a'));
console.log(objectFromString('z'));
console.log(objectFromString('b'));


