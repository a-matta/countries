import React from "react";
import easyNumberFormatter from "easy-number-formatter";

const CountryCard = ({
  name,
  flags,
  capital,
  languages,
  currencies,
  population,
}) => {
  return (
    <div className="country" key={name}>
      <img src={flags.png} alt="" />
      <div className="country-header">
        <p className="country-name">{name}</p>
        <p className="country-capital">Capital: {capital}</p>
      </div>
      <div className="country-details">
        <p>
          {languages.length > 1 ? "Languages: " : "Language: "}
          {languages.map((l) => l.name).join(", ")}
        </p>
        {currencies.length > 0 && (
          <p>
            {currencies.length > 1 ? "Currencies: " : "Currency: "}
            {currencies.map((curr) => curr.name).join(", ")}
          </p>
        )}
        <p>Population: {easyNumberFormatter.formatNumber(population)}</p>
      </div>
    </div>
  );
};

export default CountryCard;
