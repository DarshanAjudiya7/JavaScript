/*

⭐ What is the Call Stack?
--> The Call Stack is a data structure used by the JavaScript engine to keep track of the order in which functions are executed.

Think of it like a pile of plates:
--> The last plate you put on top is the first one you remove.
--> This is called LIFO (Last In, First Out).

JavaScript is single-threaded, meaning:
--> It has one call stack
--> It executes one function at a time

⭐ Execution Context & Call Stack...

Whenever JavaScript runs your program:
1. It creates a Global Execution Context (GEC) and pushes it into the call stack.
2. Every time a function is called, a Function Execution Context (FEC) is created.
3. The FEC is pushed into the call stack.
4. When the function finishes, the context is popped from the stack.

⭐ Why is Call Stack Important?
✔ Understand how JS executes code

Helps you know why functions run in a particular order.

✔ Debugging errors
Example: "Maximum call stack size exceeded"
Occurs when the stack overflows due to infinite recursion.

⭐ Call Stack + Asynchronous JavaScript

JavaScript is single-threaded but works with:
Web APIs
Callback Queue
Event Loop

When async functions (like setTimeout, fetch) are called:
--> They DO NOT block the call stack.
--> They are handled by Web APIs.
--> After completion, their callbacks wait in the callback queue.
--> The event loop pushes them into the call stack only when the stack is empty.

*/



