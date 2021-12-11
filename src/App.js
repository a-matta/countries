import Countries from "./Countries";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";

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
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population,timezones,callingCodes,region"
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
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route
            path="/countries"
            render={(props) => (
              <Countries
                {...props}
                results={results}
                searchUpdated={searchUpdated}
              />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
