import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import TrialOverview from "../../components/organisms/TrailOverview/TrailOverview";
import Navbar from "../../components/atoms/Navbar/Navbar";

import styles from "./HomePage.module.css";

const HomePage = ({ hikes, onLike, onHikeChange }) => {
  const [forward, setForward] = useState(false);

  const onChange = hike => {
    onHikeChange(hike);
    setForward(true);
  };

  if (forward) return <Redirect push to="/hike" />;

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <h3 className={styles.homeTitle}>Your trails</h3>
      {hikes.map(hike => (
        <TrialOverview
          key={hike._id}
          hikes={hike}
          onLike={onLike}
          liked={hike.liked}
          onHikeChange={() => onChange(hike)}
        />
      ))}
    </div>
  );
};

export default HomePage;
