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
  // These operators test for a relationship (such as “equals,” “less than,” or “property of”) between two values
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

  // The instanceof Operator
    var d = new Date();     // Create a new object with the Date() constructor
    d instanceof Date;      // Evaluates to true; d was created with Date()
    d instanceof Object;    // Evaluates to true; all objects are instances of Object
    d instanceof Number;    // Evaluates to false; d is not a Number object
    var a = [1, 2, 3];      // Create an array with array literal syntax
    a instanceof Array;     // Evaluates to true; a is an array
    a instanceof Object;    // Evaluates to true; all arrays are objects
    a instanceof RegExp;    // Evaluates to false; arrays are not regular expressions

// Logical Expressions
  // The logical operators &&, ||, and ! perform Boolean algebra and are often used in conjunction with the
  // relational operators to combine two relational expressions into one more complex expression.
    x == 0 && y == 0 // true if, and only if x and y are both 0
    var o = { x : 1 };
    var p = null;
    o && o.x // => 1: o is truthy, so return value of o.x
    p && p.x // => null: p is falsy, so return it and don't evaluate p.x

  // The behavior of && is sometimes called “short circuiting,” and you may sometimes see code
  // that purposely exploits this behavior to conditionally execute code. For example, the
  // following two lines of JavaScript code have equivalent effects:
    if (a == b) stop(); // Invoke stop() only if a == b
    (a == b) && stop(); // This does the same thing

  // An idiomatic usage of the || operator is to select the first truthy value in a set of alternatives:
    // If max_width is defined, use that. Otherwise look for a value in
    // the preferences object. If that is not defined use a hard-coded constant.
    var max = max_width || preferences.max_width || 500;

    // This idiom is often used in function bodies to supply default values for parameters:
      // Copy the properties of o to p, and return p
      function copy(o, p) {
        p = p || {}; // If no object passed for p, use a newly created object.
        // function body goes here
      }

// Assignment Expressions
  // JavaScript uses the = operator to assign a value to a variable or property.
  i = 0 // Set the variable i to 0.
  o.x = 1 // Set the property x of object o to 1.

// Assignment with Operation
  // JavaScript also has +=, -=, *=, /=, %=, <<= , >>=, >>>=, &=, |=, ^= operators

// Evaluation Expressions
  // Like many interpreted languages, JavaScript has the ability to interpret strings of
  // JavaScript source code, evaluating them to produce a value. JavaScript does this with
  // the global function eval():
  eval("3+2") // => 5

  // eval() should have been an operator but it's a function
  // eval() expects one argument. If you pass any value other than a string, it simply returns
  // that value. If you pass a string, it attempts to parse the string as JavaScript code, throwing a SyntaxError if it fails.

  // Strict eval()
    // using "strict mode" makes eval more operator like and causes it to do a local eval with a private variable environment

// Miscellaneous Operators
  // The Conditional (ternary) Operator (?:)
    x > 0 ? x : -x // The absolute value of x
  // The typeof Operator
    // typeof is a unary operator that is placed before its single operand, which can be of any type.
    // Its value is a string that specifies the type of the operand.

