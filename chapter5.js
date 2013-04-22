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

    // Unlike statement blocks used with while loops and other statements, a function body
    // requires curly braces, even if the body consists of only a single statement.

// Conditionals
  // Conditional statements execute or skip other statements depending on the value of a specified expression.

  // if statement
    // syntax:
      // if (expression)
      //   statement

    // or:
      // if (expression)
      //   statement1
      // else
      //   statement2

    // Note that the parentheses around the expression are a required part of the syntax for the if statement.
    // The rule in JavaScript (as in most programming languages) is that by default an else clause is part of the nearest if statement.
    // Use curly braces to avoid ambiguity.

  // else if
    // else if is not really a JavaScript statement, but simply a frequently used
    // programming idiom that results when repeated if/else statements are used

    // Using the else if idiom is preferable to, and more legible than, writing these
    // statements out in their syntactically equivalent, fully nested form

  // switch
    // The switch keyword is followed by an expression in parentheses and a block of code in curly braces:
      // switch(expression) {
      //   statements
      // }
    // for example:
      switch(n) {
        case 1: // Start here if n == 1
          // Execute code block #1.
          break;
        case 2: // Start here if n == 2
          // Execute code block #2.
          break; // Stop here
        case 3: // Start here if n == 3
          // Execute code block #3.
          break; // Stop here
        default: // If all else fails start here.
          // Execute code block #4.
          break; // Stop here
      }

// Loops
  // The looping statements are those that bend that path back upon itself to repeat portions of your code.
  // JavaScript has four looping statements: while, do/while, for, and for/in.

  // while
    // Just as the if statement is JavaScript’s basic conditional, the while statement
    // is JavaScript’s basic loop. It has the following syntax:
      // while (expression)
      //   statement

  // do/while
    // The do/while loop is like a while loop, except that the loop expression is tested at the bottom
    // of the loop rather than at the top. This means that the body of the loop is always
    // executed at least once. The syntax is:
      // do
      //   statement
      // while (expression);

  // for
    // In the for loop, the initialization, the test, and the update are the three
    // crucial manipulations of a loop variable. The for statement encodes each of these three manipulations
    // as an expression and makes those expressions an explicit part of the loop syntax:
      // for(initialize ; test ; increment) statement

  // for/in
    // The for/in statement uses the for keyword, but it is a completely different kind of loop than
    // the regular for loop. A for/in loop looks like this:
      // for (variable in object)
      //   statement

// Jumps
  // Another category of JavaScript statements are jump statements. As the name implies, these cause the
  // JavaScript interpreter to jump to a new location in the source code.

  // Labeled Statements
    // Any statement may be labeled by preceding it with an identifier and a colon:
      // identifier: statement

    // Example:
      mainloop: while(token != null) {
        // Code omitted...
        continue mainloop; // Jump to the next iteration of the named loop
        // More code omitted...
      }

  // break
    // The break statement, used alone, causes the innermost enclosing loop or switch statement to
    // exit immediately. Its syntax is simple:
      break;

    // JavaScript also allows the break keyword to be followed by a statement label (just the
    // identifier, with no colon):
      break labelname;

    // You need the labeled form of the break statement when you want to break out of a
    // statement that is not the nearest enclosing loop or a switch.

  // continue
    // The continue statement is similar to the break statement. Instead of exiting a loop, however,
    // continue restarts a loop at the next iteration. The continue statement’s syntax is just as
    // simple as the break statement’s:
      continue;
    // The continue statement can also be used with a label:
      continue labelname;

  // return
    // A return statement within a function specifies the value of invocations of that function.
    // Here’s the syntax of the return statement:
      return expression;
