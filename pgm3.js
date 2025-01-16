//arithmetic operations
/*
let a=6;
let b=2;

console.log("a =",a,"& b =",b);
console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a * b=",a*b);
console.log("a / b=",a/b);
console.log("a % b=",a%b);
console.log("a ** b=",a**b);  //6^2
*/


//unary operator
/*
let a=6;
let b=2;

console.log("a =",a,"& b =",b);

console.log("a++ =",a++);
console.log("a =",a);

console.log("a-- =",a--);
console.log("a =",a);

console.log("++a =",++a);
console.log("a =",a);

console.log("--a =",--a);
console.log("a =",a);
*/


//assignment opeartors
/*
let a=5;
let b=2;

a += 4;
console.log("a =",a);

a -= 4;
console.log("a =",a);

a *= 4;
console.log("a =",a);

a /= 4;
console.log("a =",a);

a **= 4;  //a = a**4;
console.log("a =",a);

*/


//comparison operators

//equalto & notequalto
/*
let a=5;
let b=2;

console.log("5 == 2",a == b);  //false
console.log("5 == 5",a == a);  //true
console.log("5 != 5",a != a);  //false
console.log("5 != 2",a != b);   //true

//equalto & type   notequalto & type
let x=4;  //number
let y="2";  //string->number

console.log("a === b",a === b);  //false
console.log("a !==b",a !== b);   //true

console.log("a < b",a < b);  //false
console.log("a > b",a > b);  //true

*/
/*
//logical operators
let c=9;
let d=3;

let cond1= c > d;
let cond2= c === 9;
console.log("cond1 && cond2 =",cond1 && cond2);  //true

console.log("cond3 && cond4 =",c < d && c === 3);  //false
*/

//conditional operators
//if-else statement
/*
let mode="light";
let color;

if(mode=="dark")
{
    color="black"
}
else
{
    color="white";
}

console.log(color);


let age=16;
if(age>=18)
{
    console.log("vote");
}
else{
    console.log("not vote");
}

///odd or even
let num=9;
if(num%2==0)
    console.log(num, "is even");
else
    console.log(num,"is odd");
*/

//else-f statements
/*
let age=20;
if(age<18)
    console.log("junior");
else if(age>60)
    console.log("senior");
else
     console.log("middle");     


let mode="dark";
let color;

if(mode=="dark")
    color="black";
else if(mode=="blue")
    color="blue";
else if(mode=="pink")
    color="pink";
else
    color="white";

console.log(color);    

if(mode=="dark")
{
    console.log(mode);
}


//ternary operator
let age=25;
age>=18? "adult":"not adult";
//age>=18? console.log("adult"):console.log("not adult");
*/