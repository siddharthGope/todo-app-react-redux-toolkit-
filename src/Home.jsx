import React from "react";
// step11
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  // step12
  const users = useSelector((state) => state.users.userList); //users from index file reducer

  return (
    <div>
      {/* step10 */}
      <h2>CRUD APP WITH JSON SERVER</h2>
      <Link to="/create">
        <button className="btn btn-success" type="submit">
          Create+
        </button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <button className="btn btn-sm btn-primary">Edit</button>
                </Link>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
