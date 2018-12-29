import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

const ListItem = ({ image, name, description, twitterLink }) => (
  <li className={styles.wrapper}>
    <img src={image} className={styles.image} alt={name} />
    <div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <a
        href={twitterLink}
        target="_blank"
        className={styles.button}
        rel="noopener noreferrer"
      >
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
};

export default ListItem;
