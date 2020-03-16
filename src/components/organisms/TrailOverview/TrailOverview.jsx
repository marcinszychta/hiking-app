import React from "react";
import PropTypes from "prop-types";

import HomeImage from "../../atoms/HomeImage/HomeImage";
import TrailBadge from "../../molecules/TrailBadge/TrailBadge";

import styles from "./TrailOverview.module.css";

const TrailOverview = ({ hikes, onLike, onHikeChange, liked }) => {
  return (
    <div className={styles.wrapper}>
      <HomeImage hikes={hikes} onHikeChange={onHikeChange} home />
      <TrailBadge hikes={hikes} onLike={onLike} liked={liked} home />
    </div>
  );
};

TrailOverview.propTypes = {
  hikes: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onHikeChange: PropTypes.func.isRequired,
  liked: PropTypes.bool
};

export default TrailOverview;
