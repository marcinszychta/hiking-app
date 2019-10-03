import React, { Component } from "react";
import Layout from "../../components/organisms/Layout/Layout";
import MainButton from "../../components/atoms/MainButton/MainButton";
import ProgressBar from "../../components/molecules/ProgressBar/ProgressBar";
import OnboardingInfo from "../../components/atoms/OnboardingInfo/OnboardingInfo";
import OnboardingMsg from "../../components/atoms/OnboardingMsg/OnboardingMsg";

import { Redirect } from "react-router-dom";

class OnboardingPage2 extends Component {
  state = {
    answers: [
      { id: "1c", answer: "Dog friendly" },
      { id: "2c", answer: "Good for kids" },
      { id: "3c", answer: "Wheelchair accessible" },
      { id: "4c", answer: "Close to public transit" },
      { id: "5c", answer: "Campsite avalible" }
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
    if (this.state.continue) return <Redirect push to="/onboarding3" />;
    return (
      <Layout lightOrange>
        <ProgressBar step={2} />
        <OnboardingMsg onboardingQuestion={"What are your hiking needs?"} />
        <OnboardingInfo
          answers={this.state.answers}
          onSelect={this.handleSelect}
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

export default OnboardingPage2;
