var weather = require('./index');
weather('WHATEVER CITY YOU WHAT', function(err, data){
  console.log(data);
});
