// Chapter 6
// Objects

// JavaScript’s fundamental datatype is the object.

// Creating Objects
  // Objects can be created with object literals, with the new keyword, and with the Object.create() function.
  var obj = {}; // an object literal
  var withProperties = { x: 1, y: 2 }; // an object literal with properties
  var o = new Object(); // create an empty object. same as {} except using the Object constructor
  var a = new Array();  // create an empty array. same as [] except using the Array constructor
  var d = new Date();   // create a date object representing the current time with the Date constructor
  var r = new RegExp("js"); // create a regular expression object for pattern searching with the RegExp constructor
  var o1 = Object.create({x:1, y:2}); // o1 inherits properties x and y.
  var o2 = Object.create(null); // o2 inherits no props or methods.
  var o3 = Object.create(Object.prototype); // o3 is like {} or new Object().
