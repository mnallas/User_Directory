import React, { useState } from "react";

const Form = () => {
  const [employeeState, setEmployee] = useState("");
  return (
    <form className="container mb-5">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Search Employee</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};

export default Form;
