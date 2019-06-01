/* Class component */

import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  state = {
    filterQuery: ""
  };

  handleInput = ({ target }) => {
    const { value } = target;

    this.setState({
      filterQuery: value
    });
  };

  updateFilter = () => {
    // TODO: Update filterQuery on global state
  };

  render() {
    const { filterQuery } = this.state;

    return (
      <header className="Filter">
        <h1>Properties</h1>
        <div className="input-field">
          <input
            placeholder="Filter properties"
            value={filterQuery}
            onChange={this.handleInput}
          />
          <button>Filter</button>
        </div>
      </header>
    );
  }
}

export default Header;
