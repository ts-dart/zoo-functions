const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) {
    const days = Object.keys(data.hours).map((curr) => {
      return { [curr]: {
        officeHour: `Open from ${data.hours[curr].open} until ${data.hours[curr].close}`,
        exhibition: 0,
      } };
    });
    console.log(days);
  }
}

module.exports = getSchedule;
