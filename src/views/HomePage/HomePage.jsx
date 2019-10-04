import React, { Component } from "react";
import { getHikes } from "../../services/hikingService";

import TrialOverview from "../../components/organisms/TrailOverview/TrailOverview";
import Navbar from "../../components/atoms/Navbar/Navbar";

import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    hikes: getHikes()
  };

  handleLike = hike => {
    let hikes = [...this.state.hikes];
    const index = hikes.indexOf(hike);
    hikes[index] = { ...hike };
    hikes[index].liked = !hikes[index].liked;
    this.setState({ hikes });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Navbar />
        <h3 className={styles.homeTitle}>Your trails</h3>
        {this.state.hikes.map(hike => (
          <TrialOverview
            key={hike._id}
            hikes={hike}
            onLike={this.handleLike}
            liked={hike.liked}
          />
        ))}
      </div>
    );
  }
}

export default HomePage;
