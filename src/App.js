import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { baseURL, config } from "./services";
import Players from "./components/Players";

function App() {
  const [players, setPlayers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const resp = await axios.get(baseURL, config);
      setPlayers(resp.data.records);
      console.log(resp);
    };
    fetchPlayerData();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <h1>NBA Player Rankings</h1>
      <Route exact path="/">
        <main>
          {players.map((player) => (
            <Players player={player} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
    </div>
  );
}

export default App;
