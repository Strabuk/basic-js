const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine() {
  let encoder = new TextEncoder();
  let uint8Array = encoder.encode(str);
  return uint8Array;
}

module.exports = {
  encodeLine
};
