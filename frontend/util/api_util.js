var ApiActions = require("../actions/api_actions.js")

var apiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
       method: 'GET',
       url: 'api/benches',
       data: {bounds: bounds},
       dataType: 'json',
       success: function(resp) {
         ApiActions.receiveAll(resp);
       }
    });
  },
  createBench: function(bench, callback) {
    var bench = bench[0]
    $.ajax({
      method: 'POST',
      url: 'api/benches',
      data: {bench: bench},
      success: function (bench) {
        ApiActions.receiveBench(bench);
      }
    })
  }
};

module.exports = apiUtil;
