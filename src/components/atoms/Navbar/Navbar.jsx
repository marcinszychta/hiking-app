import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Home from "../../../images/icons/4.png";
import Search from "../../../images/icons/5.png";
import Fav from "../../../images/icons/6.png";
import Profile from "../../../images/icons/7.png";

import styles from "./Navbar.module.css";

class Navbar extends Component {
  state = {
    homeChange: false,
    exploreChange: false,
    favoritesChange: false,
    profileChange: false
  };

  handleHomeRedirect = () => {
    this.setState({ homeChange: true });
  };

  handleFavoritesChange = () => {
    this.setState({ favoritesChange: true });
  };

  handleProfileRedirect = () => {
    this.setState({ profileChange: true });
  };

  render() {
    if (this.state.homeChange) return <Redirect push to="/homepage" />;
    if (this.state.favoritesChange) return <Redirect push to="/favorites" />;
    if (this.state.profileChange) return <Redirect push to="/profile" />;
    return (
      <div className={styles.wrapper}>
        <div className={styles.iconContainer}>
          <img src={Home} alt="homeIcon" onClick={this.handleHomeRedirect} />
          <p>For you</p>
        </div>
        <div className={styles.iconContainer}>
          <img src={Search} alt="searchIcon" />
          <p>Explore</p>
        </div>
        <div className={styles.iconContainer}>
          <img
            src={Fav}
            alt="favoriteIcon"
            onClick={this.handleFavoritesChange}
          />
          <p>Favorites</p>
        </div>
        <div className={styles.iconContainer}>
          <img
            src={Profile}
            alt="profileIcon"
            onClick={this.handleProfileRedirect}
          />
          <p>Profile</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
