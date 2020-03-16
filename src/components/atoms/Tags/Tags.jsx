import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Tags.module.css";

const Tag = ({
  horizontal,
  tagName1,
  tagName2,
  tagName3,
  tagName4,
  tagName5,
  tagName6,
  tagName7,
  tagName8,
  tagName9,
  tagName10
}) => {
  const [tags, setTags] = useState([
    { id: 1, name: `${tagName1}` },
    { id: 2, name: `${tagName2}` },
    { id: 3, name: `${tagName3}` },
    { id: 4, name: `${tagName4}` },
    { id: 5, name: `${tagName5}` },
    { id: 6, name: `${tagName6}` },
    { id: 7, name: `${tagName7}` },
    { id: 8, name: `${tagName8}` },
    { id: 9, name: `${tagName9}` },
    { id: 10, name: `${tagName10}` }
  ]);

  const tagContainer = classNames({
    [styles.veritcal]: true,
    [styles.horizontal]: horizontal
  });

  const handleDelete = tag => {
    const newTags = tags.filter(t => t.id !== tag.id);
    setTags(newTags);
  };

  return (
    <div className={tagContainer}>
      {tags
        .filter(t => t.name !== "undefined")
        .map(tag => (
          <div className={styles.wrapper} key={tag.id}>
            <p>{tag.name}</p>
            <div
              className={styles.iconWrapper}
              onClick={() => handleDelete(tag)}
            >
              <div className={styles.line1} />
              <div className={styles.line2} />
            </div>
          </div>
        ))}
    </div>
  );
};

Tag.propTypes = {
  horizontal: PropTypes.bool,
  tagName1: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  tagName2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName4: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName5: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName6: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName7: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName8: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName9: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tagName10: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Tag;
