'use strict';

/** 
 * Simple tool to help valid inputs
*/
let validatorTool = {};

validatorTool.checkInput = function(input, type, regex) {
  let isValid = false;
  if (!(input === null || input === undefined)) {
    if (type === 'string' && regex) {
      if (typeof(input) === 'string' && regex.test(input)) {
        isValid = true;
      }
    }
    else if (type === 'number') {
      if (typeof(input) === 'number' || !(isNaN(input))) {
        isValid = true;
      }
    }
  }
  return isValid;
}

module.exports = validatorTool;
