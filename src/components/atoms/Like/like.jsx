import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as hrt } from "@fortawesome/free-solid-svg-icons";

const Like = ({ liked, onClick }) => {
  let icon = faHeart;
  if (liked) icon = hrt;

  return (
    <FontAwesomeIcon icon={icon} size="lg" color="#fa9c57" onClick={onClick} />
  );
};

Like.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Like;
