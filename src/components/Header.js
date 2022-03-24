import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const { numOfParticipants } = props;

  let location = useLocation();

  return (
    <header id="appHeader">
      <button className="btn-info header-tools-items">
        <NavLink to="/help" className="btn-info">?</NavLink>
      </button>
      <h2 className="header-tools-items">Участников: {numOfParticipants}</h2>
      {location.pathname == "/" ? (
        <button className="btn-route header-tools-items">
          <NavLink to="/comments">Комментарии</NavLink>
        </button>
      ) : (
        <button className="btn-route header-tools-items">
          <NavLink to="/">Главная</NavLink>
        </button>
      )}
    </header>
  );
}
