var React = require('react');
var PropTypes = React.PropTypes;
var WeatherAPI = require('../utils/WeatherAPI');
var Forecast = require('../components/Forecast')

var styles = {
  backgroundColor: 'white'
}

var ForecastContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    console.log("getInitialState");
    return {
      isLoading: true,
      forecastData: {}
    }
  },

  componentDidMount() {
    console.log("componentDidMount");
    WeatherAPI.getFiveDayForecast(this.props.routeParams.city)
      .then(function(forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        })
      }.bind(this))
  },

  componentWillReceiveProps(nextProps) {
    console.log("componentDidMount");
    WeatherAPI.getFiveDayForecast(nextProps.routeParams.city)
      .then(function(forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        })
      }.bind(this))
  },

  render: function() {
    return (
      <div style={styles}>
        <Forecast
          isLoading={this.state.isLoading}
          forecastData={this.state.forecastData} />
      </div>
    );
  }

});

module.exports = ForecastContainer;
