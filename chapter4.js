// Chapter 4
// Expressions and Operators

// An expression is a phrase of JavaScript that a JavaScript interpreter can evaluate to produce a value.

// The most common way to build a complex expression out of simpler expressions is with an operator.
// An operator combines the values of its operands (usually two of them) in some way and evaluates to a new value.

// Primary Expressions
  // The simplest expressions, known as primary expressions, are those that stand alone
  // they do not include any simpler expressions. Primary expressions in JavaScript are
  // constant or literal values, certain language keywords, and variable references.

  // Literals
    1.23 // A number literal
    "hello" // A string literal
    /pattern/ // A regular expression literal

  // (some) Reserved Words
    true // Evalutes to the boolean true value
    false // Evaluates to the boolean false value
    null // Evaluates to the null value
    this // Evaluates to the "current" object

  // Bare Variable References
    i // Evaluates to the value of the variable i.
    sum // Evaluates to the value of the variable sum.
    undefined // undefined is a global variable, not a keyword like null.

// Object and Array Initializers
  // Object and array initializers are expressions whose value is a newly created object
  // or array. These initializer expressions are sometimes called “object literals” and “array literals.”

  // Array
    []        // An empty array: no expressions inside brackets means no elements
    [1+2,3+4] // A 2-element array. First element is 3, second is 7
    [[1,2,3], [4,5,6], [7,8,9]] // A matrix/multi-demensional array
    [1,,,,5]  // An array with undefined elements in it

  // Object
    var p = { x:2.3, y:-1.2 }; // An object with 2 properties
    var q = {}; // An empty object with no properties q.x = 2.3;
    q.y = -1.2; // Now q has the same properties as p
    var rectangle = { upperLeft: { x: 2, y: 2 }, lowerRight: { x: 4, y: 5 } }; // Nested
    var side = 1;
    var square = { "upperLeft": { x: p.x, y: p.y },
                  'lowerRight': { x: p.x + side, y: p.y + side }}; // String property names