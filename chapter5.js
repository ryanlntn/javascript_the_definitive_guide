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
