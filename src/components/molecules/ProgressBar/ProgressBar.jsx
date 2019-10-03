import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ProgressBar.module.css";

class ProgressBar extends Component {
  state = {
    outlineDots: [
      { id: 1, filled: true },
      { id: 2, filled: false },
      { id: 3, filled: false },
      { id: 4, filled: false }
    ]
  };

  handleFulfillment = dot => {
    const { step } = this.props;
    const outlineDots = [...this.state.outlineDots];
    const index = outlineDots.indexOf(dot);
    outlineDots[index] = { ...dot };
    if (step === 1) return null;
    if (step === 2) return (outlineDots[1].filled = true);
    if (step === 3)
      return (outlineDots[2].filled = true), (outlineDots[1].filled = true);
    if (step === 4)
      return (
        (outlineDots[3].filled = true),
        (outlineDots[2].filled = true),
        (outlineDots[1].filled = true)
      );
    this.setState({ outlineDots });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.outlineDots.map(dot => (
          <div
            key={dot.id}
            className={dot.filled ? styles.filledDot : styles.outlineDot}
          >
            {this.handleFulfillment(dot)}
          </div>
        ))}
      </div>
    );
  }
}

ProgressBar.propTypes = {
  step: PropTypes.number.isRequired
};

export default ProgressBar;
