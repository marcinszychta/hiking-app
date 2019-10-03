import React, { Component } from "react";
import Layout from "../../components/organisms/Layout/Layout";
import MainButton from "../../components/atoms/MainButton/MainButton";
import ProgressBar from "../../components/molecules/ProgressBar/ProgressBar";
import OnboardingInfo from "../../components/atoms/OnboardingInfo/OnboardingInfo";
import OnboardingMsg from "../../components/atoms/OnboardingMsg/OnboardingMsg";

import { Redirect } from "react-router-dom";

class OnboardingQuestion1 extends Component {
  state = {
    answers: [
      { id: "1b", answer: "I'd like to get out more." },
      { id: "2b", answer: "I hike pretty regularly." },
      { id: "3b", answer: "I live in the outdoors." }
    ]
  };

  handleSelect = answer => {
    console.log(answer);
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
    if (this.state.continue) return <Redirect push to="/onboarding2" />;
    return (
      <Layout lightOrange>
        <ProgressBar step={1} />
        <OnboardingMsg onboardingQuestion={"How often do you hike?"} wide />
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

export default OnboardingQuestion1;
