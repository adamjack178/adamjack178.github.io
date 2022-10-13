import React from "react";

import Console3d from "./console3d";
import buyStyles from "./styles/buy.module.scss";

export default function Buy(props) {
  const { close } = props;

  return (
    <div className={buyStyles.container}>
      <div className={buyStyles.header}>
        <h2>Consoles</h2>
        <h2>Games</h2>
      </div>
      <div className={buyStyles.objectContainer}>
        <Console3d animate={1} file={"/consoleModal.glb"}/>
      </div>
      <div className={buyStyles.btnContainer}>
        <button
          className={buyStyles.closeBtn}
          onKeyDown={close}
          onClick={close}
        >
          CLOSE
        </button>
        <button className={buyStyles.buyBtn}>BUY</button>
      </div>
    </div>
  );
}
