import React from "react";
import PropTypes from "prop-types";

import Like from "../../atoms/Like/like";
import clock from "../../../images/icons/1.png";
import elevation from "../../../images/icons/2.png";
import distance from "../../../images/icons/3.png";

import styles from "./TrailBadge.module.css";

const TrialBadge = ({ hikes, onLike, liked }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <p>{hikes.name}</p>
        <Like liked={liked} onClick={() => onLike(hikes)} />
      </div>
      <div className={styles.horizontalLine} />
      <div className={styles.bottomContainer}>
        <div className={styles.badgeInfo}>
          <img src={clock} alt="durationIcon" />
          <p>{hikes.duration} hours</p>
        </div>
        <div className={styles.badgeInfo}>
          <img src={elevation} alt="elevationIcon" />
          <p>{hikes.elevation} meters</p>
        </div>
        <div className={styles.badgeInfo}>
          <img src={distance} alt="distanceIcon" />
          <p>{hikes.distance} km</p>
        </div>
      </div>
    </div>
  );
};

TrialBadge.propTypes = {
  hikes: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  liked: PropTypes.bool
};

export default TrialBadge;
