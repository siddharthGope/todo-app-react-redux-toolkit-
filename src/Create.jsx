import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);
  const navigate = useNavigate();

  const createUserSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name,
        email,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Add a new data</h1>
      <form onSubmit={createUserSubmit}>
        <div className="mb-3">
          <label htmlFor="emailId" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            aria-describedby="emailHelp"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
