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
      <div className="country-header">
        <p className="country-name">{name}</p>
        <p className="country-capital">Capital: {capital}</p>
      </div>
      <div className="country-details">
        <img src={flags.png} alt={name} />
      </div>
    </div>
  );
};

export default CountryCard;
