var React = require('react'),
    Map = require('./map'),
    Index = require('./index');

var Search = React.createClass({
  clickMapHandler: function(query) {
    this.props.history.pushState(null, '/benches/new', query)
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
