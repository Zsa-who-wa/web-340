/**
 * Author: Wendy Rzechula    
 * Date: 11/02/2024
 * File Name: index.js
 * Description: A simple recipe app with timer functionality
*/

// Import functions from recipes.js
const {createRecipe, setTimer, quit} = require('./recipes');

// Demonstrate the functions
console.log(createRecipe(["flour", "sugar", "eggs"]));
console.log(setTimer(30));
console.log(quit());