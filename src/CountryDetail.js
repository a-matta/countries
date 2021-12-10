import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import easyNumberFormatter from "easy-number-formatter";

const CountryDetail = ({ results }) => {
  let { capital } = useParams();
  let history = useHistory();

  let country = results.find((r) => r.capital === capital);
  if (!country) {
    return <div>No country Found!</div>;
  }

  return (
    <div>
      <div>{capital}</div>
      <p>
        {country.languages.length > 1 ? "Languages: " : "Language: "}
        {country.languages.map((l) => l.name).join(", ")}
      </p>
      {country.currencies.length > 0 && (
        <p>
          {country.currencies.length > 1 ? "Currencies: " : "Currency: "}
          {country.currencies.map((curr) => curr.name).join(", ")}
        </p>
      )}
      <p>Population: {easyNumberFormatter.formatNumber(country.population)}</p>;
    </div>
  );
};

export default CountryDetail;
