import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      <ImageTag 
        src={image} 
        className={image ? styles.image : styles.imageNone} 
        alt={name}
      />
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
};

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  image: null,
  description: "One of the React creators",
};

export default ListItem;
