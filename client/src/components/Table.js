import React from "react";

const Table = () => {
  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
