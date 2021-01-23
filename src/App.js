import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import Pagination from "./components/ui/Pagination";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import axios from "axios";
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
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Pagination />
    </div>
  );
};

export default App;
