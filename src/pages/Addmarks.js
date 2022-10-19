import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";
const AddMarks = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    tamil: 0,
    english: 0,
    maths: 0,
    science: 0,
    social: 0,
    session: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { id } = useParams();

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <h3> Add student mark </h3>
      </div>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Tamil</label>
        <input
          type="number"
          id="tamil"
          name="tamil "
          placeholder="tamil"
          value={state.tamil || ""}
          onChange={(e) => setState({ ...state, tamil: e.target.value })}
        ></input>
        <label htmlFor="name">English</label>
        <input
          type="number"
          id="english"
          name="english "
          placeholder="english"
          value={state.english || ""}
          onChange={(e) => setState({ ...state, english: e.target.value })}
        ></input>
        <label htmlFor="name">Maths</label>
        <input
          type="number"
          id="maths"
          name="maths"
          placeholder="maths"
          value={state.maths || ""}
          onChange={(e) => setState({ ...state, maths: e.target.value })}
        ></input>
        <label htmlFor="name">Science</label>
        <input
          type="number"
          id="science"
          name="science "
          placeholder="science"
          value={state.mobileNumber || ""}
          onChange={(e) => setState({ ...state, science: e.target.value })}
        ></input>
        <label htmlFor="name">Social</label>
        <input
          type="number"
          id="science"
          name="science "
          placeholder="science"
          value={state.science || ""}
          onChange={(e) => setState({ ...state, science: e.target.value })}
        ></input>
        <label htmlFor="name">Exam Type</label>
        <select
          style={{ borderColor: "gray", border: "1px solid" }}
          value={state.session}
          onChange={(e) => setState({ ...state, session: e.name })}
        >
          <option name="Quarterly"> Quarterly</option>
          <option name="Half-yearly">Half-yearly </option>
          <option name="Annual">Annual </option>
        </select>

        <input type="submit" value={"Add Mark"}></input>

        <Link to="/">
          <input type="button" value="Go Back"></input>
        </Link>
      </form>
    </div>
  );
};

export default AddMarks;
