import React from "react";

import gameStyles from "./styles/games.module.scss";
// import animation from "./assets/game.webm";
import Game3d from "./game3d";

export default function Games() {
  return (
    <div className={gameStyles.container}>
      <h2 className={gameStyles.title}>My Games</h2>
      <div>
        <Game3d />
        {/* <video
          className={gameStyles.animation}
          src={animation}
          type="video/webm"
          autoPlay
          loop
          muted
        />
        <video
          className={gameStyles.animation}
          src={animation}
          type="video/webm"
          autoPlay
          loop
          muted
        />
        <video
          className={gameStyles.animation}
          src={animation}
          type="video/webm"
          autoPlay
          loop
          muted
        /> */}
      </div>
    </div>
  );
}
