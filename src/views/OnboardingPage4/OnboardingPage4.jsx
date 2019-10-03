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
      { id: "1d", answer: "Picnic" },
      { id: "2d", answer: "Hike" },
      { id: "3d", answer: "Trail run" },
      { id: "4d", answer: "Mountain bike" },
      { id: "5d", answer: "Bouldering" },
      { id: "6d", answer: "Rock climbing" }
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
    if (this.state.continue) return <Redirect push to="/homepage" />;
    return (
      <Layout lightOrange>
        <ProgressBar step={4} />
        <OnboardingMsg
          onboardingQuestion={"What activities would you like to do?"}
        />
        <OnboardingInfo
          answers={this.state.answers}
          onSelect={this.handleSelect}
          narrow
        />
        <MainButton
          buttonMsg={"See your trails"}
          carryOn
          bottomLocation
          onClick={this.handlePageChange}
        />
      </Layout>
    );
  }
}

export default OnboardingPage3;
