import React, { Component } from "react";
import axios from "axios";
import Card from "../card/card";
import "./style.css";

class Pokemon extends Component {
  state = {
    data: {},
    searchQuery: ""
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=4000"
    );
    this.setState({ data });
  }

  handleChange = query => {
    this.setState({ searchQuery: query });
  };

  filterData = () => {
    let filteredData = this.state.data.results;
    if (this.state.searchQuery)
      filteredData = filteredData.filter(m =>
        m.name.toLowerCase().startsWith(this.state.searchQuery.toLowerCase())
      );
    console.log(filteredData);
    return filteredData;
  };

  render() {
    const result = this.filterData();
    return (
      <React.Fragment>
        <div className="fluid-container">
          <div className="main">
            <div className="container">
              <div className="col-lg-6 mx-auto text-center p-4">
                <h2>Pokemon Finder</h2>
              </div>
              <div className="col-lg-6 mx-auto">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  value={this.state.searchQuery}
                  onChange={e => this.handleChange(e.currentTarget.value)}
                />
              </div>
              <div className="row mt-5">
                {result
                  ? result.slice(0, 20).map((item, i) => (
                      <div className="col-lg-3 mb-4" key={i}>
                        <Card id={i} url={item.url} name={item.name} />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pokemon;
