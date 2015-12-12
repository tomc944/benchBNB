var React = require('react'),
    BenchStore = require('../stores/bench');

var Map = React.createClass({
  getInitialState: function(){
    return ({markers: []})
  },
  componentDidMount: function() {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.token = BenchStore.addListener(this._onChange);
  },
  _onChange: function() {
    marker = new google.maps.Marker({
      position: {lat: 37.780913, lng: -122.411366}
    })
    marker.setMap(this.map);
  },
  componentWillUnmount: function() {
    this.token.remove();
  },
  render: function() {
    return(
      <div className="map" ref="map"></div>
    )
  }
})

module.exports = Map;
