import React from "react";

import rankingStyles from "./styles/ranking.module.scss";
import info from "./assets/info.svg";
import one from "./assets/1.svg";
import two from "./assets/2.svg";
import three from "./assets/3.svg";

export default function Ranking(props) {
  const { close } = props;
  return (
    <div className={rankingStyles.container}>
      <div className={rankingStyles.header}>
        <h3 className={rankingStyles.title}>Leaderboard</h3>
        <div className={rankingStyles.infoSection}>
          <span>How it works</span>
          <img className={rankingStyles.info} src={info} alt="info icon" />
        </div>
      </div>
      <h4 className={rankingStyles.gameName}>Game Name</h4>
      <div className={rankingStyles.topThree}>
        <div className={rankingStyles.numberTwo}>
          <img src={two} alt="number 2 ranked" />
          <p>✨</p>
          <span>0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92</span>
        </div>
        <div className={rankingStyles.numberOne}>
          <p>🏆</p>
          <img src={one} alt="number 1 ranked" />
          <span>0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92</span>
        </div>
        <div className={rankingStyles.numberThree}>
          <img src={three} alt="number 3 ranked" />
          <p>🎉</p>
          <span>0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92</span>
        </div>
      </div>
      <div className={rankingStyles.rankList}>
        <div className={rankingStyles.rankSpot}>
          <div className={rankingStyles.number}>4.</div>{" "}
          <div className={rankingStyles.address}>
            0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92
          </div>
        </div>
        <div className={rankingStyles.rankSpot}>
          <div className={rankingStyles.number}>5.</div>{" "}
          <div className={rankingStyles.address}>
            0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92
          </div>
        </div>
        <div className={rankingStyles.rankSpot}>
          <div className={rankingStyles.number}>6.</div>{" "}
          <div className={rankingStyles.address}>
            0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92
          </div>
        </div>
        <div className={rankingStyles.rankSpot}>
          <div className={rankingStyles.number}>7.</div>{" "}
          <div className={rankingStyles.address}>
            0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92
          </div>
        </div>
        <div className={rankingStyles.rankSpot}>
          <div className={rankingStyles.number}>8.</div>{" "}
          <div className={rankingStyles.address}>
            0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92
          </div>
        </div>
        <div className={rankingStyles.rankSpot}>
          <div className={rankingStyles.number}>9.</div>{" "}
          <div className={rankingStyles.address}>
            0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92
          </div>
        </div>
        <div className={rankingStyles.rankSpot}>
          <div className={rankingStyles.number}>10.</div>{" "}
          <div className={rankingStyles.address}>
            0x2490D5F4b2AB1006Fd9EA03DDB0cb461cc488D92
          </div>
        </div>
        <button
        className={rankingStyles.closeBtn}
        onKeyDown={close}
        onClick={close}
      >
        CLOSE
      </button>
      </div>
     
    </div>
  );
}
