var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('./stores/bench.js'),
    apiUtil = require('./util/api_util.js');

window.BenchStore = BenchStore;
window.apiUtil = apiUtil;

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<div>Hello</div>, root)
})
