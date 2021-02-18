import React from "react";
import CharacterItem from "./CharacterItem";

import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.results.map((item) => (
        <Link to="/episodes">
          <CharacterItem key={item.id} item={item}></CharacterItem>
        </Link>
      ))}
    </section>
  );
};
export default CharacterGrid;
