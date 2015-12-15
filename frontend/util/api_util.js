var ApiActions = require("../actions/api_actions.js"),
    FilterActions = require("../actions/filter_actions");

var apiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
       method: 'GET',
       url: 'api/benches',
       data: {params: bounds},
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
