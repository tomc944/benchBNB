var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('./stores/bench.js'),
    apiUtil = require('./util/api_util.js'),
    Index = require('./components/index');

// window.BenchStore = BenchStore;
// window.apiUtil = apiUtil;

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Index />, root)
})
