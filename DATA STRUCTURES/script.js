'use strict';

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
/*
  const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

*/
//const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
/*const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },

}*/

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
  // orderPizza(mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },


  const ingredients = [
   prompt("Let's make pasta! Ingredients 1?"),
   prompt('Ingredients 2?'),
   prompt('Ingredients 3?'),
  ];
  console.log(ingredients);
  
  restaurant.orderPasta({
    ing1:ingredients[0],
    ing2:ingredients[1],
    ing3:ingredients[2]
  });
  restaurant.orderPasta( ...ingredients);


//objects
const newRestaurant = {foundedIn:1998, ...
  restaurant,founder:'Guiseppe'};
  console.log(newRestaurant);

  const restaurantCopy={...restaurant};
  restaurantCopy.name='Ristorante Roma';
  console.log(restaurantCopy);
  console.log(restaurant.name);


//declarations of array
const arr = [7,8,9];
const badNewArr=[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);  //[1, 2, 7, 8, 9]

const newArr=[1,2, ...arr];
console.log(newArr);  //[1, 2, 7, 8, 9]

const NewArr=[1,2,arr];
console.log(NewArr);  //[1, 2, Array(3)]

console.log(...newArr); //1 2 7 8 9
console.log(1,2,7,8,9); //1 2 7 8 9

const newMenu=[...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);
//['Pizza', 'Pasta', 'Risotto', 'Gnocci']
//keeping old array as it is and adding new item into old array


//copy array
const mainMenuCopy= [...restaurant.mainMenu];

//join 2 arrays
const Menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(Menu);
//['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//iterables:arrays,strings,maps,sets not objects
const str = 'Jonas';
const letters = [...str,' ','S.'];
console.log(letters); //['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str); //J o n a s
console.log('j','o','n','a','s'); //j o n a s

//console.group(`${...str} archimidies`);
//error-->unexpected token '...'
//multiple strings can be passed through function or arrays 


/*
//destructuring objects

restaurant.orderDelivery({
  time:'22:30',
  address:'Via del Sole, 21',
  mainIndex:2,
  starterIndex:2,
});

restaurant.orderDelivery({
  address:'Via del Sole, 21',
  starterIndex:1,
});
*/

const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);

//assigning different variable names
const {name:restaurantName,openingHours:hours,categories:tags}=restaurant;
console.log(restaurantName,hours,tags);

//default values
const {menu=[],starterMenu:starters=[]}=restaurant;
console.log(menu,starters);

//mutating variables
let a=111;
let b=999;
const obj={a:23,b:7,c:14};

({a,b}=obj);//unexpected token '=' -->error,hence use this inside paranthesis

console.log(a,b);  //23,7


//nested objects
const {fri}=openingHours;
console.log(fri); //{open: 11, close: 23}

const{fri:{open,close}}=openingHours;
console.log(open,close); //11,23

const{fri:{open:o,close:c}}=openingHours;
console.log(o,c); //11,23

/*

//destruction of arrays

const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const [x,y,z]=arr;
console.log(x,y,z); //2 3 4
console.log(arr);//[2,3,4]

//const [first,second]=restaurant.categories;
//console.log(first,second); //Italian Pizzeria

let [main,secondary]=restaurant.categories;
console.log(main,secondary); //Italian Pizzeria

//switching of variables
//const temp=main;
//main=secondary;
//secondary=temp;
//console.log(main,secondary); //Pizzeria Italian

[main,secondary]=[secondary,main];
console.log(main,secondary); //Pizzeria Italian


//recieve to return values from a function
//console.log(restaurant.order(2,0)); //['Garlic Bread','Pizza']
const [starter,mainCourse]=restaurant.order(2,0);
console.log(starter,mainCourse); //Garlic Bread Pizza


//nested structring
const nested=[2,4,[5,6]];
//const [i, ,j]=nested;
//console.log(i,j); //2 [5,6]
const[i, ,[j,k]]=nested;
console.log(i,j,k); //2 5 6


//default values
const [p,q,r]=[8,9];
console.log(p,q,r); //8 9 undefined

const [m=1,n=1,o=1]=[8,9];
console.log(m,n,o); //8 9 1
//this is helpful when we get data from API


*/
