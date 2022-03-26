import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const { numOfParticipants } = props;

  let location = useLocation();

  return (
    <header id="appHeader">
      <button className="btn-route header-tools-items">
        <NavLink to="/help">?</NavLink>
      </button>
      <h2 className="header-tools-items">Participants: {numOfParticipants}</h2>
      {location.pathname == "/" ? (
        <button className="btn-route header-tools-items">
          <NavLink to="/comments">Comments</NavLink>
        </button>
      ) : (
        <button className="btn-route header-tools-items">
          <NavLink to="/">Home</NavLink>
        </button>
      )}
    </header>
  );
}
