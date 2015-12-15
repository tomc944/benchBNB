var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants'),
    _params = {},
    FilterStore = new Store(AppDispatcher);

FilterStore.all = function(){
  return _params
}

FilterStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case FilterConstants.FILTERS_RECEIVED:
      this.resetFilters(payload.params);
      break;
  }
}

FilterStore._resetBenches = function(filters) {
  _params = params
  this.__emitChange();
}

module.exports = FilterStore;
