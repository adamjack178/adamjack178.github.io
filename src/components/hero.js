import React from "react";
import Typewriter from "typewriter-effect";

import Console3d from "./console3d";
import heroStyles from "./styles/hero.module.scss";

export default function Hero(props) {

  const { stations } = props;
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
         
              <button className={heroStyles.getOnBtn} onClick={()=>{stations.buyConsole(1,1)}}>GET ON</button>
      
            {/* <button className={heroStyles.getCheatsBtn}>GET $CHEATS</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
