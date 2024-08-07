"use strict";
function greet(firstname) {
    console.log("hello " + firstname);
}
greet("harshit");
function sum(a, b) {
    return a + b;
}
const value = sum(4, 5);
console.log("sum = ", value);
function isadult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
function delayer(fn) {
    setTimeout(fn, 1000);
}
