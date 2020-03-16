import React, { Component } from "react";

import styles from "./Difficulty.module.css";

class Difficulty extends Component {
  state = {
    outlineDots: [
      { id: "1y", filled: true },
      { id: "2y", filled: false },
      { id: "3y", filled: false }
    ]
  };

  handleFulfillment = dot => {
    const outlineDots = [...this.state.outlineDots];
    const index = outlineDots.indexOf(dot);
    outlineDots[index] = { ...dot };
    if (this.props.hike.difficulty === "easy") return null;
    if (this.props.hike.difficulty === "medium")
      return (outlineDots[1].filled = true);
    if (this.props.hike.difficulty === "hard")
      return (outlineDots[2].filled = true), (outlineDots[1].filled = true);
    this.setState({ outlineDots });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Difficuly: &nbsp;</p>
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

export default Difficulty;
