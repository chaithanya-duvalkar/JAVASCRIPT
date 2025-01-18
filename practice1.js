/*const product={
    title:"Ball Pen",
    rating:4,
    offer:5,
    price:270
};

console.log(product);


//practice2
const profile={
    username:"@Chaithanya",
    isFollow:false,
    followers:999,
    following:991
};

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["username"]);
console.log(typeof profile["isFollow"]);
console.log(typeof profile["followers"]);
console.log(typeof profile["following"]);
*/

//practice questions
/*let name=prompt("hello");       //propmt->takes input from the user
console.log(name);*/

//1->get user to input a no. using prompt("enter a no."). Check if the number is a multiple of 5 or not.
/*
let num=prompt("Enter a number");       //propmt->takes input from the user
console.log(num);

if(num%5===0)
{
    console.log("number is a multiple of 5");
}
else
{
    console.log("number is not a multiple of 5");
}
*/

/*
//2->write a code which can give grades to students according to their scores.

//let score=90;
//console.log(score);
//let grade;

let score=prompt("Enter your score");
console.log(score);
let grade;

if(score>=80&&score<=100)
    grade="A";
else if(score>=70&&score<=89)
    grade="B";
else if(score>=60&&score<=69)
    grade="C";
else if(score>=50&&score<=59)
    grade="D";
else
    grade="F";

console.log("Your grade is", grade);

*/

//1->Print all numbers from 0 to 100
/*
let sum=1;
console.log("numbers are:\n");
for(i=1;i<=100;i++)
{
    console.log(sum);
    sum=sum+1;
}
    
*/
//1->Print all even numbers from 0 to 100
/*
let sum=0;
console.log("numbers are:\n");
for(i=2;i<=100;i+2)
{
    if(i%2===0)
    {
        console.log(i);
    }
}
*/

//2->create a game where you start with any random game number. Ask user to keep guessing the game no. until the user enters correct value
/*
let gameno=25;
let userno=prompt("guess the game number");

while(userno != gameno)
{
  userno=prompt("you entered wrong no, guess again:");
}

console.log("right No.");


//strings
//p1--> prompt the user to enter their full name.

let fullname=prompt("Enter your full name without spaces");
console.log(fullname);
let username="@"+fullname+fullname.length;
console.log(username);
*/

//arrays practice
//q1-->
let marks=[85,97,44,37,76,60];
let sum=0;
/*
for(i=0;i<marks.length;i++)
{
   sum=sum+marks[i];
}
let avgM=sum/6;
console.log("avreage marks of the entire class:",avgM);


//or we can use for of loop

for(let val of marks)
{
    sum+=val;
}
let avg=sum/marks.length;
console.log(`avg marks of the class=${avg}`);
*/

//q2-->
//we can see offer applied new array in the google tool
let prices=[250,645,300,900,50];
/*
let i=0;

for(let val of prices)
{
   console.log(`value of index ${i}=${val}`);
   let offer=val/10;
   prices[i]=prices[i]-offer;
   console.log(`value after applying offer =${prices[i]}`);
   i++;
}

//or we can use for loop
let val;
for(let i=0;i<prices.length;i++)
{
   console.log("value of prices=",prices[i]);
   let offer=prices[i]/10;
   prices[i]=prices[i]-offer;
   console.log("value after applying offer =",prices[i]);
}
   */
/*
  //array methods
  //q1->
  
  let companies=["BMW","Microsoft","Uber","Google","IBM","Netflix"];
  console.log(companies);
  //remove the first company from the array
  //companies.shift();

  //remove uber & add ola in its place
//companies.splice(2,1,"Ola");

//add amazon at end
companies.push("Amazon");
*/

/*
//function in js
//q1->

function countVowels(str){
    let count=0;
    for(const char of str)
        {
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
            {
            count++;
        }
    }
    console.log(count);
}


//same using arrowfunction
const countVowels=(str)=>{
    let count=0;
    for(const char of str)
        {
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
            {
            count++;
        }
    }
    console.log(count);
}
*/



//filter array methods
//qn1->
/*
let array=[87,93,64,99,86,95,97];

let score=array.filter((val)=>{
 //   if(val>90)
 //   {
 //       console.log(val);
 //   }
   //or
   return val>90;  //returns the array 
});

console.log(score);



//qn2->
let n=prompt("Enter N:");

let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;  //1(0),2(1),3(2).....
}

console.log(arr);

//sum of the array elements
let arrSum=arr.reduce((prev,curr)=>{
    return prev+curr;
});

console.log("sum=",arrSum);

//multiplication of array elements
let arrMul=arr.reduce((prev,curr)=>{
    return prev*curr;
});

console.log("product=",arrMul);

*/