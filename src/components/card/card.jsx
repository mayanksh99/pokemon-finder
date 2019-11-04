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

  render() {
    const { name } = this.props;
    const abilities = this.state.data.abilities;

    return (
      <div className="card" style={{ borderRadius: "50px" }}>
        <div className="img-container mx-auto">
          <img
            src={"https://pokeres.bastionbot.org/images/pokemon/2.png"}
            alt=""
            className="img-fluid"
            height="180px"
            width="180px"
          />
        </div>
        <div
          className="name mx-auto m-2"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          {name[0].toUpperCase()}
          {name.slice(1)}
        </div>
        <div className="Ability">Ability</div>
        {abilities
          ? abilities.map((ability, i) => (
              <div className="name m-2" key={i}>
                {ability.ability.name}
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Card;
