import "./index.css";

const DeleteModal = ({ id, handleDelete }) => {
  const closeModal = () => {
    document.querySelector(".modal").classList.add("hidden");
  };

  return (
    <div onClick={closeModal} className="modal delete-modal  hidden">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <div className="delete-title">
          <h1>Delete</h1>
        </div>
        <div className="message-container">
          <p>Are you sure you want to delete user?</p>
        </div>
        <div className="btn-wrapper">
          <button onClick={closeModal} className="btn btn-cancel">
            Cancel
          </button>
          <button onClick={() => handleDelete(id)} className="btn btn-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
