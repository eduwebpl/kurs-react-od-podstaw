import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from '../Button/Button';
import Title from '../Title/Title';

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
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button
          href={twitterLink}
        >
          visit twitter page
        </Button>
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
