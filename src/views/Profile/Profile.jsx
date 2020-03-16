import React, { Component } from "react";
import Layout from "../../components/organisms/Layout/Layout";
import Navbar from "../../components/atoms/Navbar/Navbar";

class Profile extends Component {
  state = {};
  render() {
    return (
      <Layout lightOrange>
        <p>Profile Page</p>
        <Navbar />
      </Layout>
    );
  }
}

export default Profile;
