/**
 * Author: Wendy Rzechula
 * Date: 12/08/2024
 * File Name: character-creator.js
 * Description:n Implements CharacterCreator
 */

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.CharacterData = [];
  }

  _write(chunk, encoding, callback) {
    const data = chunk.toString().trim();

    if (!data) {
      this.emit('error', new Error('Empty input is not allowed.'));
      return callback();
    }

    this.CharacterData.push(data);
    this.push(`Processed: ${data}\n`);
    callback();
  }

  _read(size) {
    while (this.CharacterData.length > 0) {
      const data = this.CharacterData.shift();
      this.push(`${data}\n`);
    }
    this.push(null);
    }
  }

module.exports = CharacterCreator;