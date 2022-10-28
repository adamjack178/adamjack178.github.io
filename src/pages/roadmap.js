import React from "react";
import RoadmapCard from "../components/roadmapCard";

import roadmapStyles from "./styles/roadmap.module.scss";

export default function Roadmap() {
  return (
    <div className={roadmapStyles.container}>
      <RoadmapCard
        number={1}
        title={"Website Launch"}
        description={"Lorem ipsum dolor, sit amet"}
        quarter={'Q4'}
        year={2022}
      />
      <RoadmapCard
        number={2}
        title={"Some Title"}
        description={"Lorem ipsum dolor, sit amet"}
        quarter={'Q1'}
        year={2023}
      />
      <RoadmapCard
        number={3}
        title={"Some Title"}
        description={"Lorem ipsum dolor, sit amet"}
        quarter={'Q2'}
        year={2023}
      />
      <RoadmapCard
        number={4}
        title={"Some Title"}
        description={"Lorem ipsum dolor, sit amet"}
        quarter={'Q3'}
        year={2023}
      />
    </div>
  );
}
