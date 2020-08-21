import React from "react";

const Form = (props) => {
  return (
    <form className="container mb-5">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Search Employee</label>
        <input
          onChange={props.input}
          className="form-control mb-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};

export default Form;
