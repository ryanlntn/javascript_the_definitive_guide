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

// Function Definition Expressions
  // A function definition expression defines a JavaScript function, and the value of such an
  // expression is the newly defined function.

  // This function returns the square of the value passed to it.
  var square = function(x) { return x * x; }

// Property Access Expressions
  // A property access expression evaluates to the value of an object property or an array element.
  // JavaScript defines two syntaxes for property access:
  //
  // expression . identifier
  // expression [ expression ]

// Invocation Expressions
  // An invocation expression is JavaScript’s syntax for calling (or executing) a function or method.

  f(0) // f is the function expression; 0 is the argument expression.
  Math.max(x,y,z) // Math.max is the function; x, y and z are the arguments.
  a.sort() // a.sort is the function; there are no arguments.

// Object Creation Expressions
  // An object creation expression creates a new object and invokes
  // a function (called a constructor) to initialize the properties of that object.

  new Object()
  new Point(2,3)

// Operators
  // Operators are used for JavaScript’s arithmetic expressions, comparison expressions,
  // logical expressions, assignment expressions, and more.

  // Operators may be urnary, binary, or ternary
    1++;
    1 + 1;
    true ? 1 : 0;

  // Side Effects
    // Some operators have side effects (e.g. =, ++, --, delete)

  // Precendence
    // Order of operations applies in order (*, /, %, +, -, =)

  // Associativity
    // Most binary operators evaluate left to right while urnary and ternary evaluate right to left.

// Arithmetic Expressions
  // The + operator adds numbers and concatenates strings
  // Unary operators +, -, ++, and -- always convert to a number

// Relational Expressions
  // These operators test for a re- lationship (such as “equals,” “less than,” or “property of”) between two values
  // and return true or false depending on whether that relationship exists.

  // JavaScript uses =, ==, and === operators
    = // the assignment operator
    == // the equality operator
    === // the strict equality (i.e. 'identity') operator

  // we also have != and !== which are the exact opposite of == and === respectively
  // == will perform type conversions before checking for equality while === will not

  // JavaScript also has Comparison Operators (>,<,<=,>=)
    // The operands of these comparison operators may be of any type. Comparison can be performed only
    // on numbers and strings, however, so operands that are not numbers or strings are converted.

  // The in Operator
    var point = { x:1, y:1 }; // Define an object
    "x" in point // => true: object has property named "x"
    "z" in point // => false: object has no "z" property.
    "toString" in point // => true: object inherits toString method
    var data = [7,8,9]; // An array with elements 0, 1, and 2
    "0" in data // => true: array has an element "0"
    1 in data // => true: numbers are converted to strings
    3 in data // => false: no element 3

