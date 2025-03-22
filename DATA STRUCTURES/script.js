'use strict';

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
};

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



/*
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/