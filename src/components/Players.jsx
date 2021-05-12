import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Player(props) {
  const deletePlayer = async () => {
    const specificURL = `${baseURL}/${props.player.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { team, name, rank, comments } = props.player.fields;

  return (
    <tr>
      <td>{rank}</td>
      <td>{name}</td>
      <td>{team}</td>
      <td>{comments}</td>
      <td>
        <Link to={`/edit/${props.player.id}`}>Edit</Link>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm("Are you sure you want to delete?")) {
              deletePlayer();
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default Player;
