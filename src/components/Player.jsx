import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

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

        <DeleteButton deletePlayer={deletePlayer} />
      </td>
    </tr>
  );
}
export default Player;
