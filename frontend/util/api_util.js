var ApiActions = require("../actions/api_actions.js")

var apiUtil = {
  fetchBenches: function(bounds){
    // debugger;
    $.ajax({
       method: 'GET',
       url: 'api/benches',
       data: {bounds: bounds},
       dataType: 'json',
       success: function(resp) {
         ApiActions.receiveAll(resp);
       }
    });
  }
};

module.exports = apiUtil;
