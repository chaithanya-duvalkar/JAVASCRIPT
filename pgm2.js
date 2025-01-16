//data types in JS
//Number, String, Boolean,Undefined,Null,BigInt,Symbol

//primitive(7) 
//number
let age=20;
let price=100;

//string
let fullname="Chaithanya S"

//boolean
isFollow=true;

//undefined
//let x;
let x=null;   //typeof we get as object

//BigInt
let a=BigInt("123");

//symbol
let y=Symbol("hello");

//non-primitive
//objects->colllection of values
const student={
    name:"chaithanya",
    age:20,
    cgpa:9.23,
    isPass:true,
}
//inorder to increment or make changes
student["age"]=student["age"]+1;

student["name"]="CHS";
//error---> const="chaithanya";
//name="chs";
//inorder to access the above
console.log(student["name"]);
console.log(student["age"]);
console.log(student["cgpa"]);

//note:let can be changed...nut not const....
//similarly const obj-> key can be changed