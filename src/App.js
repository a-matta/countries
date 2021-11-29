import CountryCard from "./CountryCard";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);

  let searchUpdated = (e) => {
    let searchText = e.target.value.toLowerCase();
    let filteredList = data.filter((c) =>
      c.name.toLowerCase().includes(searchText)
    );
    setResults(filteredList);
  };

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((response) => {
        setData(response.data);
        setResults(response.data);
      });
  }, []);

  return (
    <div>
      <h1 className="title">Countries of the World</h1>
      <input
        type="text"
        name="search"
        onChange={searchUpdated}
        placeholder="Search by country name ..."
      />
      <div className="countries">
        {results.map((c) => (
          <CountryCard {...c} key={c.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
