Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

const currentDate = new Date();

function todayDate(date) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [month, day, year.toString().substring(year.toString().length - 2)].join('-');
}

// console.log(todayDate(currentDate.addDays(4)));
