import React from "react";

const Card = (props) => {
  return (
    <div className="card mb-5 mx-auto" style={{ width: "400px" }}>
      <div className="card-body text-center">
        <h5 className="card-title">{foundUser.name.first}</h5>
        <h5 className="card-title">{foundUser.name.last}</h5>
        <h5 className="card-title">{foundUser.gender}</h5>
        <h5 className="card-title">{foundUser.email}</h5>
        <h5 className="card-title">{foundUser.cell}</h5>
      </div>
    </div>
  );
};

export default Card;
