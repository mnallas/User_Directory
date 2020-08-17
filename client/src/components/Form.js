import React, { useState } from "react";

const Form = () => {
  const [employeeState, setEmployee] = useState("");
  return (
    <form className="container mb-5">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Search Employee</label>
        <input
          type="email"
          className="form-control mb-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
