import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({
  name,
  flags,
  capital,
  languages,
  currencies,
  population,
}) => {
  return (
    <Link to={`/countries/${capital}`} style={{ textDecoration: "none" }}>
      <div className="country" key={name}>
        <div className="country-header">
          <p className="country-name">{name}</p>
          <p className="country-capital">Capital: {capital}</p>
        </div>
        <div className="country-details">
          <img src={flags.png} alt={name} />
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
