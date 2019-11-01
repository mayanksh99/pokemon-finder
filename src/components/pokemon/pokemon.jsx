import React, { Component } from "react";
import "./style.css";

class Pokemon extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="fluid-container">
          <div className="main">
            <div className="container">
              <div className="col-lg-6 mx-auto pt-4">
                <input class="form-control" type="text" placeholder="Search" />
              </div>
              <div className="row mt-5">
                <div className="col-lg-3">
                  <div className="card">
                    <div className="img-container">
                      <img
                        src="./background.jpg"
                        alt=""
                        height="20px"
                        weidth="20px"
                      />
                    </div>
                    <div className="col-lg-6 mx-auto">Name</div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">Hello</div>
                </div>
                <div className="col-lg-3">
                  <div className="card">Hello</div>
                </div>
                <div className="col-lg-3">
                  <div className="card">Hello</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pokemon;
