import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();

  const users = useSelector((state) => state.users);
  const existingUser = users.userList.filter((userExist) => userExist.id == id);
  const { name, email } = existingUser[0];

  const [updateName, setName] = useState(name);
  const [updateEmail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: name,
        email: email,
      })
    );
    console.log(updateUser);
    navigate("/");
  };
  return (
    <div>
      <h1>Edit data</h1>
      <form onSubmit={handleUpdate}>
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
            value={updateEmail}
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
            value={updateName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
