var React = require('react');
var axios = require('axios');
var PropTypes = React.PropTypes;
var key = 'dbd9cc081bfd5fb3d9dd463e8fbd0f2a';

var WeatherAPI = {

  getCurrentWeather: function(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=' + key)
    .then(function (forecastData) {
      return forecastData.data
    })
  },

  getFiveDayForecast: function(city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + key +'&cnt=5')
    .then(function (forecastData) {
      return forecastData.data
    })
  }

};

module.exports = WeatherAPI;
