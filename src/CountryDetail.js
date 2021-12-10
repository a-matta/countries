import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import easyNumberFormatter from "easy-number-formatter";
import { useEffect, useState } from "react";
import axios from "axios";

const CountryDetail = ({ results }) => {
  let { capital } = useParams();
  let history = useHistory();
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [capital]);

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
      <p>
        TimeZone:{country.timezones}
        {country.timezones.map((time) => time.name).join(", ")}
      </p>
      <p>Calling Codes:{country.callingCodes}</p>
      <p>Region:{country.region}</p>
      <p>{JSON.stringify(weather, null, 4)}</p>
    </div>
  );
};

export default CountryDetail;

/*
capital : country name
flag,
currency
language 
pop
timezones,callingCodes,region
*/
