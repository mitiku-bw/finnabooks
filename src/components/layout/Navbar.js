import React from "react";
import logo from '../../finnabooks.png'

const Navbar = () => {
  return (
    <div className="container">
      <nav className="row navbar navbar-light bg-light">
        <div className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
          <span className="bluish">Finna</span>Books
        </div>
        <form className="form-inline">
          <input
            className="form-control input-lg"
            type="text"
            id="quick-search"
            placeholder="Search for books by keyword / title / author / ISBN"
            name="quik-search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-search" />
          </button>
          <button className="btn btn-default" type="submit">
            Advanced Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
