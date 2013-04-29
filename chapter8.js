// Chapter 8
// Functions

// A function is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times.

// Defining Functions
  // Functions are defined with the function keyword
  // Functions with no return value are sometimes called procedures.

  // Nested Functions
    // In JavaScript, functions may be nested within other functions. For example:
      function hypotenuse(a, b) {
        function square(x) { return x*x; }
        return Math.sqrt(square(a) + square(b));
      }

// Invoking Functions
  // Functions are invoked as functions or as methods with an invocation expression

  // For function invocation in ECMAScript 3 and nonstrict ECMAScript 5, the invocation context (the this value)
  // is the global object. In strict mode, however, the invocation context is undefined.

  // Method Invocation
    // A method is nothing more than a JavaScript function that is stored in a property of an object.

    // When you write a method that does not have a return value of its own, consider having the method return this.
    // If you do this consistently throughout your API, you will enable a style of programming known as method chaining

  // Constructor Invocation
    // If a function or method invocation is preceded by the keyword new, then it is a constructor invocation.

    // A constructor invocation creates a new, empty object that inherits from the prototype property of the constructor.

  // Indirect Invocation
    // JavaScript functions are objects and like all JavaScript objects, they have methods.
    // Two of these methods, call() and apply(), invoke the function indirectly.

// Function Arguments and Parameters