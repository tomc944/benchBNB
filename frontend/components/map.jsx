var React = require('react'),
    apiUtil = require('../util/api_util'),
    BenchStore = require('../stores/bench');

var Map = React.createClass({
  getInitialState: function(){
    return ({ markers: BenchStore.all() })
  },
  _onChange: function() {
    this.setState({ markers: BenchStore.all() })
    this._placeMarkers();
  },
  _placeMarkers: function() {
    var that = this;
    
    this.state.markers.map(function(marker) {
      marker = new google.maps.Marker({
        position: { lat: marker.lat, lng: marker.lng }
      })
      return(marker.setMap(that.map))
    })
  },
  componentDidMount: function() {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.token = BenchStore.addListener(this._onChange);
    this.listenForMove();
    this.listenForClick();
  },
  listenForMove: function() {
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var northEast = bounds.getNorthEast();
      var southWest = bounds.getSouthWest();
      that.newBounds = {"northEast":
                      {"lat": northEast.lat(), "lng": northEast.lng()},
                       "southWest":
                      {"lat": southWest.lat(), "lng": southWest.lng()}}
      apiUtil.fetchBenches(that.newBounds);
    });
  },
  listenForClick: function() {
    this.map.addListener('click', function(e) {
      this.props.handler({
        "lat": e.latLng.lat(),
        "lng": e.latLng.lng()
      });
    }.bind(this));
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
