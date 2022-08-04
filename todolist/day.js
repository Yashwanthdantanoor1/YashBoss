exports.day = day;
function day(){
let options = { weekday: 'long'};
let today  = new Date();

return today.toLocaleDateString("en-US", options);
}
//
