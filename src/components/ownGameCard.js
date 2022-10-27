import React from "react";

import Game3d from "../components/game3d";
import ownGameStyles from "./styles/ownGameCard.module.scss";

export default function OwnGameCard(props) {
    const { file } = props
  return (
    <div className={ownGameStyles.card}>
      <Game3d animate={1} file={file} />
      <span>Gunners Game</span>
      <button>PLAY</button>
    </div>
  );
}
