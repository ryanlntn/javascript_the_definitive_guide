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
  // In JavaScript functions are not only syntax but also values, which means they can be assigned
  // to variables, stored in the properties of objects or the elements of arrays, passed as arguments to functions, and so on.

  // Defining Your Own Function Properties
    // Functions are not primitive values in JavaScript, but a specialized kind of object,
    // which means that functions can have properties.

      // Initialize the counter property of the function object.
      // Function declarations are hoisted so we really can
      // do this assignment before the function declaration.
        uniqueInteger.counter = 0;
      // This function returns a different integer each time it is called.
      // It uses a property of itself to remember the next value to be returned.
        function uniqueInteger() {
          return uniqueInteger.counter++; // Increment and return counter property
        }

// Functions As Namespaces
  // JavaScript has function scope: variables declared within a function are visible throughout
  // the function (including within nested functions) but do not exist outside of the function.

  // This means that variables can be wrapped in a function to avoid polluting the global namespace.

// Closures
  // Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are
  // executed using the variable scope that was in effect when they were defined, not the variable scope that
  // is in effect when they are invoked.

  // The combination of a function object and a scope (a set of variable bindings) in which the function’s
  // variables are resolved is called a closure in the computer science literature.

  // The first step to understanding closures is to review the lexical scoping rules for nested functions.
  // Consider the following code:
    var scope = "global scope";       // A global variable
    function checkscope() {
      var scope = "local scope";      // A local variable
      function f() { return scope; }  // Return the value in scope here
      return f();
    }
    checkscope()                      // => "local scope"

  // The checkscope() function declares a local variable and then defines and invokes a function that
  // returns the value of that variable. It should be clear to you why the call to checkscope() returns
  // “local scope”. Now let’s change the code just slightly. Can you tell what this code will return?
    var scope = "global scope";         // A global variable
    function checkscope() {
      var scope = "local scope";        // A local variable
      function f() { return scope; }    // Return the value in scope here
      return f;
    }
    checkscope()()                      // What does this return? Spoiler: "local scope"!

  // This, in a nutshell, is the surprising and powerful nature of closures: they capture the local
  // variable (and parameter) bindings of the outer function within which they are defined.

  // Here is how we could rewrite the uniqueInteger() function using closures:
    var uniqueInteger = (function() { // Define and invoke
                          var counter = 0; // Private state of function below
                          return function() { return counter++; };
                        }());

// Function Properties, Methods, and Constructor
  // The length Property
    // This read-only property returns the arity of the function—the number of parameters it declares in its
    // parameter list, which is usually the number of arguments that the function expects.

  // The prototype property
    // Every function has a prototype property that refers to an object known as the prototype object.
    // Every function has a different prototype object.

  // The call() and apply() Methods
    // call() and apply() allow you to indirectly invoke a function as if it were a method of some other object.

  // The bind() Method
    // the primary purpose of bind() is to bind a function to an object.

  // The toString() Method
    // In practice most (but not all) implementations of this toString() meth- od return the complete source code for the function.

  // The Function() Constructor
    // functions can also be defined with the Function() constructor. For example:
      var f = new Function("x", "y", "return x*y;");

    // • The Function() constructor allows JavaScript functions to be dynamically created and compiled at runtime.
    // • The Function() constructor parses the function body and creates a new function object each time it is called.
    //   If the call to the constructor appears within a loop or within a frequently called function, this process can
    //   be inefficient. By contrast, nested functions and function definition expressions that appear within loops are
    //   not recompiled each time they are encountered.
    // • A last, very important point about the Function() constructor is that the functions it creates do not use
    //   lexical scoping; instead, they are always compiled as if they were top-level functions, as the following
    //   code demonstrates:
      var scope = "global";
      function constructFunction() {
        var scope = "local";
        return new Function("return scope"); // Does not capture the local scope!
      }
      // This line returns "global" because the function returned by the
      // Function() constructor does not use the local scope.
      constructFunction()(); // => "global"

  // Callable Objects
    // A callable object is any object that can be invoked in a function invocation expression.
    // All functions are callable, but not all callable objects are functions.

// Functional Programming
  // JavaScript is not a functional programming language like Lisp or Haskell, but the fact that JavaScript can manipulate
  // functions as objects means that we can use functional programming techniques in JavaScript.

  // Processing Arrays with Functions

  // Higher-Order Functions
    // A higher-order function is a function that operates on functions, taking one or more functions
    // as arguments and returning a new function.

  // Partial Application of Functions
    // The bind() method of a function f returns a new function that invokes f in a specified context
    // and with a specified set of arguments.

// Memoization
  // We defined a factorial function that cached its previously computed results.
  // In functional programming, this kind of caching is called memoization.




