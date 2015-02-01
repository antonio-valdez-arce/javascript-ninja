/**
 * Legacy code from the book moved here for clarity. Current/inmediate code is in scripts.js
 */

// 3.2.1 Scoping and functions

assert(true, "|----- Before outer ------|");

assert(typeof outer === "function", "outer() is in scope");
assert(typeof inner === "function", "inner() is in scope");
assert(typeof a === "number", "a is in scope");
assert(typeof b === "number", "b is in scope");
assert(typeof c === "number", "c is in scope");

function outer() {

assert(true, "|----- Inside outer, before a ------|");

assert(typeof outer === "function", "outer() is in scope");
assert(typeof inner === "function", "inner() is in scope");
assert(typeof a === "number", "a is in scope");
assert(typeof b === "number", "b is in scope");
assert(typeof c === "number", "c is in scope");

var a = 1;

assert(true, "|----- Inside outer, after a------|");

assert(typeof outer === "function", "outer() is in scope");
assert(typeof inner === "function", "inner() is in scope");
assert(typeof a === "number", "a is in scope");
assert(typeof b === "number", "b is in scope");
assert(typeof c === "number", "c is in scope");

function inner() { console.log("Hello"); }

var b = 2;

assert(true, "|----- Inside outer, after inner and b------|");

assert(typeof outer === "function", "outer() is in scope");
assert(typeof inner === "function", "inner() is in scope");
assert(typeof a === "number", "a is in scope");
assert(typeof b === "number", "b is in scope");
assert(typeof c === "number", "c is in scope");

if(a == 1) {
	var c = 3;

	assert(true, "|----- Inside outer, inside if ------|");

	assert(typeof outer === "function", "outer() is in scope");
	assert(typeof inner === "function", "inner() is in scope");
	assert(typeof a === "number", "a is in scope");
	assert(typeof b === "number", "b is in scope");
	assert(typeof c === "number", "c is in scope");
}

assert(true, "|----- Inside outer, after if ------|");

assert(typeof outer === "function", "outer() is in scope");
assert(typeof inner === "function", "inner() is in scope");
assert(typeof a === "number", "a is in scope");
assert(typeof b === "number", "b is in scope");
assert(typeof c === "number", "c is in scope");
}

outer();

assert(true, "|----- Inside outer, after outer ------|");

assert(typeof outer === "function", "outer() is in scope");
assert(typeof inner === "function", "inner() is in scope");
assert(typeof a === "number", "a is in scope");
assert(typeof b === "number", "b is in scope");
assert(typeof c === "number", "c is in scope");


// 3.3.1 From arguments to function parameters

function whatever(a, b, c) {
	console.log( a + " " + b + " " + c );
	console.log(this);
	console.log(arguments);
}

whatever(1,2,3,4,5);
whatever(1);