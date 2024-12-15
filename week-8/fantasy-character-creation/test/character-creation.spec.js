/**
 * Author: Wendy Rzechula
 * Date: 12/14/2024
 * File Name: character-creator.spec.js
 * Description:
 */

"use strict";

const fs = require('fs').promises;
const path = require("path");
const { createCharacter, getCharacters } = require("../src/character-creation");

const FILE__PATH = path.join(__dirname, "../src/character.json");

jest.mock("fs", () => ({
  promises: {
    readFile: jest.fn(),
    writeFile: jest.fn(),
  },
}))

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  test("should write a new character to the file", async () => {
    const character = { class: "Mage", gender: "Female", trait: "Enhanced Perception"};
    fs.writeFile.mockResolvedValueOnce();

    const result = await createCharacter(character);

    expect(fs.writeFile).toHaveBeenCalledWith(
      FILE_PATH,
      JSON.stringify([character], null, 2)
    );
    expect(result).toEqual(character);
  });
});

test("should read characters from the file", async () => {
  const characters = [
    {class: "Mage", gender: "Female", trait: "Enhanced Perception"},
  ];
  fs.readFile.mockResolvedValueOnce(JSON.stringify(characters));

  const result = await getCharacters();

  expect(fs.READfILE).toHaveBeenCalledWith(file_path, "UTF8");
  expect(RESULT).toEqual(characters);
})