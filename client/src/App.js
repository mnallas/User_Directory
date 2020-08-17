import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form.js";
import Table from "./components/Table";

function App() {
  const [employee, setEmployee] = useState([]);
  const renderEmployees = () => {
    axios.get("https://randomuser.me/api/?results=20&nat=us").then((res) => {
      console.log(res);
      setEmployee(res.data.results);
    });
  };

  useEffect(() => {
    renderEmployees();
  }, []);
  return (
    <div className="App">
      <Form />
      <Table employee={employee} />
    </div>
  );
}

export default App;
