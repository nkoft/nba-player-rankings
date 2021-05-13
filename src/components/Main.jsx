import Player from "./Player";

function Main(props) {
  return (
    <main>
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
    </main>
  );
}

export default Main;
