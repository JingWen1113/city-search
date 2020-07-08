import React, { Component } from "react";

class Display extends Component {
  render() {
    const zips = this.props.zipCodes.map((zip) => (
      <li className="zip-code-list">{zip}</li>
    )); //creates an array where each zip code from the api is now part of a list

    return <ul className="zip-code-lists">{zips}</ul>; //displays each zipcode in an unordered list
  }
}

export default Display;
