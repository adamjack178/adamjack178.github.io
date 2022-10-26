import React, { useState } from "react";

import OwnGameCard from "../components/ownGameCard";
import BrowseGameCard from "../components/browseGameCard";

import gamesStyles from "./styles/games.module.scss";

export default function Reel() {
  const [current, setCurrent] = useState("games");
  return (
    <div className={gamesStyles.container}>
      <div className={gamesStyles.header}>
        <div>
          {" "}
          <h2
            className={
              current === "games" ? gamesStyles.active : gamesStyles.off
            }
            onClick={() => setCurrent("games")}
          >
            My Games
          </h2>{" "}
        </div>
        <div>
          {" "}
          <h2
            className={
              current === "browse" ? gamesStyles.active : gamesStyles.off
            }
            onClick={() => setCurrent("browse")}
          >
            Browse Games
          </h2>{" "}
        </div>
      </div>
      <div className={gamesStyles.gameGrid}>
        {current === "games" ? (
          <>
            <OwnGameCard file={"/cart.glb"} />
            <OwnGameCard file={"/cart2.glb"} />
            <OwnGameCard file={"/cart3.glb"} />
            <OwnGameCard file={"/cart4.glb"} />
          </>
        ) : (
          <>
            <BrowseGameCard file={"/cart.glb"} />
            <BrowseGameCard file={"/cart2.glb"} />
            <BrowseGameCard file={"/cart3.glb"} />
            <BrowseGameCard file={"/cart4.glb"} />
          </>
        )}
      </div>
    </div>
  );
}
