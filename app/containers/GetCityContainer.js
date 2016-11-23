var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var WeatherAPI = require('../utils/WeatherAPI');

var GetCityContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      city: ''
    }
  },

  handleSubmitCity(e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
  },

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.context.router.push('/forecast/' + this.state.city);
    }
  },

  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  },

  render() {
    return (
      <GetCity
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        onKeyPress={this.handleKeyPress}
        city={this.state.city}/>
    );
  }

});

module.exports = GetCityContainer;
