import CountryCard from "./CountryCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <div>Create HOME page component</div>
          </Route>
          <Route exact path="/about">
            <div>Create ABOUT page component</div>
          </Route>
          <Route path="/countries">
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
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
