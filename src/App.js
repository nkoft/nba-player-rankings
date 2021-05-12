import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import Player from "./components/Players";

function App() {
  const [players, setPlayers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const resp = await axios.get(baseURL, config);
      resp.data.records.sort((firstEl, secondEl) => {
        return firstEl.fields.rank - secondEl.fields.rank;
      });
      setPlayers(resp.data.records);
    };
    fetchPlayerData();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <h1>NBA Player Rankings</h1>
      <Route exact path="/">
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
              {players.map((player, index) => (
                <Player
                  key={index}
                  player={player}
                  setToggleFetch={setToggleFetch}
                />
              ))}
            </tbody>
          </table>
        </main>
      </Route>
      <Route path="/new">
        <Form />
      </Route>
    </div>
  );
}

export default App;
