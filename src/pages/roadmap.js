import React from "react";
import RoadmapCard from "../components/roadmapCard";

import roadmapStyles from "./styles/roadmap.module.scss";

export default function Roadmap() {
  return (
    <div className={roadmapStyles.container}>
      <RoadmapCard
        number={1}
        title={"The STATION is open!"}
        description={"Website launch, Bag Boy launch, Arcadium Launch"}
        quarter={"Q1"}
        year={2023}
      />
      <RoadmapCard
        number={2}
        title={"STATION3 for y'all"}
        description={"New Arcadium Games, multichain, First Bag Boy game launch"}
        quarter={"Q2"}
        year={2023}
      />
      <RoadmapCard
        number={3}
        title={"Take your Tickect Sir!"}
        description={"$TICKET token launch"}
        quarter={"Q3"}
        year={2023}
      />
      <RoadmapCard
        number={4}
        title={"All aboard the red train!"}
        description={"Expand the STATION 3 ecosystem"}
        quarter={"Q4"}
        year={2023}
      />
    </div>
  );
}
