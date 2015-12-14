var React = require('react'),
    ReactDOM = require('react-dom'),
    Search = require('./components/search'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path = "/" component={App}>
    <IndexRoute component={Search} />
  </Route>
)


// window.BenchStore = BenchStore;
// window.apiUtil = apiUtil;

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root)
})
