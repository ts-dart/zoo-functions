const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const obj = data.species.filter((currObj) => currObj.name === animal);
  const list = obj[0].residents.filter((currAge) => currAge.age < age);

  if (list.length === 0) return true;
  return false;
}

module.exports = getAnimalsOlderThan;
