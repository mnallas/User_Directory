import React from "react";

const Table = (props) => {
  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
        {props.children}
      </table>
    </div>
  );
};

export default Table;
