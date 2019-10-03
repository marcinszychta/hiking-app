import React from "react";
import PropTypes from "prop-types";

import styles from "./HomeImage.module.css";

const HomeImage = ({ hikes }) => {
  const imageUrl = require(`../../../images/${hikes.image}.jpg`);

  return <img src={imageUrl} alt="hikeImg" className={styles.image} />;
};

HomeImage.propTypes = {
  hikes: PropTypes.object.isRequired
};

export default HomeImage;
