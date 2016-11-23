var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: 35
}

var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

function getDate (unixTimestmap) {
  var date = new Date(unixTimestmap * 1000);
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

function FiveDay(props) {

  return (
    <div className="col-xs-2 col-lg-1" style={styles}>
      <img style={{height: 130}} src={'./app/images/weather-icons/' + props.weatherInfo.weather[0].icon + '.svg'} alt='Weather' />
      {getDate(props.weatherInfo.dt)}
      <div>{Math.round(props.weatherInfo.temp.day - 273.16)} Degrees</div>
    </div>
  );
}

module.exports = FiveDay;
