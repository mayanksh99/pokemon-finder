import React, { Component } from "react";
import axios from "axios";
import Card from "../card/card";
import "./style.css";

class Pokemon extends Component {
  state = {
    names: []
  };

  async componentDidMount() {
    const { data: names } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=4000"
    );
    this.setState({ names });
    console.log(names.results[0].url[34]);
  }

  render() {
    const result = this.state.names.results;
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
                />
              </div>
              <div className="row mt-5">
                {result
                  ? result.slice(0, 20).map(item => (
                      <div className="col-lg-3">
                        <Card key={item.url[34]} name={item.name} />
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
