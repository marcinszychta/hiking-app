import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./HomeImage.module.css";

const HomeImage = ({ hikes, onHikeChange, home, selected }) => {
  const homeImageClasses = classNames({
    [styles.homeImage]: home,
    [styles.selectedImage]: selected
  });

  const imageUrl = require(`../../../images/${hikes.image}.jpg`);

  return (
    <img
      src={imageUrl}
      alt="hikeImg"
      className={homeImageClasses}
      onClick={onHikeChange}
    />
  );
};

HomeImage.propTypes = {
  hikes: PropTypes.object.isRequired,
  onHikeChange: PropTypes.func,
  home: PropTypes.bool,
  selected: PropTypes.bool
};

export default HomeImage;
