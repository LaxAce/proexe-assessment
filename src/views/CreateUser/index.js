import "./index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";

// Action
import { createUser } from "../../store/actions/users";

// Component
import Form from "../../component/Form";

const CreateUser = () => {
  const [data, setData] = useState({ id: "", name: "", email: "" });
  const [error, setError] = useState(null);

  const usersState = useSelector((s) => s.users);
  const allUsers = usersState.data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      id: allUsers.length > 0 ? allUsers[allUsers.length - 1].id + 1 : 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name === "") {
      setError("Name is required");
    } else if (!data.email.includes("@")) {
      setError("Email is required");
    } else {
      dispatch(createUser(data));
      setError(null);
      navigate("/");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setData({ id: "", name: "", email: "" });
    setError(null);
    navigate("/");
  };

  return (
    <div className="create-user container">
      <div className="header">
        <h1>Form</h1>
      </div>
      <div className="form-wrapper wrapper">
        <Form
          error={error}
          data={data}
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default CreateUser;
