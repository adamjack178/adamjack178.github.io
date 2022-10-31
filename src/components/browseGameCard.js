import React, { useRef } from "react";
import Popup from "reactjs-popup";

import Game3d from "../components/game3d";
import GameInfo from "../components/gameInfo";
import browseGameStyles from "./styles/browseGameCard.module.scss";

export default function BrowseGameCard(props) {
  const { file } = props;
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div className={browseGameStyles.card}>
      <Game3d animate={1} file={file} />
      <span>Gunners Game</span>
      <div className={browseGameStyles.bottom}>
        <Popup
          ref={ref}
          trigger={<button className={browseGameStyles.info}>INFO</button>}
          p
          modal
        >
          <span>
            <GameInfo close={closeTooltip}></GameInfo>
          </span>
        </Popup>
        <button>buy</button>
      </div>
      <h3>1 AVAX</h3>
    </div>
  );
}
