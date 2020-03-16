import React from "react";

import styles from "./Tag.module.css";

const Tag = ({ tagName }) => {
  return <button className={styles.wrapper}>{tagName}</button>;
};

export default Tag;
