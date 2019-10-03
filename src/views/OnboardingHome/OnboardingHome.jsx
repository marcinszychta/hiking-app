import React, { Component } from "react";
import MainButton from "../../components/atoms/MainButton/MainButton";
import Layout from "../../components/organisms/Layout/Layout";
import logo from "../../images/logo/mountain.png";

import { Redirect } from "react-router-dom";

import styles from "./OnboardingHome.module.css";

class OnBoardingHome extends Component {
  state = {
    signUp: false,
    logIn: false
  };

  handleComponentTransition = () => {
    this.setState({ logIn: true });
  };

  render() {
    if (this.state.logIn) return <Redirect push to="/onboarding" />;
    return (
      <Layout>
        <img src={logo} alt="brand logo" className={styles.logo}></img>
        <p className={styles.appName}>HIKO</p>
        <p className={styles.appText}>
          Find the best trails
          <br />
          for you, near you.
        </p>
        <MainButton buttonMsg={"Sign up"} />
        <MainButton
          buttonMsg={"Log in"}
          outline={true}
          onClick={this.handleComponentTransition}
        />
      </Layout>
    );
  }
}

export default OnBoardingHome;
