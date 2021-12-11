import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import easyNumberFormatter from "easy-number-formatter";
import { useEffect, useState } from "react";
import axios from "axios";

const CountryDetail = ({ results }) => {
  let { capital } = useParams();
  let history = useHistory();
  const [weather, setWeather] = useState(null);

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
    <div className="country-detail">
      <div className="country-detail-content">
        <h1>{country.name}</h1>
        {weather && (
          <p>
            The weather in capital <strong>{country.capital}</strong> at the
            moment is:{weather.main.temp} degrees.
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="weatherImg"
            />
            <p>
              TimeZone:{country.timezones}
              {country.timezones.map((time) => time.name).join(", ")}
            </p>
            <p>Calling Codes:+{country.callingCodes}</p>
            <p>Region:{country.region}</p>
            <p>Time Zone:{weather.timezone}</p>
          </p>
        )}
        <p>
          {country.languages.length > 1
            ? "Languages Spoken: "
            : "Language Spoken: "}
          {country.languages.map((l) => l.name).join(", ")}
        </p>
        {country.currencies.length > 0 && (
          <p>
            {country.currencies.length > 1 ? "Currencies: " : "Currency: "}
            {country.currencies.map((curr) => curr.name).join(", ")}
          </p>
        )}
        <p>
          Population: {easyNumberFormatter.formatNumber(country.population)}
        </p>
        ;
      </div>
      <div>
        <button
          className="country-detail-button"
          onClick={() => history.goBack()}
        >
          Back to animals
        </button>
      </div>
    </div>
  );
};

export default CountryDetail;
