const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const Arrmatrix = [1, '^^', 45, 67, 0, '^^']
function countCats(Arrmatrix) {
  let count = 0;
    for (let i = 0; i < Arrmatrix.length; i++) {
        if (Arrmatrix[i] === '^^') {
          count++;
        }
    }
    return count;
  }

module.exports = {
  countCats
};
