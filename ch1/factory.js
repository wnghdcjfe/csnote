const num = new Object(42)
const str = new Object('abc')
num.constructor.name; // Number
str.constructor.name; // String