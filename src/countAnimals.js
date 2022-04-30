const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const obj = {};
    const animals = data.species.map((curr) => {
      obj[curr.name] = curr.residents.length;
      return obj;
    });
    return animals[0];
  }

  const popularity = data.species.find((curr) => curr.name === animal.specie);

  if (animal.sex) {
    const find = popularity.residents.filter((curr) => curr.sex === animal.sex);
    return find.length;
  }

  return popularity.residents.length;
}

module.exports = countAnimals;
