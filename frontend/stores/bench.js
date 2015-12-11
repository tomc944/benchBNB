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
      var result = resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
  }
}

var resetBenches = function(benches){
  _benches = benches;
}

module.exports = BenchStore
