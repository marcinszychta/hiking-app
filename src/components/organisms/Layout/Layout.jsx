import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Layout.module.css";

const Layout = ({ children, lightOrange }) => {
  const layoutClasses = classNames({
    [styles.layout]: true,
    [styles.lightOrangeLayout]: lightOrange
  });
  return <div className={layoutClasses}>{children}</div>;
};

Layout.propTypes = {
  lightOrange: PropTypes.bool
};

export default Layout;
