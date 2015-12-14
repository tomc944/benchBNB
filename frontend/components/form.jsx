var React = require('react'),
    ApiUtil = require('../util/api_util.js'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var BenchForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    description: '',
    lat: '',
    lng: ''
  },

  getInitialState: function() {
    return this.blankAttrs
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    debugger;
    if (query) {
      this.setState({"lat": query.lat, "lng": query.lng})
    }
  },

  createBench: function(event) {
    event.preventDefault();
    var bench = [{}];
    Object.keys(this.state).forEach(function (key) {
      bench[0][key] = this.state[key]
    }.bind(this))
    ApiUtil.createBench(bench, function (id) {
      this.history.pushState(null, "/bench/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function() {
    debugger;
    return(
      <form onSubmit={this.createBench}>
        <div>
          <label>Description:</label>
          <input
            type='text'
            valueLink={this.linkState('description')}
          />
        </div>

        <div>
          <label>Latitude:</label>
          <input
            type='text'
            valueLink={this.linkState('lat')}
          />
        </div>

        <div>
          <label>Longitude:</label>
          <input
            type='text'
            valueLink={this.linkState('lng')}
          />
        </div>

        <button>Create a Bench!</button>
        <br />
      </form>
    );
  }
});

module.exports = BenchForm;
