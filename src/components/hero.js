import React, { useRef } from "react";
import Popup from "reactjs-popup";
import Typewriter from "typewriter-effect";

import Console3d from "./console3d";
import Buy from "./buy";
import heroStyles from "./styles/hero.module.scss";

export default function Hero() {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.typewriter}>
        <h1>Welcome to the STATION3</h1>
        <h2>Game as a Service</h2>
        <Typewriter
          options={{
            strings: ["Play!", "Enjoy!", "Get your pass!"],
            autoStart: true,
            loop: true,
            deleteSpeed: 3,
            delay: 70,
          }}
        />
      </div>

      <div className={heroStyles.mainContent}>
        <div className={heroStyles.console}>
          <Console3d file={"/console.glb"} />
          <div className={heroStyles.typewriterMobile}>
            <Typewriter
              options={{
                strings: [
                  "Welcome to the Station3!",
                  "Game as Service",
                  "Play!",
                  "Enjoy!",
                  "Get your pass!",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 3,
                delay: 70,
              }}
            />
          </div>
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
            {/* <button className={heroStyles.getCheatsBtn}>GET $CHEATS</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
