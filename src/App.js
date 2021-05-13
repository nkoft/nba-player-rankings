import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import Main from "./components/Main";
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
      <h1>NBA Player Rankings</h1>
      <Route exact path="/">
        <Main players={players} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form players={players} setToggleFetch={setToggleFetch} />
      </Route>
      <Link to="/new">Create</Link>
      <Footer />
    </div>
  );
}

export default App;
