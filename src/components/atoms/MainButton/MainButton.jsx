import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./MainButton.module.css";

const MainButton = ({
  buttonMsg,
  outline,
  carryOn,
  bottomLocation,
  onClick
}) => {
  const btnClasses = classNames({
    [styles.mainButton]: true,
    [styles.outline]: outline,
    [styles.carryOn]: carryOn,
    [styles.absolutePosition]: bottomLocation
  });

  return (
    <button className={btnClasses} onClick={onClick}>
      {buttonMsg}
    </button>
  );
};

MainButton.propTypes = {
  buttonMsg: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  carryOn: PropTypes.bool,
  bottomLocation: PropTypes.bool,
  onClick: PropTypes.func
};

export default MainButton;
