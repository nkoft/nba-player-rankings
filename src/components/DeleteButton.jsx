const DeleteButton = (props) => {
  return (
    <button
      className="btn-primary"
      onClick={(e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete?")) {
          props.deletePlayer();
        }
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
