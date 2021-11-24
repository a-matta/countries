import React, { Component } from "react";
import axios from "axios";
import easyNumberFormatter from "easy-number-formatter";
class App extends Component {
  state = {
    data: [], // This is all country list
    results: [], // This is what we display
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((response) => {
        this.setState({ data: response.data, results: response.data });
      });
  }

  searchUpdated = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <h1 className="title">COUNTRIES IN THE WORLD</h1>
        <input
          type="text"
          name="search"
          onChange={this.searchUpdated}
          placeholder="Search.."
        />
        <div className="countries">
          {this.state.results.map((c) => (
            <div className="country" key={c.name}>
              <img src={c.flags.png} alt="" />
              <div>
                <p>{c.name}</p>
                <p>Capital: {c.capital}</p>
              </div>
              <p>
                {c.languages.length > 1 ? "Languages: " : "Language: "}
                {c.languages.map((l) => l.name).join(", ")}
              </p>
              {c.currencies.length > 0 && (
                <p>
                  {c.currencies.length > 1 ? "Currencies: " : "Currency: "}
                  {c.currencies.map((curr) => curr.name).join(", ")}
                </p>
              )}
              <p>Population:{easyNumberFormatter.formatNumber(c.population)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
