import React from "react";
import { useParams } from "react-router-dom";

const CharacterEpisodes = ({ items = { results: [] } }) => {
  const { id } = useParams();
  const episodes =
    items?.results && items.results.filter((el) => el.id.toString === id)[0];
  const episodeList = episodes?.episode
    ? episodes.episode.map((ep, i) => {
        <li key={i}>
          <a href={ep}>{ep}</a>
        </li>;
      })
    : [];
  console.log(items.results);
  return (
    <div>
      <ul>
        {episodeList.length > 0 ? episodeList : <li>Loading Episodes...</li>}
      </ul>
    </div>
  );
};

export default CharacterEpisodes;
