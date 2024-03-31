import React from "react";
import data from "../data/recipes.json";

function IngredientList() {
   return(
      <div>
        <h2>Ingredients</h2>
        <ul>
          {data.map((recipe, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 