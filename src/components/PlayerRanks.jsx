import Player from "./Player";

function PlayerRanks(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Team</th>
          <th>Comments</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player, index) => (
          <Player
            key={index}
            player={player}
            setToggleFetch={props.setToggleFetch}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PlayerRanks;
