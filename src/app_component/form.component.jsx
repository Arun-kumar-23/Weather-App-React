import React from "react";
import "./form.style.css";

const Form = props => {
  return (
      <form onSubmit={props.loadweather}style={{width:"calc(100vw - scrollbarWidth)"}}>
        <div>{props.error ? error() : ""}</div>
        <div className=""style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", flexWrap:"wrap"}} >
          {/* <div className=" "> */}
            <input style={{width:"70%", textAlign:"center", fontSize:"24px"}}
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          {/* </div> */}
          
          
        </div>
      </form>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;