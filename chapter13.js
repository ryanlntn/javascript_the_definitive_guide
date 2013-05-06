// Chapter 13
// JavaScript in Web Browsers

// One of the most important properties of the Window object is document:
// it refers to a Document object that represents the content displayed in the window.

// One of the most important event handlers is the onload handler of the Window object.
// It is triggered when the content of the document displayed in the window is stable and ready to be manipulated.

// The use of HTML event handler attributes is considered poor style by many web
// developers who prefer to keep content and behavior separate.

// There is no formal definition of a program in client-side JavaScript.

// The core JavaScript language does not contain any threading mechanism, and client-side JavaScript has
// traditionally not defined any either. HTML5 defines “WebWorkers” which serve as a kind of a background
// thread (more on web workers follows), but client-side JavaScript still behaves as if it is strictly
// single-threaded. Even when concurrent execution is possible, client-side JavaScript cannot ever detect
// the fact that it is occurring.

// IE sucks. You can use conditional comments to make it suck less like this:
  /*@cc_on
    @if (@_jscript)
      // This code is inside a conditional comment, which is also a
      // regular JavaScript comment. IE runs it but other browsers ignore it. alert('You are using Internet Explorer);
    @else*/
      // This code is no longer inside a JavaScript comment, but is still // inside the IE conditional comment. This means that all browsers // except IE will run this code.
      alert('You are not using Internet Explorer');
    /*@end @*/

// Security
  // Web browsers’ first line of defense against malicious code is that they simply do not support certain capabilities.