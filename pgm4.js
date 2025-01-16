//LOOPS
/*
console.log("CHAITHANYA");
console.log("CHAITHANYA");
console.log("CHAITHANYA");
console.log("CHAITHANYA");
console.log("CHAITHANYA");
*/
//Initialisation Stopping condition & Updation
/*
let sum=0;
for(let count=1;count<=5;count++)
{
    sum=sum+count;  
} 
console.log("sum=", sum);
console.log("loop has ended");
*/
/*
for(var i=1;i<=5;i++)
{
    console.log("i=", i);;  
} 

console.log(i);

//while loop
let i=1;
while(i<=5)
{
    console.log("chaii");
    i++;
}

//do-while loop
let i=1;
do{
    console.log("chaii");
    i++;
}while(i<=10);

*/
//for-of loop for strings
/*
let str="chaithanya";

for(let i of str)
{
    console.log("i=",i); //iterator->characters
}
    

let str="chaithanya";

let size=0;
for(let val of str)
{
    console.log("val=",val);
    size++;
}

console.log("string size=",size);
*/

//for-in loop

let student={
    name:"chai",
    age:20,
    cgpa:9.23,
    isPass:true,
};

for(let key in student){
    console.log("key=",key, "value=", student[key]);
}