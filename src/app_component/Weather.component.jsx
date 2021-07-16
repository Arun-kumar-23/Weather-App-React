import React from "react";

const Weather = props => {
  return (
    <div className="container text-light my-5" >
      <div className="Card">
        <h1 className="text-white py-3" style={{fontSize:"36px"}}>{props.city}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}/>
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2" style={{fontSize:"36px"}}>{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="py-3"style={{fontSize:"36px"}}>
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3 style={{fontSize:"36px"}}>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}