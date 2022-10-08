import React from "react";

import heroStyles from "./styles/hero.module.scss";
import console from "./assets/boy.png";

export default function Hero() {
  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.trending}>
        <h2>On Fire 🔥</h2>
        <p>
          #1 The Legend of Emin <span>🎮</span>
        </p>
        <p>
          #2 Super Degen Bros <span>🎮</span>
        </p>
        <p>
          #3 Ape & Me <span>🎮</span>
        </p>
      </div>

      <div className={heroStyles.mainContent}>
        <div className={heroStyles.console}>
          <img src={console} alt="station3 gaming console" />
        </div>
        <div className={heroStyles.heroText}>
          <h1>WEB3 CONSOLE</h1>
          <p>Gaming redesigned</p>
          <div className={heroStyles.btnContainer}>
            <button className={heroStyles.getOnBtn}>GET ON</button>
            <button className={heroStyles.getCheatsBtn}>GET $CHEATS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
