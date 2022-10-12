import React from "react";

import Console3d from "./console3d";
import heroStyles from "./styles/hero.module.scss";

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
          <Console3d />
        </div>
        <div className={heroStyles.heroText}>
          <h1>Bag Boy</h1>
          <p>
            Web3 <br /> Video Game Console
          </p>
          <div className={heroStyles.btnContainer}>
            <button className={heroStyles.getOnBtn}>GET ON</button>
            <button className={heroStyles.getCheatsBtn}>GET $CHEATS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
