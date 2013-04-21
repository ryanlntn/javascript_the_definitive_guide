// Chapter 5
// Statements

// Chapter 4 described expressions as JavaScript phrases. By that analogy, statements are JavaScript sentences or commands.
// Expressions are evaluated to produce a value, but statements are executed to make something happen.
// JavaScript programs are nothing more than a sequence of statements to execute.
// Statements are terminated by a semicolon (;)

// Expression Statements
  // The simplest kinds of statements in JavaScript are expressions that have side effects.

// Compound and Empty Statements
  // Just as the comma operator combines multiple expressions into a single expression,
  // a statement block combines multiple statements into a single compound statement.
    {
      x = Math.PI;
      cx = Math.cos(x);
      console.log("cos(π) = " + cx);
    }

  // A compound statement allows you to use multiple statements where JavaScript syntax expects
  // a single statement. The empty statement is the opposite: it allows you to include no statements
  // where one is expected. The empty statement looks like this:
    ;

// Declaration Statements
  // The var and function are declaration statements—they declare or define variables and functions.

  // var
    // The var statement declares a variable or variables. Here’s the syntax:
      // var name_1 [ = value_1] [ ,..., name_n [= value_n]]

    // If a var statement appears within the body of a function, it defines local variables, scoped to that function.
    // When var is used in top-level code, it declares global variables, visible throughout the JavaScript program.

    // Note that it is harmless to declare the same variable multiple times.

  // function
    // The function keyword is used to define functions.
    // A function declaration statement has the following syntax:
      // function funcname([arg1 [, arg2 [..., argn]]]) {
      //   statements
      // }