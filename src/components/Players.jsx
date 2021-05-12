import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Players(props) {
  const deletePlayer = async () => {
    const specificURL = `${baseURL}/${props.players.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const { team, name, rank, comments } = props.player.fields;

  return (
    <div>
      <h3>{name}</h3>
      <h4>{team}</h4>
      <h4>{comments}</h4>
      <h4>{rank}</h4>
      <button onClick={deletePlayer}>Discard Player</button>
      <Link to={`/edit/${props.player.id}`}>
        <button>Edit Player</button>
      </Link>
    </div>
  );
}
export default Players;
