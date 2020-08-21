import React from "react";

const TableBody = ({ image, fname, lname, age, email, cell }) => {
  return (
    <div>
      <tbody>
        <tr>
          <td>
            <img src={image} alt={"no images"} />
          </td>
          <td>{fname}</td>
          <td>{lname}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>{cell}</td>
        </tr>
      </tbody>
    </div>
  );
};

export default TableBody;
