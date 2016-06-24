var weather = require('./index');
weather('Atlanta, GA', function(err, data){
  console.log(data);
});
