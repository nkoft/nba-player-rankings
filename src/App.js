import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import PlayerRanks from "./components/PlayerRanks";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

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
      <header>
        <Nav />
      </header>
      <Route exact path="/">
        <main>
          <PlayerRanks players={players} setToggleFetch={setToggleFetch} />
          <div className="controls">
            <Link to="/new" className="btn-primary">
              Add Player
            </Link>
          </div>
        </main>
      </Route>
      <Route path="/new">
        <div className="form-page">
          <h2>Add Player</h2>
          <Form setToggleFetch={setToggleFetch} />
        </div>
      </Route>
      <Route path="/edit/:id">
        <div className="form-page">
          <h2>Edit Player</h2>
          <Form players={players} setToggleFetch={setToggleFetch} />
        </div>
      </Route>

      <Footer />
    </div>
  );
}

export default App;
