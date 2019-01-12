import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
}

const descriptions = {
  twitter: 'favorite Twitter account',
  article: 'Article',
  note: 'Note',
}

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  }
  
  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }
  
  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Add new {descriptions[this.state.activeOption]}</Title>
        <form autoComplete="off" className={styles.form} onSubmit={this.props.submitFn}>
          <input
            id={types.twitter}
            type="radio"
            checked={this.state.activeOption === types.twitter}
            onChange={() => this.handleRadioButtonChange(types.twitter)}
          />
          <label for={types.twitter}>Twitter</label>
          <input
            id={types.article}
            type="radio"
            checked={this.state.activeOption === types.article}
            onChange={() => this.handleRadioButtonChange(types.article)}
          />
          <label for={types.article}>Article</label>
          <input
            id={types.note}
            type="radio"
            checked={this.state.activeOption === types.note}
            onChange={() => this.handleRadioButtonChange(types.note)}
          />
          <label for={types.note}>Note</label>
          <Input
            name="name"
            label="Name"
            maxLength={30}
          />
          <Input
            name="link"
            label="Twitter link"
          />
          <Input
            name="image"
            label="Image"
          />
          <Input
            tag="textarea"
            name="description"
            label="Description"
          />
          <Button>add new item</Button>
        </form>
      </div>
    )
  }  
}

export default Form;
