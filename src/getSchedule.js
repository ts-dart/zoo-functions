const data = require('../data/zoo_data');

function allDays() {
  const objeto = {};
  const days = Object.keys(data.hours).map((curr) => {
    const avail = data.species.map((obj) => {
      let nam;
      if (obj.availability.some((day) => day === curr)) nam = obj.name;
      return nam;
    });
    objeto[curr] = {
      officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
      exhibition: avail.filter((names) => names !== undefined),
    };
    objeto.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return objeto;
  });
  return days[0];
}

function invalidParam(param) {
  let invalid = true;

  Object.keys(data.hours).forEach((day) => {
    if (day === param) invalid = false;
  });
  data.species.forEach((obj) => {
    if (obj.name === param) invalid = false;
  });

  return invalid;
}

function result(param) {
  let resp = {};

  Object.keys(allDays()).forEach((day) => {
    if (day === param) resp[day] = allDays()[day];
  });

  data.species.forEach((obj) => {
    if (obj.name === param) resp = obj.availability;
  });

  return resp;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || invalidParam(scheduleTarget)) return allDays();

  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }

  return result(scheduleTarget);
}

module.exports = getSchedule;
