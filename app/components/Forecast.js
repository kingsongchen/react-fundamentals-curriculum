var React = require('react');
var FiveDay = require('../components/FiveDay');
var PropTypes = React.PropTypes;
var MapUI = require('./MapUI');

var styles = {
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%'
}

var otherstyles = {
  backgroundColor: 'white',
  marginLeft: 'auto'
}

function ForecastUI (props) {
  return (
    <div style={styles}>
      <h1>
        {props.city} in {props.country}
      </h1>
      <div className="row" style={otherstyles}>
        {props.forecast.list.map(function(item){
          return <FiveDay key={item.dt} weatherInfo={item} />
        })}
      </div>
    </div>
  );
}

function Forecast (props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <h1> Loading </h1>
          : <div>
              <ForecastUI
                city={props.forecastData.city.name}
                country={props.forecastData.city.country}
                forecast={props.forecastData} />
              <MapUI
                coord={props.forecastData.city.coord} />
            </div>
      }
    </div>
  )
}

Forecast.propTypes = {
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
