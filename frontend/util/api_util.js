var ApiActions = require("../actions/api_actions.js")

var apiUtil = {
  fetchBenches: function(){
    $.ajax({
       method: 'GET',
       url: 'api/benches',
       dataType: 'json',
       success: function(resp) {
         ApiActions.receiveAll(resp);
       }
    });
  }
};

module.exports = apiUtil;
