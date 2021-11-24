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
    let searchText = e.target.value.toLowerCase();
    let filteredList = this.state.data.filter((c) =>
      c.name.toLowerCase().includes(searchText)
    );
    this.setState({ results: filteredList });
  };

  render() {
    return (
      <div>
        <h1 className="title">Countries of the World</h1>
        <input
          type="text"
          name="search"
          onChange={this.searchUpdated}
          placeholder="Search by country name ..."
        />
        <div className="countries">
          {this.state.results.map((c) => (
            <div className="country" key={c.name}>
              <img src={c.flags.png} alt="" />
              <div className="country-header">
                <p className="country-name">{c.name}</p>
                <p className="country-capital">Capital: {c.capital}</p>
              </div>
              <div className="country-details">
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
                <p>
                  Population: {easyNumberFormatter.formatNumber(c.population)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
