 import React from 'react';
import FoodItem from './FoodItem';

const food = [
  {
    id:1,
    foodName: "Italian Combo",
    price:"$12.99",
    ingredients:"deli meat, lettuce, tomato, bread, provolone"
  },
  {
    id:2,
    foodName:"Pastrami Sandwhich",
    price:"$13.99",
    ingredients:"pastrami, rye bread"
  },
  {
    id:3,
    foodName:"Peanut Butter and Jelly",
    price:"$4.99",
    ingredients:"Peanutbutter, Grape Jelly, Bread"
  }
]

function FoodItems () {
   return(
     <div>
       {food.map(sandwich => <FoodItem key={sandwich.id} item={sandwich} />)}
      </div>
       
    )
   }
   
 

 export default FoodItems