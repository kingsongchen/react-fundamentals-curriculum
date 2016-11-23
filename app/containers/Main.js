var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    backgroundColor: "orange"
  },
  name: {
    display: "inline-block",
    margin: "0 0 0 1em"
  },
  search: {
    float: 'right',
    margin: '2em 2em'
  }
}

var Main = React.createClass({

  render: function() {
    return (
        <div style={styles.container}>
            <div style={styles.name}>
              <h1>Weather Application</h1>
            </div>
            <div style={styles.search}>
              <GetCityContainer />
            </div>
          {this.props.children}
        </div>
    );
  }

});

module.exports = Main;
