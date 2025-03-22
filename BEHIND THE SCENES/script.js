'use strict';

/*
//SCOPING CONCEPT


function calcAge(birthYear){
    const age=2025-birthYear;
   // console.log(firstName);   //if i write lastName then i get error
    
   function printAge() {
    let output=`${firstName},You are ${age}, born in ${birthYear}`;
    console.log(output);


    if(birthYear>=1996 && birthYear<=2005){

        var millenial=true;
        //creating NEW variable with same name as outer scope's variable
        const firstName='duvalkar';

        //Reassigning outer scope's variable
        output=`NEW OUTPUT!`;

        const str=`oh, and you're a millenial,${firstName}`;
        console.log(str);

        function add(a,b){
            return a+b;
        }
    }

   // console.log(str); //this gives error as str is defined inside block scope(let & const are block scope)
   console.log(millenial);  //we get the output bcz var is not block scope
   
  // add(2,3);//error as the add function is block scope...defined only inside the block scope

  //when use strict is commented, we get output as 5..but we can't comment out use strict
  //console.log(add(2,3));
 
  console.log(output);
}
   
   printAge();

   return age;
}

const firstName='chai';
calcAge(2004);

//age and printAge() both are out-of scope no access to other scope
//console.log(age); //only inner scope have access to outer scope not vice versa
//printAge(); //in global scope we don't have any variables defined in any other scope


*/


/*

//HOISTING AND TDZ PRACTICE


//
//TEMPORAL DEAD ZONE, LET AND CONST

const myName='chai';

if(myName === 'chai')
{
//temporal dead zone
console.log(`chai is a ${job}`); //ReferenceError:can't access 'job' before initialization
const age=2037-1989;
console.log(age);
//

const job='engineer';
console.log(x); //ReferenceError: x is not defined
}



why TDZ?
->Makes it easier to avoid and catch errors
->Makes const variables actually work

why HOISTING?
->Using functions before actual declaration
->var hoisting is just a byproduct
//

//variables

console.log(me);
//console.log(job);
//console.log(year);

var me='chai';
let job='engineer';
const year='2026';


//Functions

//only function is executed before the initialisation
console.log(addDecl(6,3));//we get output

//error TDZ bcz initialised using const
//console.log(addExpr(6,3));  
console.log(addArrow);
//console.log(addArrow(6,3)); 

function addDecl(a,b){
    return a+b;
}

//ReferenceError:can't access 'addExpr' before initialisation 
const addExpr=function(a,b){
    return a+b;
}
//
//if i initialise using var then i get error as addExpr is not a function
//var addExpr=function(a,b){
//    return a+b;
//}
//

//ReferenceError:can't access 'addArrow' before initialisation 
//const addArrow=(a,b) => a+b;
//
//if i initialise using var then i get error as addArrow is not a function
//var addArrow=(a,b) => a+b;
//


//EXAMPLE

if(!numProducts) deleteShoppingCart();
//bcz of hoisting we get output as 'All products deleted' though numProducts=10
var numProducts=10;

function deleteShoppingCart(){
    console.log(`All products deleted`);
}


//CONCLUSION:best practice is to use const than var and initialise the values before its usage

var x=1; //unit of window object as it is declared using var (window.x=1)
let y=2;
const z=3;

console.log(x === window.x); //it is a unit of window object
console.log(x === window.y);
console.log(x === window.z);

*/

/*

//THIS KEYOWRD

console.log(this); //globally 'this' keyword is the window object

const calcAge=function(birthYear){
    console.log(2025-birthYear);  //output:21
    console.log(this); //output:undefined  (bcz this function has its own this keyword)
};

calcAge(2004);  //output:undefined as executing in strict mode but in slopy mode we get output as 21

const calcAgeArrow=birthYear=>{
    console.log(2025-birthYear);  //output:25
    console.log(this);   //output:window object   (bcz here arrow function points to parent this keyword i.e, global declaration of this keyword)
};
calcAgeArrow(2000);  //output:window object

//when we have method called this keyword inside of the method will be the object i.e, calling the method
const chai={   
    year:2004,
    calcAge:function(){
        console.log(this);   //this keyword points to chukki though it is not written inside the chai object
        console.log(2025-this.year);
    }
};
chai.calcAge();  //output:21
//here chai is the owner of the method


//EXAMPLE
 const chukki={
    year:2023,
 };

 chukki.calcAge = chai.calcAge; //method borrowing ==>output:21
 chukki.calcAge(); //output:2

 //this keyword is dynamic, it depends on how function is called

 const f=chai.calcAge;  //output:undefined
 f(); //output:error caught can't read properties of undefined(reading 'year') at calcAge
 //this happens bcz f() is a regular function call, it is not attaced to any object and it has no owner of this f() fn.
 

*/


