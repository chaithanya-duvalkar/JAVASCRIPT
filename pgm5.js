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
*/

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