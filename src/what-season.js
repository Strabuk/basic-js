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
  if (nameOfSeason >= 3 && nameOfSeason <=5) {
    return 'spring'
  } else if (nameOfSeason >=6 && nameOfSeason <=8) {
    return 'summer'
  } else if (nameOfSeason >=9 && nameOfSeason <=11) {
    return 'autumn'
  } else {
    return 'winter'
  }
}

module.exports = {
  getSeason
};
