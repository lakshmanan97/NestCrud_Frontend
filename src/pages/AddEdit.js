import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";
const AddEdit = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    Age: "",
    mobile_Number: "",
    address: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      state.first_name == "" ||
      state.last_name == "" ||
      state.gender == "" ||
      state.Age == "" ||
      state.mobile_Number == "" ||
      state.address == ""
    ) {
      toast.error("Please provide input for each field");
    } else {
      if (!id) {
        axios
          .post("http://localhost:5002/studentmanagement", {
            first_name: state.first_name,
            last_name: state.last_name,
            gender: state.gender,
            Age: state.Age,
            mobile_Number: state.mobile_Number,
            address: state.address,
          })
          .then(() => {
            setState({
              ...state,
              first_name: "",
              last_name: "",
              gender: "",
              Age: "",
              mobile_Number: "",
              address: "",
            });
          })
          .catch((err) => {
            toast.error(err);
          });

        toast.success("Student add Successfully");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        axios
          .put(`http://localhost:5002/studentmanagement/${id}`, {
            first_name: state.first_name,
            last_name: state.last_name,
            gender: state.gender,
            Age: state.Age,
            mobile_Number: state.mobile_Number,
            address: state.address,
          })
          .then((res) => {
            setState({
              ...state,
              first_name: "",
              last_name: "",
              gender: "",
              Age: "",
              mobile_Number: "",
              address: "",
            });
            toast.success("data updated");
          })
          .catch((err) => {
            toast.error(err);
          });

        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    }
  };

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5002/studentmanagement/${id}`)
        .then((res) => setState({ ...res.data }));
    }
  }, [id]);

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName "
          placeholder="Your Name"
          value={state.first_name || ""}
          onChange={(e) => setState({ ...state, first_name: e.target.value })}
        ></input>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName "
          placeholder="Your Last Name"
          value={state.last_name || ""}
          onChange={(e) => setState({ ...state, last_name: e.target.value })}
        ></input>
        <label htmlFor="name">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="Enter gender"
          value={state.gender || ""}
          onChange={(e) => setState({ ...state, gender: e.target.value })}
        ></input>
        <label htmlFor="name">Age</label>
        <input
          type="number"
          id="Age"
          name="Age"
          placeholder="Enter Age"
          value={state.Age || ""}
          onChange={(e) => setState({ ...state, Age: e.target.value })}
        ></input>
        <label htmlFor="name">Mobile Number</label>
        <input
          type="text"
          id="mobile_Number"
          name="mobile_Number "
          placeholder="Enter mobile_Number"
          value={state.mobile_Number || ""}
          onChange={(e) =>
            setState({ ...state, mobile_Number: e.target.value })
          }
        ></input>
        <label htmlFor="name">Address</label>
        <input
          type="text"
          id="address"
          name="address "
          placeholder="Enter address"
          value={state.address || ""}
          onChange={(e) => setState({ ...state, address: e.target.value })}
        ></input>
        <input type="submit" value={id ? "Update" : "Save"}></input>

        <Link to="/">
          <input type="button" value="Go Back"></input>
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
