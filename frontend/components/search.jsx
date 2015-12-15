var React = require('react'),
    Map = require('./map'),
    Index = require('./index'),
    FilterStore = require('../stores/filter_params'),
    ApiUtil = require('../util/api_util');

var Search = React.createClass({
  getInitialState: function() {
    return ({ params: FilterStore.all() })
  },
  _onChange: function() {
    this.setState({ params: FilterStore.all() })
  },
  clickMapHandler: function(query) {
    this.props.history.pushState(null, '/benches/new', query)
  },
  componentDidMount: function() {
    this.filterListener = FilterStore.addListener(this._onChange);
    ApiUtil.fetchBenches(this.state.params);
  },
  render: function() {
    return(
      <div>
        <Map handler={this.clickMapHandler}/>
        <Index />
      </div>
    );
  }
})

module.exports = Search;