/*
//REGULAR FUNCTIONS VS. ARROW FUNCTIONS

//var firstName='chukki';

const chai={  
    firstName:'Chai', 
    year:2004,
//regular function
    calcAge:function(){
     //   console.log(this);   //this keyword points to chukki though it is not written inside the chai object
        console.log(2025-this.year);

//SOLUTION 1
//        const self=this;  //self or that
//        const isMillenial=function(){
//            console.log(self);  
//            console.log(self.year>=2000 && self.year<=2008);
          //  console.log(this.year>=2000 && this.year<=2008);
//        };
//        isMillenial();
//    },

//SOLUTION 2
//here arrow function inherits this keyword from parent scope
//hence we get output as true instead undefined
        const isMillenial=()=>{
            console.log(this);
            console.log(this.year>=2000 && this.year<=2008);
        };
        isMillenial(); 
    },    


//arrow function
//   greet: ()=>{
//       console.log(this);  //window object firstName:"chukki" created bcz we have used var
//       console.log(`Hey ${this.firstName}`)
//    },
//

//arrow function converted into regular function
    greet:function(){
        console.log(this);  //window object firstName:"chukki" created bcz we have used var
        console.log(`Hey ${this.firstName}`)
    },

};
chai.greet();  //output: Hey undefined but output:chukki when var is used globally
//this is bcz arrow function don't have its own this function it acces from parent i.e.,global scope

//console.log(this.firstName);  //output:undefined but output:chukki when var is used globally

chai.calcAge(); 

//CONCLUSION
//use of var and arrow function simply create the bug in the program which is difficult to find
//hence we should avoid use of arrow function and var instead use regular function and const..

//USE OF MILLENIAL FUNCTION
//inside a regular method this is undefined
//this can be resolved or preserved by using self or that
//another solution is use of arrow function


//arguments keyword
const addExpr=function(a,b){
    console.log(arguments);
    return a+b;
};
addExpr(2,5);
addExpr(2,5,3,7);

var addArrow=(a,b)=>{
    console.log(arguments);
    return a+b;
};
addArrow(2,3,4); //error:argument is not defined at addArrow

//multiple argumnets keyword exist in regular functions but not in arrow function 

*/


//PRIMITIVE VS OBJECTS(PRIMITIVE VS REFERENCE TYPES)
 
//primitive values
//access from CALL STACK
let age=21;
let oldage=age;
age=22;
console.log(age); //output:22
console.log(oldage); //output:21

const me={
    name:'chai',
    age:21,
};

//reference values
//access from HEAP
const friend=me;
friend.age=22;  //only age is changed
console.log(`Friend`,friend); 
//output:Friend{name:'chai,age:22}

console.log(`Me`,me); 
//output:Me{name:'chai,age:22}


let lastName='Duvalkar';
let oldLastName=lastName;
lastName='S';
console.log(lastName,oldLastName);

const chai={
    firstName:'chai',
    lastName:'Duvalkar',
    age:21,
};

const marriedChai=chai;
marriedChai.lastName='S'; //only lastName os changed
console.log(`Before marriage:`,chai);
//Before marriage:{firstName:"chai",lastName:"S",age:21}

console.log(`After marriage:`,marriedChai);
//After marriage:{firstName:"chai",lastName:"S",age:21}


//copying objects
const chai2={
    firstName:'chai',
    lastName:'Duvalkar',
    age:21,
    family:['Alice','Bob'],
};

const chaiCopy=Object.assign({},chai2);
chaiCopy.lastName='S';

chaiCopy.family.push('John');
//Before marriage:{firstName: 'chai', lastName: 'Duvalkar', age: 21,family:['Alice', 'Bob', 'John', 'Mary']}

chaiCopy.family.push('Mary');
//After marriage:{firstName: 'chai', lastName: 'S', age: 21,family:['Alice', 'Bob', 'John', 'Mary']}

console.log(`Before marriage:`,chai2);
//Before marriage:{firstName:"chai",lastName:"Duvalkar",age:21}
console.log(`After marriage:`,chaiCopy);
//After marriage:{firstName:"chai",lastName:"S",age:21}





