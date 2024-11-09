/**
 * Author: Wendy Rzechula    
 * Date: 11/09/2024
 * File Name: distance-calculator.js
 * Description: A calculator to find the distance between two planets in our solar system. 
*/

'use strict';

function calculateDistance(planet1, planet2) {
  // Calculate the difference between the two planet distances
  return Math.abs(planet1 - planet2);
}

module.exports = calculateDistance;