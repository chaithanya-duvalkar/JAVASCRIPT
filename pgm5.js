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
*/

let specialString=`this is a template literals ${1+6+2}`;
console.log(typeof specialString);
console.log(specialString);
