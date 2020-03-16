import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";

import Navbar from "../../components/atoms/Navbar/Navbar";
import TrialOverview from "../../components/organisms/TrailOverview/TrailOverview";

import styles from "./Favorites.module.css";

const Favorites = ({ hikes, onLike, onHikeChange }) => {
  const [forward, setForward] = useState(false);

  const onChange = hike => {
    onHikeChange(hike);
    setForward(true);
  };

  const filtered = _.some(hikes, { liked: true });

  if (forward) return <Redirect push to="/hike" />;

  if (filtered)
    return (
      <div className={styles.wrapper}>
        <Navbar />
        <h3 className={styles.favoritesTitle}>Your favorites</h3>
        {hikes
          .filter(hike => hike.liked === true)
          .map(hike => (
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
  else {
    return (
      <div className={styles.wrapper}>
        <Navbar />
        <h3 className={styles.favoritesTitle}>
          Add some <br />
          favorite hikes!
        </h3>
      </div>
    );
  }
};

export default Favorites;
