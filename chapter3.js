// Chapter 3
// Types, Values, and Variables

// Computer programs work by manipulating values (e.g. 3.14, "Hello World")

// Those values can be stored in variables (e.g. var x = 5)

// Those values which can be represented and manipulated in programming
// languages are known as types.
// JavaScript types can be divided into primitives and objects.
// Primitives include numbers, strings, and booleans as well as null and undefined.
// Objects include everything else including arrays and functions.
// JavaScript also includes the Date, Regex, and Error classes.

// JavaScript is an Object-Oriented language
  // a.sort(); // The object-oriented version of sort(a).
// In JavaScript, null and undefined are the only values that methods cannot be invoked on.

// JavaScript strings are immutable.

// JavaScript is extremely liberal in its type conversions.

// JavaScript uses lexical scoping. Variables declared out- side of a function are global
// variables and are visible everywhere in a JavaScript program. Variables declared inside
// a function have function scope and are visible only to code that appears inside that function.

// Numbers
  // All numbers in JavaScript are represented as floating-point values.
  // The JavaScript number format allows you to exactly represent all integers
  // between −9007199254740992 (−253) and 9007199254740992 (253), inclusive.
  // When a number appears directly in a JavaScript program, it’s called a numeric literal. (e.g. 1, -6, 99)

  // JavaScript has support for decimal (1, 99, 100000), hexidecimal (0x1, 0x99, 0xff), and octal (04, 05, 016) literals.
    // Note: In the strict mode of ECMAScript 5, octal literals are explicitly forbidden.

  // JavaScript also supports floating point literals:
    // The syntax is:
      // [digits][.digits][(E|e)[(+|-)]digits]

      // for example:
        // 3.14
        // 2345.789
        // .333333333333333333
        // 6.02e23 // 6.02 × 10^23
        // 1.4738223E-32 // 1.4738223 × 10^-32

  // Arithmetic operators
    // + - * / %

  // More complex math operations in the Math object
    // Math.pow(2,53)             // => 9007199254740992: 2 to the power 53
    // Math.round(.6)             // => 1.0: round to the nearest integer
    // Math.ceil(.6)              // => 1.0: round up to an integer
    // Math.floor(.6)             // => 0.0: round down to an integer
    // Math.abs(-5)               // => 5: absolute value
    // Math.max(x,y,z)            // Return the largest argument
    // Math.min(x,y,z)            // Return the smallest argument
    // Math.random()              // Pseudo-random number x where 0 <= x < 1.0
    // Math.PI                    // π: circumference of a circle / diameter
    // Math.E                     // e: The base of the natural logarithm
    // Math.sqrt(3)               // The square root of 3
    // Math.pow(3, 1/3)           // The cube root of 3
    // Math.sin(0)                // Trigonometry: also Math.cos, Math.atan, etc.
    // Math.log(10)               // Natural logarithm of 10
    // Math.log(100)/Math.LN10    // Base 10 logarithm of 100
    // Math.log(512)/Math.LN2     // Base 2 logarithm of 512
    // Math.exp(3)                // Math.E cubed

  // Arithmetic in JavaScript does not raise errors in cases of overflow, underflow, or division by zero.
  // Instead Infinity, -Infinity, 0, -0, or NaN are returned.

  // Watch out for floating point errors. Use scaled integers ftw!

  // Dates and Times are built using the Date() constructor

// Strings
  // JavaScript uses the UTF-16 character set making JavaScript string sequences of 16 bit values.

  // Literals are enclosed in " " or ' '.

// Booleans
  // The following values convert to, and therefore work like, false:
    // undefined null
    // 0
    // -0
    // NaN
    // "" // the empty string
  // Everything else converts to true.

// null and undefined
  // null is a language construct used to represent an empty object.
  // undefined is a global variable that represents an object that doesn't exist.
  // null == undefined // => true
  // null === undefined // => false
  // neither null nor undefined have any properties or methods.

// The Global Object
  // When the JavaScript interpreter starts (or whenever a web browser loads a new page), it
  // creates a new global object and gives it an initial set of properties that define:
    // global properties like undefined, Infinity, and NaN
    // global functions like isNaN(), parseInt(), and eval()
    // constructor functions like Date(), RegExp(), String(), Object(), and Array()
    // global objects like Math and JSON
  // The initial properties of the global object are not reserved words, but they
  // deserve to be treated as if they are.

  // In top-level code—JavaScript code that is not part of a function—you can
  // use the JavaScript keyword this to refer to the global object:
    // var global = this; // Define a global variable to refer to the global object

  // In client-side JavaScript, the Window object serves as the global object for all
  // JavaScript code contained in the browser window it represents. This global Window
  // object has a self-referential window property that can be used instead of this to
  // refer to the global object. The Window object defines the core global
  // properties, but it also defines quite a few other globals that are specific to
  // web browsers and client-side JavaScript.

// Wrapper Objects
