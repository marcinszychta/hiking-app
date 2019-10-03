import React from "react";
import PropTypes from "prop-types";

import styles from "./OnboardingMsg.module.css";

const OnboardingMsg = ({ onboardingQuestion }) => {
  return (
    <>
      <p className={styles.topMsg}>
        Answer a few questions to help <br /> us get to know you.
      </p>
      <p className={styles.onboardingQuestion}>{onboardingQuestion}</p>
    </>
  );
};

OnboardingMsg.propTypes = {
  onboardingQuestion: PropTypes.string.isRequired
};

export default OnboardingMsg;
