import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sorting/sorting.css";

class Select extends Component {
  render() {
    return (
      <div className="select-buttons">
        <Link className="link-enabled" to="/sorting">
          Sorting Algorithms
        </Link>
      </div>
    );
  }
}

export default Select;
