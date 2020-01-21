import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/card";
import "./style.css";

function Pokemon() {
  const [state, setState] = useState({
    data: [],
    searchQuery: ""
  });

  async function fetchMyAPI() {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=50"
    );
    console.log(response.data.results);
    setState({ data: response.data.results });
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  function handleChange(query) {
    setState({ searchQuery: query });
  }

  function filterData() {
    let filteredData = state.data;
    if (state.searchQuery)
      filteredData = filteredData.filter(m =>
        m.name.toLowerCase().startsWith(state.searchQuery.toLowerCase())
      );
    return filteredData;
  }

  const result = filterData();
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
                value={state.searchQuery}
                onChange={e => handleChange(e.currentTarget.value)}
              />
            </div>
            <div className="row mt-5">
              {result
                ? result.slice(0, 20).map((item, i) => (
                    <div className="col-lg-3 mb-4" key={i}>
                      <Card url={item.url} name={item.name} />
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

export default Pokemon;
