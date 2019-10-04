import React from "react";

import Home from "../../../images/icons/4.png";
import Search from "../../../images/icons/5.png";
import Fav from "../../../images/icons/6.png";
import Profile from "../../../images/icons/7.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconContainer}>
        <img src={Home} alt="homeIcon" />
        <p>For you</p>
      </div>
      <div className={styles.iconContainer}>
        <img src={Search} alt="searchIcon" />
        <p>Explore</p>
      </div>
      <div className={styles.iconContainer}>
        <img src={Fav} alt="favoriteIcon" />
        <p>Favorites</p>
      </div>
      <div className={styles.iconContainer}>
        <img src={Profile} alt="profileIcon" />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Navbar;
