import React from "react";

import headerStyles from "./styles/header.module.scss";
import logo from "./assets/logo.png";

const Header = () => (
  <div className={headerStyles.container}>
    <img className={headerStyles.logo} src={logo} alt="station3 logo" />
    <div className={headerStyles.bar}>
      <div className={headerStyles.barContent}>
        <h2>HOME</h2>
        <h2>CONSOLES</h2>
        <h2>GAMES</h2>
        <h2>PUBLISHERS</h2>
        <h2>ROADMAP</h2>
      </div>
    </div>
  </div>
);

export default Header;
