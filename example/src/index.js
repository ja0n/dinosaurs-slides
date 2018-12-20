var moment = require('moment');
var button = document.getElementById('alert');

function alertHello () {
  var time = moment().format('LTS'); 
  document.body.innerText = time;
}

button.addEventListener('click', alertHello);