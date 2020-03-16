import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Like from "../../atoms/Like/like";
import clock from "../../../images/icons/1.png";
import elevation from "../../../images/icons/2.png";
import distance from "../../../images/icons/3.png";

import styles from "./TrailBadge.module.css";

const TrialBadge = ({ hikes, onLike, liked, home, selected }) => {
  const wrapperClasses = classNames({
    [styles.wrapper]: home,
    [styles.wrapper2]: selected
  });

  const horizontalLineClasses = classNames({
    [styles.horizontalLine]: home,
    [styles.horizontalLine2]: selected
  });

  return (
    <div className={wrapperClasses}>
      <div className={styles.topContainer}>
        <p>{hikes.name}</p>
        <Like liked={liked} onClick={() => onLike(hikes)} />
      </div>
      <div className={horizontalLineClasses} />
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
  liked: PropTypes.bool,
  home: PropTypes.bool,
  selected: PropTypes.bool
};

export default TrialBadge;
