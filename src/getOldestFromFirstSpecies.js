const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((obj) => obj.id === id);
  const firstSpecieId = employee.responsibleFor[0];
  const specie = data.species.find((obj) => obj.id === firstSpecieId);

  let result;
  let maior = 0;
  for (let i = 0; i < specie.residents.length; i += 1) {
    if (specie.residents[i].age > maior) {
      maior = specie.residents[i].age;
      result = [specie.residents[i].name, specie.residents[i].sex, specie.residents[i].age];
    }
  }
  return result;
}

module.exports = getOldestFromFirstSpecies;
