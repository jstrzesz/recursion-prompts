// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    if (n < 0){
        return null;
    } else if (n === 1 || n === 0){
        return 1;
    };
    return n * factorial(n -1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, index = 0, total = 0) {
   if (index === array.length){
       return total;
   };
   total += array[index];
   return sum(array, ++index, total);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, flattenedArr = [], sum = 0, index = 0) {
    let flatten = function(array){
        return array.reduce(function(flattened, curr){
            if (Array.isArray(curr)){
                flattened = flattened.concat(flatten(curr));
            } else {
                flattened.push(curr);
            }   return flattened;
        }, [])
    }
    flattenedArr = flatten(array);
    if (index === flattenedArr.length){
        return sum;
    }
    sum += flattenedArr[index];
    return arraySum(array, flattenedArr, sum, ++index);
};

// 4. Check if a number is even.
var isEven = function(n) {
    // debugger
    if (n < 0){
        return isEven(n + 2);
    } else if (n === 0){
        return true;
    } else if (n === 1){
        return false;
    }
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum = 0) {
    if (n === 0){
        return sum;
    } else if (n < 0){
        return (n + 1) + sumBelow(n + 1);
    };
    return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, ranged = []) {
    if (x > y && x > y + 1){
        ranged.push(x - 1);
        return range(x - 1, y, ranged);
     } 
     if (x === y - 1 || x === y || x === y + 1){
        return ranged;
    }
    if (x > y){
        ranged.push(x - 1);
    } else if (x < y){
        ranged.push(x + 1);
    }
    return range(x + 1, y, ranged)
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp < 0){
        return 1/(exponent(base, -exp));
    }
    if (exp === 0){
       return 1;
   }
   return base * exponent(base, --exp);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    // debugger
    if (n === 1){
        return true;
    }
    if (n < 1){
        return false;
    }
   return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, index = string.length - 1, reversed = '') {
   if (index === -1){
       return reversed;
   }
   reversed += string[index];
   return reverse(string, --index, reversed);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.replace(' ', '').toLowerCase();
   if (string.length < 2){
       return true;
   }
   if (string[0] !== string[string.length -1]){
       return false;
   }
   return palindrome(string.substr(1, string.length -2));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    if (x < 0){
        return -modulo(-x, y);
    }
    if (y < 0){
        return modulo(x, -y);
    }
    if (x < y){
        return x;
    }
    return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if (x < 0 && y < 0){
        return multiply(-x, -y + 1) + x;
    }
   if (y === 1){
       return x;
   }
   if (x === 0 || y === 0){
       return 0;
   }
   return multiply(x, y - 1) + x;
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    debugger
    if (y === 0) {
        return NaN;
      }
      if (x === 0) {
        return 0;
      }
      if (x < y) {
        return 0;
      }
      if (x + y < 0) {
        return 0;
      }
      if (x - y === 0) {
        return 1;
      }
      if (y === 1){
          return x;
      }
      return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0){
        return null;
    }
    if (y === 0){
        return x;
    }
    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (!str1.length && !str2.length){
        return true;
    }
    if (str1[0] !== str2[0]){
        return false;
    }
    return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, array = []){
    if (!str.length){
        return array;
    }
    array.push(str[0]);
    return createArray(str.slice(1), array);
};

