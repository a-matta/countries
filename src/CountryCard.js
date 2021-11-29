import React from "react";
import easyNumberFormatter from "easy-number-formatter";

const CountryCard = (props) => {
  return (
    <div className="country" key={props.name}>
      <img src={props.flags.png} alt="" />
      <div className="country-header">
        <p className="country-name">{props.name}</p>
        <p className="country-capital">Capital: {props.capital}</p>
      </div>
      <div className="country-details">
        <p>
          {props.languages.length > 1 ? "Languages: " : "Language: "}
          {props.languages.map((l) => l.name).join(", ")}
        </p>
        {props.currencies.length > 0 && (
          <p>
            {props.currencies.length > 1 ? "Currencies: " : "Currency: "}
            {props.currencies.map((curr) => curr.name).join(", ")}
          </p>
        )}
        <p>Population: {easyNumberFormatter.formatNumber(props.population)}</p>
      </div>
    </div>
  );
};

export default CountryCard;
