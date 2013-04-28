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
  // Assigning values to new indexes will add elements to an array.
    a = [] // Start with an empty array.
    a[0] = "zero"; // And add elements to it.
    a[1] = "one";

  // You can also use the push() method to add one or more values to the end of an array:
    a = []; // Start with an empty array
    a.push("zero") // Add a value at the end. a = ["zero"]
    a.push("one", "two") // Add two more values. a = ["zero", "one", "two"]

  // You can use the unshift() method to insert a value at the beginning of an array,
  // shifting the existing array elements to higher indexes.

  // You can delete array elements with the delete operator, just as you can delete object properties:
    a = [1,2,3];            // a now has no element at index 1
    delete a[1];            // => false: no array index 1 is defined
    1 in a a.length         // => 3: delete does not affect array lengthth

// Iterating Arrays
  // The most common way to loop through the elements of an array is with a for loop:
    var keys = Object.keys(o); // Get an array of property names for object o
    var values = [] // Store matching property values in this array
    for(var i = 0; i < keys.length; i++) { // For each index in the array
      var key = keys[i]; // Get the key at that index
      values[i] = o[key]; // Store the value in the values array
    }

  // Optomized loop where array length is only called once
    for(var i = 0, len = keys.length; i < len; i++) {
      // loop body remains the same
    }

  // If you want to exclude null, undefined, and nonexistent elements, you can write this:
    for(var i = 0; i < a.length; i++) {
      if (!a[i]) continue; // Skip null, undefined, and nonexistent elements
      // loop body here
    }

    for(var i = 0; i < a.length; i++) {
      if (a[i] === undefined) continue; // Skip undefined + nonexistent elements
      // loop body here
    }

    for(var i = 0; i < a.length; i++) {
      if (!(i in a)) continue ; // Skip nonexistent elements
      // loop body here
    }

// Multidimensional Arrays
  // JavaScript does not support true multidimensional arrays, but you can approximate them with arrays of arrays.
  // Access by using [] multiple times

// Array Methods
  // join()
    // The Array.join() method converts all the elements of an array to strings
    // and concatenates them, returning the resulting string.

  // reverse()
    // The Array.reverse() method reverses the order of the elements of an array and returns the reversed array.

  // sort()
    // Array.sort() sorts the elements of an array in place and returns the sorted array.

  // concat()
    // The Array.concat() method creates and returns a new array that contains the elements of the original array
    // on which concat() was invoked, followed by each of the arguments to concat().

  // slice()
    // The Array.slice() method returns a slice, or subarray, of the specified array.

  // splice()
    // The Array.splice() method is a general-purpose method for inserting or removing elements from an array.

  // push() and pop()
    // The push() and pop() methods allow you to work with arrays as if they were stacks.

  // unshift() and shift()
    // The unshift() and shift() methods behave much like push() and pop(), except that they insert and remove
    // elements from the beginning of an array rather than from the end.

  // toString() and toLocaleString()
    // Same as join() method when it is invoked with no arguments.

// ECMAScript 5 Array Methods
  // ECMAScript 5 defines nine new array methods for iterating, mapping, filtering, testing, reducing, and searching arrays.

  // forEach()
    // The forEach() method iterates through an array, invoking a function you specify for each element.

  // map()
    // The map() method passes each element of the array on which it is invoked to the function you specify, and
    // returns an array containing the values returned by that function.

  // filter()
    // The filter() method returns an array containing a subset of the elements of the array on which it is invoked.
    // The function you pass to it should be predicate: a function that returns true or false.

    // Note that filter() skips missing elements in sparse arrays, and that its return value is always dense.
    // To close the gaps in a sparse array, you can do this:
      var dense = sparse.filter(function() { return true; });

    // And to close gaps and remove undefined and null elements you can use filter like this:
      a = a.filter(function(x) { return x !== undefined && x != null; });

  // every() and some()
    // The every() and some() methods are array predicates: they apply a predicate function you specify to the
    // elements of the array, and then return true or false.

    // The every() method is like the mathematical “for all” quantifier ∀: it returns true if and only
    // if your predicate function returns true for all elements in the array

    // The some() method is like the mathematical “there exists” quantifier ∃: it returns true if there exists at
    // least one element in the array for which the predicate returns true, and returns false if and only if the
    // predicate returns false for all elements of the array

    // Note also that by mathematical convention, every() returns true and some returns false when invoked on an empty array.

  // reduce(), reduceRight()
    // The reduce() and reduceRight() methods combine the elements of an array, using the function
    // you specify, to produce a single value.

    // reduceRight() works just like reduce(), except that it processes the array from highest index
    // to lowest (right-to-left), rather than from lowest to highest.

    // Note that neither reduce() nor reduceRight() accepts an optional argument that specifies the this value
    // on which the reduction function is to be invoked. The optional initial value argument takes its place.

  // indexOf() and lastIndexOf()
    // indexOf() and lastIndexOf() search an array for an element with a specified value, and return the index of the first
    // such element found, or –1 if none is found. indexOf() searches the array from beginning to end, and lastIndexOf() searches
    // from end to beginning.

// Array Type
  // The Array.isArray() function can be used to determine if a variable is an array

// Array-Like Objects
  // JavaScript arrays have some special features that other objects do not have:
    // • The length property is automatically updated as new elements are added to the list.
    // • Setting length to a smaller value truncates the array.
    // • Arrays inherit useful methods from Array.prototype.
    // • Arrays have a class attribute of “Array”.

  // The Arguments object is an array-like object.
  // In client-side JavaScript, a number of DOM methods, such as document.getElementsByTagName(), return array-like objects.

// Strings As Arrays
  // In ECMAScript 5 (and in many recent browser implementations—including IE8— prior to
  // ECMAScript 5, strings behave like read-only arrays.

