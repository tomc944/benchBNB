var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/bench_constants'),
    _benches = [],
    BenchStore = new Store(AppDispatcher);

BenchStore.all = function() {
  return _benches.slice();
}

BenchStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      this._resetBenches(payload.benches);
      break;
  }
}

BenchStore._resetBenches = function(benches){
  _benches = benches;
  this.__emitChange();
}

module.exports = BenchStore
