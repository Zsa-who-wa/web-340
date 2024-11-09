/**
 * Author: Wendy Rzechula    
 * Date: 11/09/2024
 * File Name: distance-calculator.spec.js
 * Description: Tests distance-calculator.js
*/

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testMercuryToSaturn() {
  // Test function Mercury to Saturn
  try {
    const mercuryDistance = 0.39;
    const saturnDistance = 9.54;
    const expectedDistance = 9.15;
    assert.strictEqual(calculateDistance(mercuryDistance, saturnDistance), expectedDistance);
    console.log("testMercuryToSaturn passed");
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToSaturn: ${error.message}`);
      return false;
    }
}

function testVenusToUranus() {
  // Test function Venus to Uranus
  try {
    const venusDistance = 0.72;
    const uranusDistance = 19.22;
    const expectedDistance = 18.5;
    assert.strictEqual(calculateDistance(venusDistance, uranusDistance), expectedDistance);
    console.log("testVenusToUranus passed");
    return true;
  } catch (error) {
    console.error(`Failed testVenusToUranus: ${error.message}`);
      return false;
    }
}

function testEarthToNeptune() {
  // Test function Earth to Neptune
  try {
    const earthDistance = 1.0;
    const neptuneDistance = 30.06;
    const expectedDistance = 29.06;
    assert.strictEqual(calculateDistance(earthDistance, neptuneDistance), expectedDistance);
    console.log("testEarthToNeptune passed");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToNeptune: ${error.message}`);
      return false;
    }
}

// Run test functions here
testMercuryToSaturn();
testVenusToUranus();
testEarthToNeptune();