import React, { Component } from "react";
import Tag from "../../atoms/Tag/Tag";

import styles from "./TagList.module.css";

class TagList extends Component {
  state = {
    tags: ["Dog friendly", "Close to public transport", "Astonishing views"]
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <p>What you can do:</p>
        <div className={styles.tagWrapper}>
          {this.state.tags.map(tag => (
            <Tag key={tag} tagName={tag} />
          ))}
          <button className={styles.topWrapperButton}>Add tags +</button>
        </div>
      </div>
    );
  }
}

export default TagList;
