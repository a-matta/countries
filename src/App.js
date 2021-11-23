import React, { Component } from "react";
import axios from "axios";
import easyNumberFormatter from "easy-number-formatter";
class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((response) => {
        this.setState({ data: response.data });
      });
  }

  render() {
    console.log("1", this.state.data);
    return (
      <div className="countries">
        {this.state.data.map((c) => (
          <div className="country" key={c.name}>
            <p> Name: {c.name}</p>
            <p>Capital:{c.capital}</p>
            <img src={c.flags.png} />
            {c.languages.map((lang) => (
              <p key={lang.name}>Language(s):{lang.name}</p>
            ))}
            {c.currencies.map((curr) => (
              <p key={curr.name}>Currencies(s):{curr.name}</p>
            ))}
            <p>Population:{easyNumberFormatter.formatNumber(c.population)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
