const _ = require('lodash');

function parser(tibiaString) {
  const fullArray = tibiaString.split('\n');
  const excludeKeys = ['Session data'];
  const resultString = []; 

  _.each(fullArray, array => {
    const [key, value] = array.trim().split(': ');

    if (!_.isUndefined(value) && _.indexOf(excludeKeys, key) === -1) {
      resultString.push(value);
    }
  });
  return resultString.join(';');
}

function makeResult() {
  const textArea = document.getElementById('textarea');
  const result = parser(textArea.value);
  const div = document.getElementById('result');

  div.innerHTML = result;
}

module.exports.parser = parser;