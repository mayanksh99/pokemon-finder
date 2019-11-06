import React, { Component } from "react";
import axios from "axios";
import "./cardStyle.css";

class Card extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const { data } = await axios.get(this.props.url);
    this.setState({ data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps === this.state.data.id) {
      console.log("s");
      const { data } = await axios.get(this.props.url);
      this.setState({ data });
    }
  }

  render() {
    const { name } = this.props;
    const abilities = this.state.data.abilities;
    const { id } = this.state.data;
    return (
      <div className="card card-sec">
        <div className="img-container mt-3 mx-auto">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt=""
            className="img-fluid"
            height="180px"
            width="180px"
          />
        </div>
        <div
          className="badge badge-light name mx-auto mt-3"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          {name[0].toUpperCase()}
          {name.slice(1)}
        </div>
        <div className="m-4">
          <div className=" Ability badge badge-info ml-2" style={{}}>
            Ability
          </div>
          {abilities
            ? abilities.map((ability, i) => (
                <div className="name m-2" style={{ fontWeight: "400" }} key={i}>
                  <li>
                    {ability.ability.name[0].toUpperCase()}
                    {ability.ability.name.slice(1)}
                  </li>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Card;
