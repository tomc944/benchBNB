var React = require('react'),
    BenchStore = require('../stores/bench'),
    apiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function(){
    return ({benches: BenchStore.all() });
  },
  _onChange: function() {
    this.setState({ benches: BenchStore.all() });
  },
  componentDidMount: function() {
    this.benchToken = BenchStore.addListener(this._onChange);
    apiUtil.fetchBenches();
  },
  componentWillUnmount: function(){
    this.benchToken.remove();
  },
  render: function() {
    return (
      <div>
        {this.state.benches.map(function(bench, i) {
          return <li key={i}>{bench.description}</li>
        })}
      </div>
    )
  }
})

module.exports = Index;
