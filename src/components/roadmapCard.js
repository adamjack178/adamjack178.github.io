import React from "react";
import Circle from "./circle";

import roadmapCStyles from "./styles/roadmapCard.module.scss";

export default function RoadmapCard(props) {
  const { number, title, description, quarter, year } = props;
  return (
    <div className={roadmapCStyles.container}>
      <div className={roadmapCStyles.circleContainer}>
        <Circle />
        <span className={roadmapCStyles.number}>{number}</span>
      </div>

      <p>Phase {number}:</p>
      <h3>{title}</h3>
      <div className={roadmapCStyles.bar}></div>
      <p>Process:</p>

      <h4>{description}</h4>
      <div className={roadmapCStyles.bar}></div>
      <p>Timeframe:</p>
      <span className={roadmapCStyles.timeframe}>{quarter}-{year}</span>
    </div>
  );
}
