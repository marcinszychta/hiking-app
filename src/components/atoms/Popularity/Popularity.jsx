import React, { Component } from "react";

import styles from "./Popularity.module.css";

class Popularity extends Component {
  state = {
    outlineDots: [
      { id: "1z", filled: true },
      { id: "2z", filled: false },
      { id: "3z", filled: false },
      { id: "4z", filled: false },
      { id: "5z", filled: false }
    ]
  };

  handleFulfillment = dot => {
    const outlineDots = [...this.state.outlineDots];
    const index = outlineDots.indexOf(dot);
    outlineDots[index] = { ...dot };
    if (this.props.hike.popularity === 1) return null;
    if (this.props.hike.popularity === 2) return (outlineDots[1].filled = true);
    if (this.props.hike.popularity === 3)
      return (outlineDots[2].filled = true), (outlineDots[1].filled = true);
    if (this.props.hike.popularity === 4)
      return (
        (outlineDots[3].filled = true),
        (outlineDots[2].filled = true),
        (outlineDots[1].filled = true)
      );
    if (this.props.hike.popularity === 5)
      return (
        (outlineDots[4].filled = true),
        (outlineDots[3].filled = true),
        (outlineDots[2].filled = true),
        (outlineDots[1].filled = true)
      );
    this.setState({ outlineDots });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Popularity: &nbsp;</p>
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

export default Popularity;
