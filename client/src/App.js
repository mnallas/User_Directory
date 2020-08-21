import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form.js";
import TableBody from "./components/TableBody";
import Table from "./components/Table";

function App() {
  let employeeArray = [];

  useEffect(() => {
    renderEmployees();
    // eslint-disable-next-line
  }, []);

  const renderEmployees = () => {
    axios.get("https://randomuser.me/api/?results=20&nat=us").then((res) => {
      let userList = res.data.results;
      userList.forEach((user) => {
        employeeArray.push({
          image: user.picture.thumbnail,
          fname: user.name.first,
          lname: user.name.last,
          age: user.dob.age,
          email: user.email,
          cell: user.cell,
        });
      });
      setEmployee([...employeeArray]);
    });
  };

  const [employee, setEmployee] = useState(employeeArray);

  const [search, setSearch] = useState({ name: "" });

  const searchEmployee = (e) => setSearch({ ...search, name: e.target.value });

  // eslint-disable-next-line
  const findEmployee = employee.filter(function (searched) {
    if (search.name.length < 0) {
      return employee;
    } else if (searched.name.includes(search.name)) {
      return searched;
    }
  });

  console.log(employeeArray);
  return (
    <div className="App">
      <Form input={searchEmployee} />
      <Table>
        {findEmployee.map((employee, index) => (
          <TableBody key={index}>{employee}</TableBody>
        ))}
      </Table>
    </div>
  );
}

export default App;
