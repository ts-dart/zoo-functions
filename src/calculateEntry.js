const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const childrens = entrants.filter((curr) => curr.age < 18);
  const adults = entrants.filter((curr) => curr.age >= 18 && curr.age < 50);
  const seniors = entrants.filter((curr) => curr.age >= 50);

  return {
    child: childrens.length,
    adult: adults.length,
    senior: seniors.length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const visitors = countEntrants(entrants);
  const count = [visitors.child * 20.99, visitors.adult * 49.99, visitors.senior * 24.99];
  const sum = count.reduce((acc, curr) => acc + curr);

  return sum;
}

module.exports = { calculateEntry, countEntrants };
