import "./index.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Action
import { updateUser } from "../../store/actions/users";

// Component
import Form from "../../component/Form";

const EditUser = () => {
  const [error, setError] = useState(null);
  const { id } = useParams();
  const usersState = useSelector((s) => s.users);
  const allUsers = usersState.data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser =
    allUsers && allUsers.find((user) => user.id === parseInt(id));

  const [data, setData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      id: currentUser.id,
    });
  };

  const handleSubmit = (e) => {
    const totalData = { ...currentUser, ...data };
    e.preventDefault();

    if (data.name === "") {
      setError("Name is required");
    } else if (!data.email.includes("@")) {
      setError("Email is required");
    } else {
      dispatch(updateUser(totalData));
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
    <div className="edit-user container">
      <div className="header">
        <h1>Edit</h1>
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

export default EditUser;
