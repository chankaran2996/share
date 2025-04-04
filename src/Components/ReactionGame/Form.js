const Form = ({ setFormData, handleFormSubmit, formData }) => {
    return (
      <div className="form-wrapperr">
        <h2 className="form-titler">Player Details</h2>
        <form onSubmit={handleFormSubmit} className="form-containerr">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="inputr"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="inputr"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Your Age"
            required
            className="inputr"
            value={formData.age}
            onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
          />
          <button type="submit" className="submit-buttonr">
            Start Playing
          </button>
        </form>
      </div>
    );
  };
export default Form;