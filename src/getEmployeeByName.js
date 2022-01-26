const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};

  const obj = data.employees.find((curr) => curr.firstName === employeeName
  || curr.lastName === employeeName);

  return obj;
}

module.exports = getEmployeeByName;
