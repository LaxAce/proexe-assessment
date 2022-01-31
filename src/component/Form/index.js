import "./index.css";

const Form = ({ handleSubmit, handleInput, handleCancel, error, data }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="name input-field">
          <label htmlFor="name">Name</label>
          <input
            className="input"
            type="name"
            name="name"
            value={data.name}
            onChange={handleInput}
          />
        </div>
        {error && error.includes("Name") && (
          <div className="error">{error}</div>
        )}
        <div className="space"></div>
        <div className="email input-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleInput}
          />
        </div>
        {error && error.includes("Email") && (
          <div className="error">{error}</div>
        )}
        <div className="space"></div>
        <div className="btn-wrapper">
          <button
            type="button"
            className="btn btn-cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="btn btn-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
