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
*/

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