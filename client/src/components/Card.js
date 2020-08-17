import React from "react";

const Card = () => {
  return (
    <div className="card mb-5 mx-auto" style={{ width: "400px" }}>
      <div className="card-body text-center">
        <h5 className="card-title">First</h5>
        <h5 className="card-title">Last</h5>
        <h5 className="card-title">Gender</h5>
        <h5 className="card-title">Email</h5>
        <h5 className="card-title">Cell</h5>
      </div>
    </div>
  );
};

export default Card;
