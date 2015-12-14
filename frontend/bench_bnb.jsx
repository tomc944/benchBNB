var React = require('react'),
    ReactDOM = require('react-dom'),
    Search = require('./components/search'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    BenchForm = require('./components/form');

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
    <Route path="benches/new" component={BenchForm} />
  </Route>
)

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('content');
  ReactDOM.render(<Router>{routes}</Router>, root)
})
