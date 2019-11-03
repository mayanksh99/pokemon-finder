import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Pokemon from "./components/pokemon/pokemon";

class App extends Component {
  state = {
    names: []
  };

  async componentDidMount() {
    const { data: names } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=4000"
    );
    this.setState({ names });
    console.log(names.results[0]);
  }

  render() {
    return <Pokemon />;
  }
}

export default App;
