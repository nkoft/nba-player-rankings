import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Form(props) {
  const [rank, setRank] = useState(0);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [comments, setComments] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.id && props.players.length) {
      const player = props.players.find((player) => player.id === params.id);

      if (player) {
        setRank(player.fields.rank);
        setName(player.fields.name);
        setTeam(player.fields.team);
        setComments(player.fields.comments);
      }
    }
  }, [props.players, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const specificURL = `${baseURL}/${params.id}`;
      await axios.put(
        specificURL,
        { fields: { rank, name, team, comments } },
        config
      );
    } else {
      await axios.post(
        baseURL,
        { fields: { rank, name, team, comments } },
        config
      );
    }
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit} className="player-form">
      <div className="form-field">
        <label htmlFor="rank">Rank:</label>
        <input
          type="number"
          id="rank"
          value={rank}
          onChange={(e) => {
            const rankInt = parseInt(e.target.value);
            setRank(rankInt);
          }}
        />
      </div>
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="team">Team:</label>
        <input
          type="text"
          id="team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="comments">Comments:</label>
        <textarea
          placeholder="player notes"
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
