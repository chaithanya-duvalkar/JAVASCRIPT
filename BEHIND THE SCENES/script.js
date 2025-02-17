//'use strict';

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

   // console.log(str); //this gives error as str is defined inside block scope(let & const)
   console.log(millenial);  //we get the output bcz var is not block scope
   
  // add(2,3);//error as the add function is block scope...defined only inside the block scope

  //when use strict is commented, we get output as 5..but we can't comment out the use strict
  //console.log(add(2,3));
 
  console.log(output);
}
   
   printAge();

   return age;
}

const firstName='chai';
calcAge(2004);

//age and printAge() both are out-of scope no access to other scope
//console.log(age);
//printAge();
