/**
 * Author: Wendy Rzechula
 * Date: 12/08/2024
 * File Name: character-creator.spec.js
 * Description: Unit Tests
 */

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    characterCreator.on('data', (chunk) => {
      expect(chunk.toString()).toContain('Processed: Warrior');
      done();
    });

    characterCreator.write('Warrior');
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
      expect(err.message).toBe('Empty input is not allowed.');
      done();
    });

    characterCreator.write('');
  });

  test("should transform data correctly when written to", (done) => {
    const input = ['Mage', 'Female', 'Loves magic'];
    const expected = input.map((item) => `Processed: ${item}\n`);

    let output = '';
    characterCreator.on('data', (chunk) => {
      output += chunk.toString();
    });

    characterCreator.on('end', () => {
      expected.forEach((line) => expect(output).toContain(line));
      done();
    });

    input.forEach((data) => characterCreator.write(data));
    characterCreator.end();
  });
});