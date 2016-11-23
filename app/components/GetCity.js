var React = require('react');
var PropTypes = React.PropTypes;


function GetCity(props) {
  return (
    <form>
      <div className="form-inline">
        <input
          className="form-control"
          onChange={props.onUpdateCity}
          onKeyPress={props.onKeyPress}
          type="text"
          name="search" />
        <button
          type="button"
          className="btn btn-success"
          onClick={props.onSubmitCity}>
            Submit
        </button>
      </div>
    </form>
  );
}

module.exports = GetCity;
