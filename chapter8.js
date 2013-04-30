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
  // JavaScript function definitions do not specify an expected type for the function parameters, and
  // function invocations do not do any type checking on the argument values you pass. In fact, JavaScript
  // function invocations do not even check the number of arguments being passed.

  // Optional Parameters
    // When a function is invoked with fewer arguments than declared parameters, the additional
    // parameters are set to the undefined value.

    // You can use the || operator in this idiomatic way to set default values for parameters:
      a = a || [];

  // Variable-Length Argument Lists: The Arguments Object
    // When a function is invoked with more argument values than there are parameter names, there
    // is no way to directly refer to the unnamed values.
    // Instead the Arguments Object (an array-like object)

    // Functions that can accept any number of arguments are called variadic
    // functions, variable arity functions, or varargs functions.

    // The callee and caller properties
      // In addition to its array elements, the Arguments object defines callee and caller properties.

  // Using Object Properties As Arguments
    function easycopy(args) {
      arraycopy(args.from,
                args.from_start || 0, // Note default value provided args.to,
                args.to_start || 0,
                args.length);
    }
    // Here is how you might invoke easycopy(): var a = [1,2,3,4], b = [];
    easycopy({from: a, to: b, length: 4});

  // Argument Types
    // Most of the time you should test for argument type even if JavaScript can convert Types
    // Sometimes it's advantageous to except many different types though

// Functions As Values
