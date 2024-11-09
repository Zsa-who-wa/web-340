/**
 * Author: Wendy Rzechula    
 * Date: 11/02/2024
 * File Name: recipe.js
 * Description: A simple recipe app with timer functionality
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  return `Recipe created with ingredients: ${ingredients.join(',  ')}`;
  }

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return `Timer set for ${minutes} minutes;`
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return "Programs exited";
}

// TODO: Export the functions
module.exports = {createRecipe, setTimer, quit};