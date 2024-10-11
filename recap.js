/***************************
      var | const | let
 ***************************/

// variable decalre with var keyword
var myName = "Rakib";
console.log(myName);

var myName = "hossain"; // we can redeclare and reassign in same variable name
console.log(myName);

// varible decalre with let keyword
let carName = "Toyota";
console.log(carName);

// let carName = "BMW"; // we can't redeclare same variable name
// console.log(carName); // it give error

carName = "BMW"; // but we can reassign same variable name
console.log(carName);

// varible decalre with const keyword
const pi = 3.1416; // In const we can't redeclare and reassign value in same variable name
// const pi = 3.142;
// console.log(pi); // it give error

/*
Difference between let const & var 

let
1. Block Scope
2. Can reassign value        
3. Cann't redeclare value    
4. let is hosted but not initialized

const 
1. Block Scope
2. Cann't reassign value  
3. Cann't redeclare value
4. const is not hosted

var
1. Global Scope
2. Can reassign value 
3. Can't redeclare value
4. var is hosted
*/

/***************************
   Datatypes
 ***************************/
//    JavaScript has 8 Datatypes

//    1. String
const cName = "Bangladesh";
console.log(typeof cName); //typeof operator used to know about data types
//    2. Number
let a = 5.6;
console.log(typeof a);
//    3. Bigint
let x = BigInt(12032558996);
console.log(typeof x);
//    4. Boolean -> returns true or false
let yes = true;
console.log(typeof yes);
//    5. Undefined
let b;
console.log(typeof b);
//    6. Null
let cv = null;
console.log(typeof cv);

//    7. Symbol -> using to define uniqe value
const value1 = Symbol("hello");
console.log(typeof value1);

//    Object
const simArr = [1, 3, 5, 6];
console.log(typeof simArr);

const details = {
  name: "rakib",
  age: 27,
};
console.log(typeof details);

/***************************
  Datatype Conversion
 ***************************/
// IF we want to convert any datatype to Number we use Number();
const z = "33"; // it is string
const newZ = Number(z);
console.log(typeof newZ);
//We also convert a string number into integer value using parseInt() methods
const vi = "56.6";
const newVi = parseInt(vi);
const typeNewVi = typeof newVi;
console.table([newVi, typeNewVi]);

//We also convert a string number into float value using parseFloat() methods
const vii = "567";
const newVii = parseFloat(vii);
const typeNewVii = typeof newVii;
console.log(newVii, typeNewVii);

// We can convert anything to number but if it is not a number number return NaN which data type also number. If we convert boolean value for true it return 1 and for false it return 0;
const ng = true;
const numBol = Number(ng);
console.log(numBol);
console.log(typeof numBol);

//IF we want to convert any datatype to Boolean we use Boolean();
const zc = 1;
const newZc = Boolean(zc);
console.log(newZc);
console.log(typeof newZc);

// We know boolean return ture or false. We can convert anything to Boolean, if variable have value it return true or if variable have null value it reuturn false. There are also some falsey value . When we assign this value it reutrns always flase .
const ngv = NaN; //NaN //""; //undfined//-0//0//false; //null all are falsy value;
const numBoll = Boolean(ngv);
console.log(numBoll);
console.log(typeof numBoll);

// IF we want to convert any datatype to string we use String();
const zi = 258;
const newZi = String(zi);
console.log(typeof newZi);

const zii = true;
const newZii = String(zii);
console.log(newZii);
console.log(typeof newZii);

// we also use toString() method to convert anything in string
const ci = 324;
const newCi = ci.toString();
const typeNewCi = typeof newCi;
console.log(newCi, typeNewCi);
