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

let gameno=25;
let userno=prompt("guess the game number");

while(userno != gameno)
{
  userno=prompt("you entered wrong no, guess again:");
}

console.log("right No.");