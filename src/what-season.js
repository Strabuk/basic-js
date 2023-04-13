const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(/* date */) {
  let nameOfSeason = date.getMounth()
  if (nameOfSeason>=2&&nameOfSeason<=4) {
    return 'spring';
  } else if (nameOfSeason>=5&&nameOfSeason<=7) {
    return 'summer';
  } else if (nameOfSeason>=8&&nameOfSeason<=10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
