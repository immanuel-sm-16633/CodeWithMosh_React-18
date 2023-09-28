import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { CanceledError } from "./services/api-client";
import userService, { Users } from "./services/user-service";
import useUsers from "./Hooks/useUsers";

function App() {
  const { users, setUsers, error, setError, isLoading } = useUsers();

  function handleDelete(user: Users) {
    const OriginalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(OriginalUsers);
    });
  }
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Leo" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: newUser }) => setUsers([newUser, ...originalUsers]))
      .catch((err) => {
        setError(err.message);
        setUsers([...originalUsers]);
      });
  };
  function updateUser(user: Users) {
    const originalState = [...users];
    const updatedUser = { ...user, name: user.name + " !" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalState);
    });
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading ? (
        <div className="spinner-border"></div>
      ) : (
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add User
        </button>
      )}

      <ol className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
