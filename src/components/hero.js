import React, { useRef } from "react";
import Popup from "reactjs-popup";

import Console3d from "./console3d";
import Buy from "./buy";
import heroStyles from "./styles/hero.module.scss";

export default function Hero() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
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
          <Console3d file={"/console.glb"} />
        </div>
        <div className={heroStyles.heroText}>
          <h1>Bag Boy</h1>
          <p>
            Web3 <br /> Video Game Console
          </p>
          <div className={heroStyles.btnContainer}>
            <Popup
              ref={ref}
              trigger={<button className={heroStyles.getOnBtn}>GET ON</button>}
              p
              modal
            >
              <span>
                <Buy close={closeTooltip}></Buy>
              </span>
            </Popup>
            <button className={heroStyles.getCheatsBtn}>GET $CHEATS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
