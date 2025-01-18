//strings     //length of the string-->str.length

/*
let str="chaithanya";
let str2='chaii';

console.log(str[0]);
console.log(str2[4]);  //access index

*/

/*
let obj={
    item:"pen",
    price:10,
};

console.log("The cost of", obj.item, "is", obj.price, "rupees");
*/
//Instead above string usage below is used

//template literals 
//string interpolation--->`string text ${expression} string text`
                                         //variable
/*
let specialString=`this is a template literals`;
console.log(typeof specialString);
console.log(specialString);


let obj={
    item:"pen",
    price:10,
};

let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//specialString
let specialString=`this is a template literals ${1+6+2}`;
console.log(typeof specialString);
console.log(specialString);


//escape characters
console.log("chaii\nthanya");
console.log("chaii\tthanya");
let str="Apna\tCollege"; //12
console.log(str.length);
*/

//string methods-->str.toUpperCase(), str.toLowerCase(), str.trim( )//removes whitespace
/*
let str="chaii";
let newstr=str.toUpperCase();
console.log(str);
console.log(newstr);

let str2="CHAII";
let newstr2=str.toLowerCase();
console.log(str2);
console.log(newstr2);

let str3="   chai  than   ya   ";  //removes starting and ending white spaces not in between spaces
console.log(str3.trim());


//str.slice(start,end?)-->returns part of a string
let str="9035793924";
console.log(str.slice(1,6));
console.log(str.slice(2));

// str1.concat(str2)-->joins str2 with str1
let str1="apna";
let str2="college";

let res="I am learning coding from " +str1.concat(str2);
console.log(res);

//str.replace(searchVal,newVal)
let str3="hello";
console.log(str3.replace("h","f"));
console.log(str3.replace("lo","p"));

//str.charAt(idx)
let str4="I LOVE DSA";
console.log(str4.charAt(2));
*/

//Arrays->collection of items-->linear-->behave as objects in js
/*
let marks={
    s1:97,              //instead this we use below syntax
    s2:50,
};
console.log(marks[s1]);

//
let marks=[97,82,75,69,35];
console.log(marks);
console.log(marks.length);  //property

let gods=["ajja","ganesha","hanumantha","venkatramana","kalurti"];
console.log(gods);


//array indices
let marks=[97,82,75,69,35];
console.log(marks);
console.log(marks.length);


//in google type->marks[0]marks[1] etc...
//we can access the marks as mentioned above
//and also we can change the marks in google tool itself

//arrays are mutable->hence they can be changed
//strings are immutable-> so they can't be changed in google tool

//looping over an array-->print all elements of an array
//loops are iterable-->(strings,objects,arrays)

let gods=["ajja","ganesha","hanumantha","venkatramana","kalurti"];
//for loop
for(let i=0;i<gods.length;i++)
{
    console.log(gods[i]);
}

//for of
for(let god of gods)
{
    console.log(god);
}

let cities=["mittur","bantwal","puttur","mangalore"];

for(let city of cities)
{
    console.log(city.toUpperCase());
}

*/

//array methods
//Push():add to end
//pop():delete from end & return
//toString():converts array to string
//concat():joins multiple arrays and returns result
//unshift():add to start
//shift:delete from start and return
//slice();return a piece of the array
//splice():change original array(add,remove,replace)



//functions in js
/*
function myFunction()
{
    console.log("welcome..!");
    console.log("I'm learning JS:)");
}

myFunction();   //invokes the function()
//myFunction();   //calling function again and again by repeating or redundancy

//inorder to overcome the redundancy or repeatation of the function call()

function myFunction(msg){
    //parameter->input
    console.log(msg);
}

myFunction("I love JS:)");  //argument


//function->2 numbers,sum

function sum(x,y){
    console.log(x+y);
}
//output obtained in the code tool by typing sum(x,y); x&y are variables

//returns the sum as
function sum(x,y){
    s=x+y;
    return s;    //statement or code written after the return statement is not executed
}
let val=sum(3,6);
console.log(val);

//function parameters are like local variables of function
//and they remain alive within the block (block scope)

//multiplicationfunction
function mul(x,y){
    return x*y;
}

*/

//arrow functions-->compact way of writing a function
/* syntax
const functionName=(param1,param2,..)=>{
    //code
}
    
//sumfunction   
const x=9;                //for output print=>arrowSum(a,b) in terminal
const arrowSum=(a,b)=>{
    console.log(a+b);
}

//multiplicationfunction
const arrowMul=(a,b)=>{        //for output print=>arrowMul(a,b) in terminal
    return a*b;
}

const printHello=()=>{        //for output print=>printHello() in terminal
    console.log("HELLO");
}
*/
