var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  receiveFilter: function(params) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTERS_RECEIVED,
      params: params
    });
  }
};

module.exports = FilterActions;
