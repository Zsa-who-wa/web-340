/**
 * Author:  Wendy Rzechula
 * Date:  11/14/2024
 * File Name: index.js
 * Description: CLI for TacoStandEmitter
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./src/taco-stand");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
  console.log(`Taco stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const arg = args.join(" ");

  if (command === "serve") {
    tacoStand.serveCustomer(arg);
  } else if ( command === "prepare") {
    tacoStand.prepareTaco(arg);
  } else if (command === "rush") {
    tacoStand.handleRush(arg);
  } else {
    console.log("Unknown command. Please use 'serve', 'prepare', or 'rush'.");
  }
});

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
*/