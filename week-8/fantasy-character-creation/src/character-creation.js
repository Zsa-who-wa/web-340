/**
 * Author: Wendy Rzechula
 * Date: 12/14/2024
 * File Name: character-creator.js
 * Description:
 */

"use strict";

const fs = require('fs').promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "character.json");

async function createCharacter(character) {
  try {
    let characters = [];
    try {
      const data = await fs.readFile(FILE_PATH, "utf8");
      character = JSON.parse(data);
    } catch {
      characters = [];
    }
    characters.push(character);
    await fs.writeFile(FILE_PATH, JSON.stringify(characters, null, 2));
    return character;
  } catch (error) {
    throw new Error("Failed to create character: " + error.message);
  }
}

async function getCharacters() {
  try {
    const data = await fs.readFile(FILE__PATH, "utf8");
      return JSON.parse(data);
    } catch (error) {
      throw new Error("Failed to read characters: " + error.messages);
    }
  }

module.exports = { createCharacter, getCharacters }; // For promises