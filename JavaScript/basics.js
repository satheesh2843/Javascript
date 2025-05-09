console.log("hello world")
// console.log() -->this line use to print in console

// we can u use variable in js --> variable = 10
value=10
console.log(value)

//  "let" -->  this is a keyword to declare a variable any data type
let p=5;
let names="satheesh"

console.log(names)

// "const" --> this keyword work  like a constant value . once declared we can't change the value
const constantvalue=3.14
console.log(constantvalue)


/*
 data type
 it can be classified into two types
  * primitive --> number, string , boolean, null, undefined  , symbols
  * object
*/

// "typeof" --> this keyword used to print the datatype of the variable
console.log(typeof names)

// we can also user underscore in the number to separte the integer to indentify

let a=100_00_000
console.log(a)

// when we are using an max value in integer it may not be possible
//  if we put last "n" variable it becames an --> biginteger
let maxvalue=12345352345234123132324324123124234324123312332n
console.log(maxvalue)

// NaN --> not a Number
// datatype conversion string to number..
// if invalid conversion it appension in number it shows NaN
let num="123"
console.log(Number(num))

/* "parseInt" this keyword help to convert the first numberstring to number
for an examples parseInt("123asd")
it  shows o/p of 123.
*/
let parse=parseInt("12354asd")
console.log(parse)

/*
    == --> it compare value only not an datatype. if comparnig an "3" and 3 it gives an true
    === --> it compare value and datatype of an value. if we compare to "3" and 3 it gives an false. because same value but difernet datatype.
*/

console.log("3"==3)
console.log("3"===3)


/*
bitwise operators
    --> "." AND operator
    --> "+" OR operator
    --> ~ NOT operator

logical operators
    --> "&&" ___AND
    --> "||" __OR
    --> "!" ___NOT
*/ 
/*
loops in js
    --> for
    --> while
    --> do while
*/


/*
creating an object in javascript
    let object1={ } --> this is an creating an new object in java script
    let object2={
        name: "satheesh"
        tech : "java"
    }
*/
let obj={
    name:"satheesh",
    tech:"java",
    'two words' : 2
}
// two ways to fetch data in objects.
console.log (obj)
console.log(obj.tech);
console.log(obj['name']);

/*
creating nested object
let object2={
        name: "satheesh"
        tech : "java"
        mark={
            tamil:7
            english:8
            maths:10
        }
    }
*/

let obj1={
    name: "satheesh",
    tech : "java",
    mark:{
        tamil:7,
        english:8,
        maths:10
    }
}
console.log(obj1)
console.log(obj1.mark.maths)

// finding an length of the object 
console.log(obj1.name.length)

// we can also delete an keywords in object byh using an "delete" keyword

console.log(obj);
console.log("after delection")
delete obj.name
console.log(obj)

// printing the object values by using an loops 
console.log("---------------------")
// this "for in" loop it's an special loop
for(let key in obj1)
    console.log(key)


/*

function 
    --> we can use function in javascript by using an "function" keyword

    function funname(){ }
*/

console.log("------------------")
console.log("using an function")
function one(){
    console.log("hello")
}

one();


console.log("------------------")


