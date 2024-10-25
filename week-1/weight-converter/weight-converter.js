/**
 * Author:
 * Date:
 * File Name:
 * Description:
*/

"use strict";

// Get input from command line
const pounds = process.argv[2]; // COmmand line argument is stored in process.argv[2]

if (!pounds){
    console.error('Usage: node weight-converter.js <pounds>');
    process.exit(1); // Exit with error code
}

// Check if input is a valid number
if (isNaN(pounds)){
    console.error('Input must be a number');
    process.exit(1);
}

// Convert pounds to kilograms rounded 2 decimal places
const kilograms = (pounds * 0.453592).toFixed(2);

console.log(`${pounds} pounds is equal to ${kilograms} kilograms.`);