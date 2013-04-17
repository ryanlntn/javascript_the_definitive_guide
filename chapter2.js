// Chapter 2
//

// 2.1 Unicode

  // Javascript:
    // uses the unicode character set
    // is case sensitive
    // ignores all whitespace
    // assumes source code is normalized

// 2.2 Comments

  // This is a comment
  /* This is also a
     comment        */

// 2.3 Literals

  12                    // The number twelve
  1.2                   // The number one point two
  "hello world"         // A string of text
  'Hi'                  // Another string
  true                  // A Boolean value
  false                 // The other Boolean value
  /javascript/gi        // A "regular expression" literal (for pattern matching)
  null                  // Absence of an object
  { x:1, y:2 }          // An object initializer
  [1,2,3,4,5]           // An array initializer

// 2.4 Identifiers and Reserved Words

  // Legal identifiers
    i
    my_variable_name
    v13
    _dummy
    $str

  // Unicode is also allowed
<<<<<<< HEAD
    var sí = true;
=======
    var sí = true;
>>>>>>> 3315298bebcaf0b01bb61214136eb5f5a41640cc
    var π = 3.14;

  // 2.4.1 Reserved Words - Don't use these!

    // Reserved for JavaScript
      // break delete case do catch else continue false debugger finally default for
      // function return typeof if switch var
      // in this void instanceof throw while new true with null try

    // Reserved for ECMAScript5
      // class const enum export extends import super

    // Reserved in strict mode
      // implements let private public yield interface package protected static

    // Excluded from variable, function, or parameter names in strict mode
      // arguments eval

    // Reserved for ECMAScript3
      // abstract double goto boolean enum implements byte export import char extends int
      // class final interface const float long
      // native static package super private synchronized protected throws public transient short volatile

    // Avoid overwriting predefined global variables and functions
      // arguments encodeURI Infinity Array encodeURIComponent isFinite
      // JSON decodeURI EvalError Math decodeURIComponent Function NaN
      // Number Object parseFloat parseInt RangeError ReferenceError
      // RegExp String SyntaxError TypeError undefined URIError
      // Boolean Error isNaN Date eval

// 2.5 Optional Semicolons

  // JavaScript uses ; to seperate statements
  // In general, if a statement begins with (, [, /, +, or -,
  // there is a chance that it could be interpreted as a continuation of the statement before.

