import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  const LoadData = async () => {
    const response = await axios.get("http://localhost:5002/studentmanagement");
    setData(response.data);
  };

  useEffect(() => {
    LoadData();
  }, []);

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure to delete student")) {
      axios.delete(`http://localhost:5002/studentmanagement/${id}`);
      toast.success("student delete successfully");
      setTimeout(() => {
        LoadData();
      }, 500);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to={"/addcontact"}>
        <button className="btn btn-contact"> Add Student</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>First Name</th>
            <th style={{ textAlign: "center" }}>Last Name</th>
            <th style={{ textAlign: "center" }}>gender</th>
            <th style={{ textAlign: "center" }}>Age</th>
            <th style={{ textAlign: "center" }}>mobileNumber</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        {Object.keys(data).length != 0 ? (
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.gender}</td>
                  <td>{item.Age}</td>
                  <td>{item.mobile_Number}</td>
                  <td>{item.address}</td>

                  <td>
                    <Link to={`/update/ ${parseInt(item.id)}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => deleteStudent(parseInt(item.id))}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${parseInt(item.id)}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : null}
      </table>
      {Object.keys(data).length == 0 ? (
        <div>
          <p> No student data found please add student</p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
