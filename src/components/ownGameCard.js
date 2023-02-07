import React, { useRef } from "react";
import Popup from "reactjs-popup";

import Game3d from "../components/game3d";
import GameInfo from "../components/gameInfo";
import ownGameStyles from "./styles/ownGameCard.module.scss";

export default function OwnGameCard(props) {
  const { file } = props;
  const ref = useRef();
  const closeTooltip = () => ref.current.close();
  return (
    <div className={ownGameStyles.card}>
      <Game3d animate={1} file={file} />
      <span>Gunners Game</span>
      <div className={ownGameStyles.bottom}>
        <Popup
          ref={ref}
          closeOnDocumentClick={false}
          closeOnEscape={false}
          trigger={<button className={ownGameStyles.info}>INFO</button>}
          p
          modal
        >
          <span>
            <GameInfo close={closeTooltip}></GameInfo>
          </span>
        </Popup>{" "}
        <button>PLAY</button>
      </div>
    </div>
  );
}