// 17. Reverse the order of an array
var reverseArr = function (array, reversed = []) {
    if (!array.length){
        return reversed;
    }
    reversed.unshift(array[0]);
    return reverseArr(array.slice(1), reversed);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array = []) {
    if (array.length === length){
        return array;
    }
    array.push(value);
    return buildList(value, length, array);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
    if (!array.length){
        return count;
    }
    if (array[0] === value){
        count += 1;
    }
    return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, mapped = []) {
    if (!array.length){
        return mapped;
    }
    mapped.push(callback(array[0]));
    return rMap(array.slice(1), callback, mapped);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, index = 0, count = 0) {
    let keys = Object.keys(obj);
    // debugger
    if (typeof obj[keys[index]] === 'object' && obj !== null && !Array.isArray(obj) && !(obj instanceof Date)){
        count += countKeysInObj(obj[keys[index]], key);
    }
    if (index === keys.length){
        return count;
    }
    if (keys[index] === key){
        return countKeysInObj(obj, key, ++index, ++count);
    }
    return countKeysInObj(obj, key, ++index, count);
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, index = 0, count = 0) {
    let keys = Object.keys(obj);
    if (typeof obj[keys[index]] === 'object' && obj !== null && !Array.isArray(obj) && !(obj instanceof Date)){
        count += countValuesInObj(obj[keys[index]], value);
    }
    if (index === keys.length){
        return count;
    }
    if (obj[keys[index]] === value){
        return countValuesInObj(obj, value, ++index, ++count);
    }
    return countValuesInObj(obj, value, ++index, count);
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey, index = 0) {
    let keys = Object.keys(obj);
    if (typeof obj[keys[index]] === 'object' && obj !== null && !Array.isArray(obj) && !(obj instanceof Date)){
        obj[keys[index]] = replaceKeysInObj(obj[keys[index]], key, newKey);
    }
    if (index === keys.length){
        return obj;
    }
    if (keys[index] === key){
        obj[newKey] = obj[key];
        delete obj[key];
        return replaceKeysInObj(obj, key, newKey, index);
    }
    return replaceKeysInObj(obj, key, newKey, ++index);
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    // debugger
    if (n < 1){
        return null;
    }
    if (n === 1){
        return [0, 1];
    }
    let fibSequence = fibonacci(n - 1);
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    return fibSequence;
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    // debugger
    if (n < 0){
        return null;
    }
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, capitalized = [], index = 0) {
    if (index === input.length){
        return capitalized;
    }
    capitalized.push(input[index].toUpperCase());
    return capitalizeWords(input, capitalized, ++index);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, capitalized = [], index = 0) {
    if (index === array.length){
        return capitalized;
    }
    array[index] = array[index][0].toUpperCase() + array[index].substr(1);
    capitalized.push(array[index]);
    return capitalizeFirst(array, capitalized, ++index);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj, index = 0, sum = 0) {
    let keys = Object.keys(obj);
    if (typeof obj[keys[index]] === 'object' && obj !== null && !Array.isArray(obj) && !(obj instanceof Date)){
        obj[keys[index]] = nestedEvenSum(obj[keys[index]]);
    }
    if (index === keys.length){
        return sum;
    }
    if (typeof obj[keys[index]] === 'number'){
        if (obj[keys[index]] % 2 === 0){
            sum += obj[keys[index]];
        }
    }
    return nestedEvenSum(obj, ++index, sum);
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
    return arrays.reduce(function(flattened, currVal){
        if (Array.isArray(currVal)){
            flattened = flattened.concat(flatten(currVal));
        } else {
            flattened.push(currVal);
        }
        return flattened;
    }, [])
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}, index = 0) {
   if (index === str.length){
       return obj;
   }
   obj[str[index]] = (obj[str[index]] || 0) + 1;;
   return letterTally(str, obj, ++index);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, compressed = []) {
    if (!list.length){
        return compressed;
    }
    if (list[0] !== list[1]){
        compressed.push(list[0]);
    }
    return compress(list.slice(1), compressed);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, index = 0) {
    if (index === array.length){
        return array;
    }
    array[index].push(aug);
    return augmentElements(array, aug, ++index);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, minimized = []) {
    if (!array.length){
        return minimized;
    }
    if (array[0] !== 0 || array[0] === 0 && array[1] !== 0){
        minimized.push(array[0]);
    }
    return minimizeZeroes(array.slice(1), minimized);
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, alternated = [], index = 0) {
    if (index === array.length){
        return alternated;
    }
    if (index % 2 === 0){
        alternated.push(Math.abs(array[index]))
    } else {
        alternated.push(-Math.abs(array[index]));
    }
    return alternateSign(array, alternated, ++index);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, index = 0) {
    let text = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    let numRegEx = /\d/;
    if (index === str.length){
        return str;
    }
    // console.log(numRegEx.test(convertedStr[index]))
    if (numRegEx.test(str[index])){
       str = str.replace(str[index], text[str[index]]);
    } 
    return numToText(str, ++index);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
