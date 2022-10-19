import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  console.log(id, "==========id");

  useEffect(() => {
    axios
      .get(`http://localhost:5002/studentmanagement/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Student details</p>
        </div>
        <div className="container">
          <br />
          <strong>first Name: </strong>
          <span>{user.first_name}</span>
          <br />
          <br />
          <strong>Last Name : </strong>
          <span>{user.last_name}</span>
          <br />
          <br />
          <strong>gender </strong>
          <span>{user.gender}</span>
          <br />
          <br />
          <strong>Mobile Number: </strong>
          <span>{user.mobile_Number}</span>
          <br />
          <br />
          <strong>Address: </strong>
          <span>{user.address}</span>
          <br />
          <br />
          <strong>Age: </strong>
          <span>{user.Age}</span>
          <br />
          <br />
          <Link to="/">
            <div className="btn btn-edit">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
