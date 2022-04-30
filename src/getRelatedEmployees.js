const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.map((obj) => obj.managers.filter((mId) => mId === id));
  const m = manager.some((curr) => curr[0] === id);
  return m;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const array = data.employees.map((obj) => {
    const bol = obj.managers.some((curr) => curr === managerId);
    let lintB;
    if (bol) lintB = obj.firstName;
    return `${lintB} ${obj.lastName}`;
  });
  const arrNomes = array.map((curr) => curr.split(' '));
  const noUndefined = arrNomes.filter((curr) => curr[0] !== 'undefined');
  const result = noUndefined.map((curr) => curr.join(' '));
  return result;
}

module.exports = { isManager, getRelatedEmployees };
