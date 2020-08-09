# @alordash/levenshtein

```
$ npm i @alordash/damerau-levenshtein
```  

# Levenshtein algorithm

My realization of [Damerau-Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance) algorithm.

# Usage


```javascript
const { distance, closest } = require('@alordash/damerau-levenshtein')

// Print Damerau-Levenshtein distance between "better" and "bteetr"
console.log(distance("better", "bteetr"));
//=> 2

// Select the most similar string to "park" from string list.
let value = closest("park", ["luck", "duck", "apkr"]);

// Result:
console.log(value.closest_string);
//=> "apkr"

console.log(value.distance);
//=> 2
```

# Features

You can also create calculation object using **distanceCalculation** class:  
```javascript
const { distanceCalculation } = require("@alordash/levenshtein");

// Calculate Damerau-Levenshtein distance between "entity" and "idenitty"
let object = new distanceCalculation("entity", "idenitty");

// Print Damerau-Levenshtein distance between "entity" and "idenitty"
console.log(object.value);
//=> 3

// Change strings in object to "first" and "wrist" and calculate Damerau-Levenshtein distance between them
object.strings = ["first", "wrist"];

// Print Damerau-Levenshtein distance between "first" and "wrist"
console.log(object.value);
//=> 2

// Print calculation matrix
console.log(object.getMatrix());
//=>
//     |   | w | r | i | s | t
//—————+–––+–––+–––+–––+–––+–––
//     | 0 | 1 | 2 | 3 | 4 | 5
//—————+–––+–––+–––+–––+–––+–––
//   f | 1 | 1 | 2 | 3 | 4 | 5
//—————+–––+–––+–––+–––+–––+–––
//   i | 2 | 2 | 2 | 2 | 3 | 4
//—————+–––+–––+–––+–––+–––+–––
//   r | 3 | 3 | 2 | 2 | 3 | 4
//—————+–––+–––+–––+–––+–––+–––
//   s | 4 | 4 | 3 | 3 | 2 | 3
//—————+–––+–––+–––+–––+–––+–––
//   t | 5 | 5 | 4 | 4 | 3 | 2
//—————+–––+–––+–––+–––+–––+–––
```