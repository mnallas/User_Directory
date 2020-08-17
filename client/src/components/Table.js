import React from "react";

const Table = (props) => {
  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
        <tbody>
          {props.employee.map((element, index) => (
            <tr key={index}>
              <td>{element.name.first}</td>
              <td>{element.name.last}</td>
              <td>{element.gender}</td>
              <td>{element.email}</td>
              <td>{element.cell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
