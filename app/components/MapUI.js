var React = require('react');
var PropTypes = React.PropTypes;
var {Gmaps, Marker, InfoWindow, Circle} = require('react-gmaps');
var APIKey = 'AIzaSyDCeA33iW0bala6-6UlE19RJa9ivPsXV2E';
var Maplink = "https://maps.googleapis.com/maps/api/js?key=" + APIKey + "&callback=initMap";

var styles = {
  marginLeft: 'auto',
  marginRight: 'auto'
}

var MapUI = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
        <Gmaps
          style={styles}
          width={'1000px'}
          height={'400px'}
          lat={this.props.coord.lat}
          lng={this.props.coord.lon}
          zoom={5}
          loadingMessage={'Loading Map'}
          params={{v: '3.exp', key: APIKey}}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={this.props.coord.lat}
            lng={this.props.coord.lon}
            draggable={true}
            onDragEnd={this.onDragEnd} />
          <Circle
            lat={this.props.coord.lat}
            lng={this.props.coord.lon}
            radius={500}
            onClick={this.onClick} />
        </Gmaps>
    );
  }

});

module.exports = MapUI;
