import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const descriptions = {
  twitter: "favorite Twitter account",
  article: "Article",
  note: "Note",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  };

  handleRadioButtonChange = type => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    const { activeOption } = this.state;

    return (
      <div className={styles.wrapper}>
        <Title>Add new {descriptions[activeOption]}</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.formOptions}>
            <Radio
              id={types.twitter}
              checked={activeOption === types.twitter}
              changeFn={() => this.handleRadioButtonChange(types.twitter)}
            >
              Twitter
            </Radio>
            <Radio
              id={types.article}
              checked={activeOption === types.article}
              changeFn={() => this.handleRadioButtonChange(types.article)}
            >
              Article
            </Radio>
            <Radio
              id={types.note}
              checked={activeOption === types.note}
              changeFn={() => this.handleRadioButtonChange(types.note)}
            >
              Note
            </Radio>
          </div>
          <Input
            name="name"
            label={activeOption === types.twitter ? "Twitter Name" : "Title"}
            maxLength={30}
          />
          {activeOption !== types.note ? (
            <Input
              name="link"
              label={activeOption === types.twitter ? "Twitter Link" : "Link"}
            />
          ) : null}

          {activeOption === types.twitter ? (
            <Input name="image" label="Image" />
          ) : null}
          <Input tag="textarea" name="description" label="Description" />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
