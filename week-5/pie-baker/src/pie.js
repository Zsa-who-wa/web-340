/**
 * Author: Wendy Rzechula
 * Date: 11/21/2024
 * File Name: pie.js
 * Description: 
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ["flour", "sugar", "butter"];
  
  // Check if ingredients are missing
  for (let i = 0; i < essentialIngredients.length; i++) {
    if (!ingredients.includes(essentialIngredients[i])) {
      console.log(`You are missing ${essentialIngredients[i]}!`);
      process.exit(1);
    }
  }
  
  return `You successfully baked a ${pieType} pie`;
}

module.exports = {bakePie};

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
    Bekkhus, S. (2023, December 29). Mock Functions. Retrieved November 23, 2024, from https://jestjs.io/docs/mock-functions
*/