var hooks = require('hooks');

var fileName = "./secret-config.json";
var config;

hooks.beforeAll(function (transactions, done) {
  console.log("Hello World");
  try {
    config = require(fileName);
  } catch (err) {
    config = {};
    console.error("unable to read file '"+ fileName +"': ", err);
    console.error("see secret-config-sample.json for an example");
  }
  done();
});

hooks.beforeEach(function (transaction) {
  console.log("Bye World");
  transaction.request.uri = setParameter(
    transaction.request.uri,
    'key',
    config.API_KEY
  );

  transaction.fullPath = transaction.request.uri;
});

function setParameter(uri, name, value) {
  var regex = new RegExp('('+name+'=).*?(&|$)');

  if (uri.search(regex) > -1) {
    uri = uri.replace(regex, '$1' + value + '$2');
  } else {
    var paramToAdd = name + '=' + value;
    if(uri.indexOf('?') > -1){
      uri += "&" + paramToAdd;
    } else{
      uri += "?" + paramToAdd;
    }
  }

  return uri;
}
