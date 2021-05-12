import { useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { baseURL, config } from "./services";

function App() {
  useEffect(() => {
    const fetchPlayerData = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp);
    };
    fetchPlayerData();
  });

  return (
    <div className="App">
      <Nav />
      <h1>NBA Player Rankings</h1>
      <Route exact path="/">
        <main>
          <h3>Player. Team. Notes. Rank</h3>
        </main>
      </Route>
    </div>
  );
}

export default App;
