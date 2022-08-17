import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/note.png";
function Nav() {
  const count = useSelector((state) => state.NotesReduce.count);
  return (
    <div className="navbars w-100">
      <nav className="navbar navbar-expand-lg bg-light w-100">
        <div className="container w-100">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="logo"></img>
            Notes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" aria-current="page" to="ALLNotes">
                You Have
                <span>{count}</span>
                Notes
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
