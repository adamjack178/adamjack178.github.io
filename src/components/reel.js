import React from "react";

import reel1 from "../components/assets/reel1.png";
import reel2 from "../components/assets/reel2.png";
import reel3 from "../components/assets/reel3.png";
import reel4 from "../components/assets/reel4.png";
import reelStyles from "./styles/reel.module.scss";

export default function Reel() {
  return (
    <div className={reelStyles.container}>
      <img className={reelStyles.reel} src={reel1} alt="reel spot 1" />
      <img className={reelStyles.reel} src={reel2} alt="reel spot 2" />
      <img className={reelStyles.reel} src={reel3} alt="reel spot 3" />
      <img className={reelStyles.reel} src={reel4} alt="reel spot 4" />
    </div>
  );
}
