var hooks = require('hooks');
var secrets = require('./secrets');

hooks.beforeEach(function (transaction) {
  transaction.request.uri = setParameter(
    transaction.request.uri,
    'key',
    secrets.API_KEY
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
