import React from "react";

import Game3d from "../components/game3d";
import browseGameStyles from "./styles/browseGameCard.module.scss";

export default function BrowseGameCard(props) {
    const { file } = props
  return (
    <div className={browseGameStyles.card}>
      <Game3d animate={1} file={file} />
      <span>Gunners Game</span>
      <div className={browseGameStyles.bottom}>
          <h3>1 avax</h3> <button>buy</button>
      </div>
    </div>
  );
}