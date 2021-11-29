import CountryCard from "./CountryCard";
import React, { Component } from "react";
import axios from "axios";

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
            <CountryCard {...c} key={c.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
