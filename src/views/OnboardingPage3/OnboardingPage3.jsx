import React, { Component } from "react";
import Layout from "../../components/organisms/Layout/Layout";
import MainButton from "../../components/atoms/MainButton/MainButton";
import ProgressBar from "../../components/molecules/ProgressBar/ProgressBar";
import OnboardingInfo from "../../components/atoms/OnboardingInfo/OnboardingInfo";
import OnboardingMsg from "../../components/atoms/OnboardingMsg/OnboardingMsg";

import { Redirect } from "react-router-dom";

class OnboardingPage3 extends Component {
  state = {
    answers: [
      { id: "1d", answer: "Water" },
      { id: "2d", answer: "Forest" },
      { id: "3d", answer: "Beach" },
      { id: "4d", answer: "Wildlife" },
      { id: "5d", answer: "Meadows" },
      { id: "6d", answer: "Views" }
    ]
  };

  handleSelect = answer => {
    let answers = [...this.state.answers];
    const index = answers.indexOf(answer);
    answers[index] = { ...answer };
    answers[index].selected = !answers[index].selected;
    this.setState({ answers });
  };

  handlePageChange = () => {
    this.setState({ continue: true });
  };

  render() {
    if (this.state.continue) return <Redirect push to="/onboarding4" />;
    return (
      <Layout lightOrange>
        <ProgressBar step={3} />
        <OnboardingMsg onboardingQuestion={"What do you want to see?"} />
        <OnboardingInfo
          answers={this.state.answers}
          onSelect={this.handleSelect}
          narrow
        />
        <MainButton
          buttonMsg={"Continue"}
          carryOn
          bottomLocation
          onClick={this.handlePageChange}
        />
      </Layout>
    );
  }
}

export default OnboardingPage3;
