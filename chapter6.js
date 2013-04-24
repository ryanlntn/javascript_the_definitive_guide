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

// Querying and Setting Properties
  // You can use dot notation
    o1.x;
  // Or bracket notation
    o1['x']
  // Bracket notation is more flexible since it uses strings instead of identifiers
  // making it safe to use for letting users dynamically add properties at runtime

  // Objects inherit properties from their prototypes
    var o = {}            // o inherits object methods from Object.prototype
    o.x = 1;              // and has an own property x.
    var p = inherit(o);   // p inherits properties from o and Object.prototype
    p.y = 2;              // and has an own property y.
    var q = inherit(p);   // q inherits properties from p, o, and Object.prototype
    q.z = 3;              // and has an own property z.
    var s = q.toString(); // toString is inherited from Object.prototype
    q.x + q.y             // => 3: x and y are inherited from o and p

  // Querying a property that doesn't exist will simply return undefined
    o.subtitle; // => undefined: property doesn't exist

  // Querying an object that doesn't exist will throw a type error
  // To guard against this problem:
    // A verbose and explicit technique var len = undefined;
      if (book) {
        if (book.subtitle)
          len = book.subtitle.length;
      }
    // A concise and idiomatic alternative to get subtitle length or undefined
      var len = book && book.subtitle && book.subtitle.length;

  // In strict mode, any failed attempt to set a property throws a TypeError exception.

  // Property assignment will fail if:
    // • o has an own property p that is read-only: it is not possible to set read-only properties.
    //   (See the defineProperty() method, however, for an exception that allows configurable read-only properties to be set.)
    // • o has an inherited property p that is read-only: it is not possible to hide an inherited read-only property
    //   with an own property of the same name.
    // • o does not have an own property p; o does not inherit a property p with a setter method, and o’s
    //   extensible attribute is false. If p does not already exist on o, and if there is no setter method
    //   to call, then p must be added to o. But if o is not extensible, then no new properties can be defined on it.

// Deleting Properties
  // In strict mode delete raises a SyntaxError if its operand is an unqualified identifier like x,
  // and you have to be explicit about the property access:
    delete x; // SyntaxError in strict mode
    delete this.x; // This works

// Testing Properties
  // You can test for membership of a property within an object with the in operator,
  // the hasOwnProperty() and propertyIsEnumerable() methods, or simply by querying the property.

    // in operator
      var o = { x: 1 }
      "x" in o; // true: o has an own property "x"
      "y" in o; // false: o doesn't have a property "y"
      "toString" in o; // true: o inherits a toString property

    // hasOwnProperty()
      var o = { x: 1 }
      o.hasOwnProperty("x"); // true: o has an own property x
      o.hasOwnProperty("y"); // false: o doesn't have a property y
      o.hasOwnProperty("toString"); // false: toString is an inherited property

    // propertyIsEnumerable()
      var o = inherit({ y: 2 });
      o.x = 1;
      o.propertyIsEnumerable("x"); // true: o has an own enumerable property x
      o.propertyIsEnumerable("y"); // false: y is inherited, not own
      Object.prototype.propertyIsEnumerable("toString"); // false: not enumerable

    // Instead of using the in operator it is often sufficient to simply query the property
    // and use !== to make sure it is not undefined:
      var o = { x: 1 }
      o.x !== undefined; // true: o has a property x

// Enumerating Properties