import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getHikes } from "./services/hikingService";
import OnboardingHome from "./views/OnboardingHome/OnboardingHome";
import OnboardingPage1 from "./views/OnboardingPage1/OnboardingPage1";
import OnboardingPage2 from "./views/OnboardingPage2/OnboardingPage2";
import OnboardingPage3 from "./views/OnboardingPage3/OnboardingPage3";
import OnboardingPage4 from "./views/OnboardingPage4/OnboardingPage4";
import HomePage from "./views/HomePage/HomePage";
import Hike from "./views/Hike/Hike";
import Favorites from "./views/Favorites/Favorites";
import Profile from "./views/Profile/Profile";

class App extends Component {
  state = {
    hikes: getHikes(),
    hike: {}
  };

  handleLike = hike => {
    let hikes = [...this.state.hikes];
    const index = hikes.indexOf(hike);
    hikes[index] = { ...hike };
    hikes[index].liked = !hikes[index].liked;
    this.setState({ hikes });
  };

  handleHikeChange = hike => {
    this.setState({ hike });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={OnboardingHome} />
          <Route path="/onboarding" component={OnboardingPage1} />
          <Route path="/onboarding2" component={OnboardingPage2} />
          <Route path="/onboarding3" component={OnboardingPage3} />
          <Route path="/onboarding4" component={OnboardingPage4} />
          <Route
            path="/homepage"
            render={props => (
              <HomePage
                {...props}
                hikes={this.state.hikes}
                onLike={this.handleLike}
                onHikeChange={this.handleHikeChange}
              />
            )}
          />
          <Route
            path="/hike"
            render={props => (
              <Hike
                {...props}
                hike={this.state.hike}
                onLike={this.handleLike}
              />
            )}
          />
          <Route
            path="/favorites"
            render={props => (
              <Favorites
                {...props}
                hikes={this.state.hikes}
                onLike={this.handleLike}
                onHikeChange={this.handleHikeChange}
              />
            )}
          />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
