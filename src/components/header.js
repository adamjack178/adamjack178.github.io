import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import headerStyles from "./styles/header.module.scss";
import logo from "./assets/logo.png";

export default function Header(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { stations } = props;

  return (
    <div className={headerStyles.container}>
      <img className={headerStyles.logo} src={logo} alt="station3 logo" />
      <div className={headerStyles.bar}>
        <nav className={headerStyles.navigation}>
          <button
            className={headerStyles.hamburger}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={
              isNavExpanded
                ? `${headerStyles.navigationMenu} ${headerStyles.expanded}`
                : headerStyles.navigationMenu
            }
          >
            <ul>
              <li>
                <Link className={headerStyles.link} to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className={headerStyles.link} to="/games">
                  GAMES
                </Link>
              </li>
              <li>
                <Link className={headerStyles.link} to="/publishers">
                  PUBLISHERS
                </Link>
              </li>
              <li>
                <Link className={headerStyles.link} to="/roadmap">
                  ROADMAP
                </Link>
              </li>
              <li>
                <Link className={headerStyles.link} to="/arcade">
                  Arcadium
                </Link>
              </li>
            </ul>
          </div>
          <button className={headerStyles.connectBtn} onClick={()=>{stations.connectWallet()}} >Connect Wallet</button>
        </nav>
      </div>
    </div>
  );
}
