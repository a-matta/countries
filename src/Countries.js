import React from "react";
import CountryCard from "./CountryCard";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";

const Countries = ({ searchUpdated, results, ...restProps }) => {
  return (
    <Switch>
      <Route exact path={restProps.match.path}>
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
      <Route
        path={`${restProps.match.path}/:capital`}
        render={(props) => <CountryDetail {...props} />}
      />
    </Switch>
  );
};

export default Countries;
