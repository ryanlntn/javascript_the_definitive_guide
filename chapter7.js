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
  // A sparse array is one in which the elements do not have contiguous indexes starting at 0.
    a = new Array(5); // No elements, but a.length is 5.
    a = [];           // Create an array with no elements and length = 0.
    a[1000] = 0;      // Assignment adds one element but sets length to 1001.

  // Note that when you omit value in an array literal, you are not creating a sparse array.
  // The omitted element exists in the array and has the value undefined.
    var a1 = [,,,];   // This array is [undefined, undefined, undefined] var a2 = new Array(3); // This array has no values at all
    0 in a1           // => true: a1 has an element with index 0
    0 in a2           // => false: a2 has no element with index 0

// Array Length
  // Every array has a length property, and it is this property that makes arrays different from regular JavaScript objects.
    [].length             // => 0: the array has no elements
    ['a','b','c'].length // => 3: highest index is 2, length is 3

  // You can remove elements from the end of an array by setting the length.
    a = [1,2,3,4,5]; // Start with a 5-element array.
    a.length = 3;    // a is now [1,2,3].
    a.length = 0;    // Delete all elements. a is [].
    a.length = 5;    // Length is 5, but no elements, like new Array(5)

// Adding and Deleting Array Elements
