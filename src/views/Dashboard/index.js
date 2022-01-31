import "./index.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../DeleteModal";

// action
import { getUsers, getUsersCleanup } from "../../store/actions/get-users";

import { deleteUser, allUsers } from "../../store/actions/users";

const dataFromLocalStorage = JSON.parse(localStorage.getItem("data") || "[]");


const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const getUsersState = useSelector((s) => s.getUsers);
  const usersState = useSelector((s) => s.users);
  const dispatch = useDispatch();

  const activeUsers = users ? users : data;

  useEffect(() => {
    setUsers(usersState.data);
  }, [usersState]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (localStorage.getItem('data') == null) {
      if (getUsersState.isSuccessful) {
        const { data } = getUsersState;
        setData(data);
        dispatch(getUsersCleanup());
      } else if (getUsersState.error) {
        dispatch(getUsersCleanup());
      }
    } 
    else {
      setData(dataFromLocalStorage)
      dispatch(allUsers(activeUsers));
    }
  }, [getUsersState]);

  if (data && data.length > 0) {
    localStorage.setItem("data", JSON.stringify(activeUsers));
  }

  const handleModal = (id) => {
    setId(id);
    document.querySelector(".modal").classList.remove("hidden");
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    document.querySelector(".modal").classList.add("hidden");
  };

  return (
    <div className="dashboard container">
       <div className="dashboard-head header">
        <h1>User list</h1>
        <Link to="/create" className="btn">
          Add new
        </Link>
      </div>
      <div className="table-wrapper wrapper">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>City</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
             {activeUsers &&
              activeUsers.length > 0 &&
              activeUsers.map(({ id, name, username, address, email }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{username || "none"}</td>
                  <td>{(address && address.city) || "none"}</td>
                  <td>{email}</td>
                  <td>
                    <Link to={`/edit/${id}`} className="btn btn-edit">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleModal(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
      </tbody>
      </table>
      {activeUsers && activeUsers.length === 0 && <div className="empty">No users found</div>}
      </div>
      <DeleteModal handleDelete={handleDelete} id={id} />
    </div>
  );
};

export default Dashboard;
