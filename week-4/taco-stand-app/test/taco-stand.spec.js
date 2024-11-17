/**
 * Author: Wendy Rzechula
 * Date: 11/16/2024
 * File Name: taco-stand.specs.js
 * Description: Unit tests for the TacoStandEmitter methods
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

function testServeCustomer() {
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John", "Customer should be John");
    });
    tacoStand.serveCustomer("John");
    console.log("testServeCustomer passed.");
  } catch (err) {
    console.error(`testServeCustomer failed: ${err.message}`);
  }
}

function testPrepareTaco() {
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef", "Taco should be beef");
    });
    tacoStand.prepareTaco("beef");
    console.log("testPrepareTaco passed.");
  } catch (err) {
    console.error(`testPrepareTaco failed: ${err.message}`);
  }
}

function testHandleRush() {
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch", "Rush should be lunch");
    });
    tacoStand.handleRush("lunch");
    console.log("testHandleRush passed.");
  } catch (err) {
    console.error(`testHandleRush failed: ${err.message}`);
  }
}

// Run tests
testServeCustomer(); 
testPrepareTaco();
testHandleRush(); 

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
*/