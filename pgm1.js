console.log("hello chai");
console.log("Welcome To Chai Website Page");

fullname="chaithanya";
console.log("fullname");
console.log(fullname);
age=20;
price=99.99;
console.log(age);
console.log("age");
x=null; 
y=undefined;
isFollow=true; //false
console.log(isFollow);
fullname=25;
console.log(fullname);

//variable rules
//1. case-sensitive
fullname="chaithanya S";
FULLNAME="Chaithanaya Saralimoole";
console.log(fullname);
console.log(FULLNAME);
/*
//2.no space in between
full name="chai";    //error
fullname@-"chaithu";
console.log(fullname);  

//3. valid first letter 
fullname="chaithanya S";
_fullname="chai";
$fullname="chaithanya ";
123fullname="chs"; //error*/

//4. reserved words
Console="chayii";
console.log(Console);
/*console="chayii";
console.log(console);*/

//use of let--->can't be redeclared
let fullName="chayiii";
let ag=20;
let totalPrice=9;
console.log(fullName);
console.log(ag);
console.log(totalPrice);

//use of var--->can be redeclared
var age=20;
var age=30;
var age=10;
console.log(age);

//use of const 
const a=20;
console.log(a);   //we can't write const a; instead we have to declare const=2;
const PI=3.14;
console.log(PI);
/*const age=20;
var age=10;    //error
console.log(age);*/
