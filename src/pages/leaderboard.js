import React, { useRef } from 'react'
import Popup from 'reactjs-popup'
import Ranking from "../components/ranking";

import leaderStyles from "./styles/leaderboard.module.scss";
import game1 from "../components/assets/game1.jpg";
import game2 from "../components/assets/game2.jpg";

export default function Leaderboard() {
  const ref = useRef()
  const closeTooltip = () => ref.current.close()
  return (
    <div className={leaderStyles.container}>
      <div className={leaderStyles.gameGrid}>
      <Popup
        ref={ref}
        trigger={<img
          className={leaderStyles.gameImg}
          src={game1}
          alt="game style icon"
        />}
        p
        modal
      >
        <span>
          <Ranking close={closeTooltip} />
        </span>
      </Popup>
        <img
          className={leaderStyles.gameImg}
          src={game2}
          alt="game style icon"
        />
        <img
          className={leaderStyles.gameImg}
          src={game1}
          alt="game style icon"
        />
        <img
          className={leaderStyles.gameImg}
          src={game2}
          alt="game style icon"
        />
        <img
          className={leaderStyles.gameImg}
          src={game1}
          alt="game style icon"
        />
        <img
          className={leaderStyles.gameImg}
          src={game2}
          alt="game style icon"
        />
        <img
          className={leaderStyles.gameImg}
          src={game1}
          alt="game style icon"
        />
        <img
          className={leaderStyles.gameImg}
          src={game2}
          alt="game style icon"
        />
      </div>
    </div>
  );
}
