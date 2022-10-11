import React from "react";

import gameStyles from "./styles/games.module.scss";
import Game3d from "./game3d";

export default function Games() {
  return (
    <div className={gameStyles.container}>
      <h2 className={gameStyles.title}>My Games</h2>
      <div className={gameStyles.gamesContainer}>
        <Game3d />
      </div>
    </div>
  );
}
