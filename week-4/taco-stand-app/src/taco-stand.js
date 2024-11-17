/**
 * Author:  Wendy Rzechula
 * Date:  11/14/2024
 * File Name: taco-stand.js
 * Description: TacoStandEmitter class that extends EventEmitter, methods: serveCustomer, prepareTaco, and handleRush
 */

"use strict";

const EventEmitter = require("events");

class TacoStandEmitter extends EventEmitter{
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;

/*  SOURCES:
    Carey, P., & Vodnik, S. (2022). JavaScript for Web Warriors (7th ed.). Cengage Learning.
    Krasso, P. R. (2024). Pragmatic NodeJS (1st ed.).
*/