function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit} className="player-form">
      <div className="form-field">
        <label htmlFor="rank">Rank:</label>
        <input type="number" />
      </div>
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input type="text" />
      </div>
      <div className="form-field">
        <label htmlFor="team">Team:</label>
        <input type="text" />
      </div>
      <div className="form-field">
        <label htmlFor="comments">Comments:</label>
        <textarea placeholder="player notes" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
