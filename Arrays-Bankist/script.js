'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements =function(movements){
  containerMovements.innerHTML='';

  movements.forEach(function(mov,i){
  const type=mov>0?'deposit':'withdrawal';

  const html=`
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin',html);
      });
};
//displayMovements(account1.movements);

const calcDisplayBalance=function(acc){
  acc.balances=acc.movements.reduce((acc,mov)=>acc+mov,0);
  labelBalance.textContent=`${acc.balances}€`; 
}
calcDisplayBalance(account1.movements);

const calcDisplaySummary=function(acc){
  const incomes=acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent=`${incomes}€`;

  const out=acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
  labelSumOut.textContent=`${Math.abs(out)}€`;

  const interest=acc.movements.filter(mov=>mov>0).map(deposit=>(deposit*acc.interestRate)/100).filter((int,i,arr)=>{
    console.log(arr);
    return int>=1;
  })
  .reduce((acc,int)=>acc+int,0);
  labelSumInterest.textContent=`${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUsernames=function(accs){
  accs.forEach(function(acc){
    acc.username=acc.owner.toLowerCase().split('-').map(name=>name[0]).join('');
  });
};
createUsernames(accounts);

const updateUI=function(){
  
 //display movements
 displayMovements(acc.movements);

 //display balance
 calcDisplayBalance(acc);

 //display summary
 calcDisplaySummary(acc);
}


//event handler

let currentAccount;
btnLogin.addEventListener('click',function(e){

  //prevent form from submitting
  e.preventDefault();

  currentAccount= accounts.find(
    acc=>acc.username ===inputLoginUsername.value
  );
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value))
  {

    //display UI and messages
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=100;

    //clear input fields
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
    
    //update UI
    updateUI(currentAccount);
  }
});
//login features


btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const receiverAcc=accounts.find(acc=>acc.username === inputTransferTo.value);
  console.log(amount,receiveAcc);

  if(amount>0 && currentAccount.balance>=amount&&receiveAcc?.username!==currentAccount.username)
  {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log('Transfer valid');

    //update UI
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


//1.
const checkDogs=function(dogsJulia,dogsKate){
  const dogsJuliaCorrected=dogsJulia.slice();
  dogsJuliaCorrected.splice(0,1);//1.
  dogsJuliaCorrected.splice(-2);//1.

  const dogs=dogsJuliaCorrected.concat(dogsKate);//2.
  console.log(dogs);

   dogs.forEach(function(dog,i){ //3.
    //("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
    if(dog>=3){
      console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
    }
    else{
      console.log(`Dog number ${i+1} is still a puppy🐶`);
    }
   });

};

//4.
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

///////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

//1.
const calcAverageHumanAge=function(ages){
  const humanAge=ages.map(age=>(age<=2?2*age:16+age*4));
  const adults=humanAge.filter(age=>age>=18);
  console.log(humanAge);
  console.log(adults);

//  const average=adults.reduce((acc,age)=>acc+age,0)/adults.length;
  const average=adults.reduce((acc,age,i,arr)=>acc+age/arr.length,0);
  return average;
}

const avg1=calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2=calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1,avg2);
*/

////////////////////////////////////

/*
////////map////////
const createUsernames=function(accs){
  accs.forEach(function(acc){
    acc.username=acc.owner.toLowerCase().split('-').map(name=>name[0]).join('');
  });
};
createUsernames(accounts);
console.log(accounts);

///////filter//////
const deposits=movements.filter(function(mov){
  return mov>0;
});
console.log(movements);
console.log(deposits);

//using for loop
const depositsFor=[];
for(const mov of movements) if (mov>0)
    depositsFor.push(mov);
console.log(depositsFor);

const withdrawals=movements.filter(mov=>mov<0);
console.log(movements);
console.log(withdrawals);


///////reduce///////
//accumulator
const balance=movements.reduce(function(acc,cur,i,arr){
  console.log(`Iteration ${i}:${acc}`);
  return acc+cur;
},0);

const balance2=movements.reduce((acc,cur)=>acc+cur,0);
console.log(balance2);

let balance3=0;
for(const mov of movements) 
  balance3+=mov;
console.log(balance3);

*/
////////////////////////////////
/*
///for-loop///
//first index then movement
//for (const movement of movements){
for(const [i,movement] of movements.entries()){
  if(movement>0)
  {
    console.log(`Movement ${i+1}:You deposited ${movement}`);
  }
  else{
    console.log(`Movement ${i+1}:You withdrew ${Math.abs(movement)}`); //abs absolute value 
  }
}

//continue and break statements do not work in forEach loop

///for each///
console.log('-----for each-----');
//first movement then index
movements.forEach(function(mov,i,arr){
  if(mov>0)
  {
    console.log(`Movement ${i+1}:You deposited ${mov}`);
  }
  else{
    console.log(`Movement ${i+1}:You withdrew ${Math.abs(mov)}`);
  }
});



///////////////////////////////////
let arr=['a','b','c','d','e'];

//SLICE
console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice(2,4));//['c', 'd']
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(-1,-2));
console.log(arr.slice());
console.log({...arr});

//SPLICE
console.log(arr.splice(2));
arr.splice(-1);
arr.splice((1,2));
console.log(arr);

//REVERSE
arr=['a','b','c','d','e'];
const arr2=['j','i','h','g','f'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters=arr.concat(arr2);
console.log(letters);
console.log([...arr,...arr2]);

//JOIN
console.log(letters.join('-'));

//getting array element
const arr3=[21,11,64];
console.log(arr3[0]);//21
console.log(arr3.at(0));//21

//getting last element
console.log(arr3[arr3.length-1]);//64
console.log(arr3.slice(-1));//[64]
console.log(arr3.slice(-1)[0]);//64
console.log(arr3.at(-1));//64
console.log(arr3.at(-2));//11

console.log('jonas'.at(0));//j
console.log('jonas'.at(-1));//s
*/

