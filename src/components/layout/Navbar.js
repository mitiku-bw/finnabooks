import React, { Component } from "react";
import axios from 'axios'
import { Consumer } from '../../context'
import logo from "../../finnabooks.png";

class Navbar extends Component {
  state = {
    quickSearch: ""
  };

  findBook = (dispatch, e) => {
    e.preventDefault()
    axios.get(`https://api.finna.fi/v1/search?lookfor=${this.state.quickSearch}`)
        .then(res => {
            // this.setState({ quickSearch:res.data.records[0]})
            dispatch({
              type: 'SEARCH_BOOKS',
              payload: res.data.records
            })
        })
        .catch(res => console.log(res.err))
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="container">
        <nav className="row navbar navbar-light bg-light">
          <a
            className="navbar-brand"
            href="/"
            basename={process.env.PUBLIC_URL}
          >
            <img src={logo} alt="logo" />
            <span className="bluish">Finna</span>Books
          </a>
          <Consumer>
            {value => {
              const { dispatch } = value
              return (
                <form className="form-inline" onSubmit={this.findBook.bind(this, dispatch)}>
                  <input
                    className="form-control input-lg"
                    type="text"
                    id="quick-search"
                    placeholder="Search for books by keyword / title / author / ISBN"
                    name="quickSearch"
                    aria-label="Search"
                    value={this.state.quickSearch}
                    onChange={this.onChange.bind(this)}
                  />
                  <button className="btn btn-primary" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button className="btn btn-default" type="submit">
                    Advanced Search
                  </button>
                </form>
              );
            }}
          </Consumer>
        </nav>
      </div>
    );
  }
}

export default Navbar;
