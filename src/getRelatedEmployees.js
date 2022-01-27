const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const managers = data.employees.map((curr) => curr.managers);
  // const compare = managers.find((curr) => {
  //   console.log(curr === id);
  //   console.log(curr, id);
  // });
  console.log(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('stephanieId'));
module.exports = { isManager, getRelatedEmployees };
