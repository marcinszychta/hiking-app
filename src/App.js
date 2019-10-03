import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnboardingHome from "./views/OnboardingHome/OnboardingHome";
import OnboardingPage1 from "./views/OnboardingPage1/OnboardingPage1";
import OnboardingPage2 from "./views/OnboardingPage2/OnboardingPage2";
import OnboardingPage3 from "./views/OnboardingPage3/OnboardingPage3";
import OnboardingPage4 from "./views/OnboardingPage4/OnboardingPage4";
import HomePage from "./views/HomePage/HomePage";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={OnboardingHome} />
          <Route path="/onboarding" component={OnboardingPage1} />
          <Route path="/onboarding2" component={OnboardingPage2} />
          <Route path="/onboarding3" component={OnboardingPage3} />
          <Route path="/onboarding4" component={OnboardingPage4} />
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
