import React from "react";
import Difficulty from "../../atoms/Difficulty/Difficulty";
import Popularity from "../../atoms/Popularity/Popularity";

import styles from "./TrailRating.module.css";

const TrailRating = ({ hike }) => {
  return (
    <div className={styles.wrapper}>
      <Difficulty hike={hike} />
      <Popularity hike={hike} />
    </div>
  );
};

export default TrailRating;
