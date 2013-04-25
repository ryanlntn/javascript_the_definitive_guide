// Chapter 7
// Arrays

// An array is an ordered collection of values.

// Creating Arrays
  // The easiest way to create an array is with an array literal, which is simply a comma
  // separated list of array elements within square brackets. For example:
    var empty = []; // An array with no elements
    var primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
    var misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma
    var base = 1024;
    var table = [base, base+1, base+2, base+3]; // Arrays can contain arbitrary expressions
    var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];  // Array can also contain objects
    var count = [1,,3]; // An array with 3 elements, the middle one undefined.
    var undefs = [,,]; // An array with 2 elements, both undefined.
  // Or use the Array constructor:
    var a = new Array(); // create an empty array
    var a = new Array(10); // create an array with 10 undefined elements
    var a = new Array(5, 4, 3, 2, 1, "testing, testing"); // or specify the elements if there are two or more

// Reading and Writing Array Elements
  // You access an element of an array using the [] operator.
    var a = ["world"];
    var value = a[0]; // access the 0th element of the array
    a[1] = 3.14;
    i = 2;
    a[i] = 3; // write element 2 of the array
    a[i + 1] = "hello"; // write element 3
    a[a[i]] = a[0]; // Read elements 0 and 2, write element 3

// Sparse Arrays
