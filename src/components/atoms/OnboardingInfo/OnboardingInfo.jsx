import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ConfirmationMark from "../ConfirmationMark/ConfirmationMark";

import styles from "./OnboardingInfo.module.css";

const OnboardingInfo = ({ answers, narrow, onSelect }) => {
  const answerClasses = classNames({
    [styles.answer]: true,
    [styles.answerNarrow]: narrow
  });

  return (
    <div className={styles.wrapper}>
      {answers.map(a => (
        <div key={a.id}>
          <p className={answerClasses} onClick={() => onSelect(a)}>
            {a.answer}
            <span>{a.selected ? <ConfirmationMark /> : null}</span>
          </p>

          <div className={styles.horizontalLine} />
        </div>
      ))}
    </div>
  );
};

OnboardingInfo.propTypes = {
  answers: PropTypes.array.isRequired,
  narrow: PropTypes.bool,
  onSelect: PropTypes.func.isRequired
};

export default OnboardingInfo;
