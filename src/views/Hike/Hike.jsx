import React from "react";
import Layout from "../../components/organisms/Layout/Layout";
import Navbar from "../../components/atoms/Navbar/Navbar";
import HomeImage from "../../components/atoms/HomeImage/HomeImage";
import TrailBadge from "../../components/molecules/TrailBadge/TrailBadge";
import TrailRating from "../../components/molecules/TrailRating/TrailRating";
import TagList from "../../components/molecules/TagList/TagList";
import Tags from "../../components/atoms/Tags/Tags";

// import styles from "./Hike.module.css";

const Hike = ({ hike, onLike }) => {
  return (
    <Layout lightOrange>
      <Navbar />
      <HomeImage hikes={hike} selected />
      <TrailBadge hikes={hike} onLike={onLike} liked={hike.liked} selected />
      <TrailRating hike={hike} />
      <Tags
        horizontal
        tagName1={"Dog friendly"}
        tagName2={"Astonishing views"}
        tagName3={"Low elevation"}
      />
    </Layout>
  );
};

export default Hike;
