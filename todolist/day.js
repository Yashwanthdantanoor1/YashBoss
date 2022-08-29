exports.day = day;
exports.date = date;

function day() {
  let options = {
    weekday: 'long'
  };
  let todayday = new Date();

  return todayday.toLocaleDateString("en-US", options);
}

function date() {
  let options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }
  let today = new Date();
  return today.toLocaleDateString("en-US", options);
}
//
