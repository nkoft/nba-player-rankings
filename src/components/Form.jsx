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
    // if we're editing (we have an id), and our
    // destinations have loaded (we have more than 0)
    if (params.id && props.players.length) {
      // .find() the record with an id that matches our
      // id in params
      const player = props.players.find((player) => player.id === params.id);
      // if we find that record (if it exists)
      if (player) {
        // set the country to that record's country etc..
        setRank(player.fields.rank);
        setName(player.fields.name);
        setTeam(player.fields.team);
        setComments(player.fields.comments);
      }
    }
  }, [props.destinations, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table(rank, name, team, comments);
    // console.log(e);

    await axios.post(
      baseURL,
      { fields: { rank, name, team, comments } },
      config
    );
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit} className="player-form">
      <div className="form-field">
        <label htmlFor="rank">Rank:</label>
        <input
          type="number"
          id="rank"
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
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="team">Team:</label>
        <input
          type="text"
          id="team"
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="comments">Comments:</label>
        <textarea
          placeholder="player notes"
          id="comments"
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
