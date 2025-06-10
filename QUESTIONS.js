// Q reverse a string...

 function reverseString(str){
    return str.split('').reverse().join('')
 }
// console.log(reverseString("hello"));

 // Q to check whether a string is a palindrome string

 

function isPalindrome(str){
    return str.split('').reverse().join('');
    return str=== reversed;
}
 //console.log(isPalindrome("GFG"));

//Q Find the largest number in an array in JavaScript.

    
// Math.max() is used to find the largest number

function findLargest(arr){
    return Math.max(...arr);
}

//console.log(findLargest([99,24,12,53,89]));

// Q  How to Remove the first element from an array in JavaScript

let myArr=[5,6,7];
myarr=myArr.slice(1);
//console.log(myarr)

// Q  Write a Program to use a callback function?

function greet(name){
    console.log( "hi" + ' '+ name);
}
greet('bipan')


// code to create an arrow function

const add=(a,b)=>a+b;
console.log(add(6,2));

//Q program to add aproperty to an object


//const obj={name:"bipan"};
//obj.age=23;
//console.log(obj);

//Q program to delete a property from an object

const obj ={name:'bipan', age:24};
delete obj.age;
console.log(obj);

//Q Write a function to check if a given number is prime.


function isPrime(num){
    if (num<=1){
        return false;

    }
    for (let i=2; i<= Math.sqrt(num);i++){
        if(num% i===0){
            return false;
        }
    }
    return true;
}
//console.log(isPrime(8))
//console.log(isPrime(5))

//Q Write a function that removes duplicate values from an array.

  

function removeDuplicates(arr){
    return [...new Set(arr)];
}
const arrayWithDuplicates=[1,2,2,3,3,4,4,5]
const uniqueArray1=removeDuplicates(arrayWithDuplicates);
//console.log(uniqueArray1);


//Q Write a function that calculates the factorial of a given number.


  

function factorial(n){
    let result=1;
    for (let i=1; i<=n; i++){
        result *=i;
    }
    return result;
}
//console.log(factorial(5));

//Q  find the missing number in an array.



function findMissingNumber(arr){
    const n= arr.length+1;
    const sumOfFirstN=(n*(n+1))/2;

    let sumOfArray=0;
    for(let i=0; i<n-1; i++){
        sumOfArray=sumOfArray+arr[i];
    }
    let missingNumber= sumOfFirstN-sumOfArray;
    return missingNumber;
}

const arr=[ 1,2,4,5,6,8,7];
const missingNumber= findMissingNumber(arr);
//console.log(missingNumber);


// Q flatten a nested array.

const nestedArray = [1, [2, [3, 4]], 5];

// Flatten one level
const flatArray1 = nestedArray.flat();
//console.log(flatArray1);

// Flatten all levels
const flatArray2 = nestedArray.flat(Infinity);
//console.log(flatArray2); 

//Q  create a counter function using closures that can increment and return the current count.

function createcounter(){
let count=0;
return function(){
    count++;
    return count;
}
}

const counter=createcounter()
console.log(counter());
console.log(counter());
console.log(counter());

//Q write a function that returns the first non repeating xxcharacter in a string

function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }
  return null;
}
console.log(findFirstNonRepeatingCharacter("aabbbccccdddd"));
console.log(findFirstNonRepeatingCharacter("aabbcde"));
console.log(findFirstNonRepeatingCharacter("aabcccdde"));

