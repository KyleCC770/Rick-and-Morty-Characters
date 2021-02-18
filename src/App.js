import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Pagination from "./components/ui/Pagination";
import CharacterGrid from "./components/characters/CharacterGrid";
import CharacterEpisodes from "./components/characters/CharacterEpisodes";
import Search from "./components/ui/Search";
import axios from "axios";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character?name=${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Header />
                <Search getQuery={(q) => setQuery(q)} />
                <CharacterGrid isLoading={isLoading} items={items} />
                <Pagination />
              </div>
            )}
          />
          <Route
            exact
            path="/episodes"
            render={() => (
              <CharacterEpisodes items={items} isLoading={isLoading} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
