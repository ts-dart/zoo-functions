const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const specie = data.species.filter((obj) => obj.id === ids[0] || obj.id === ids[1]);

  return specie;
}

module.exports = getSpeciesByIds;
