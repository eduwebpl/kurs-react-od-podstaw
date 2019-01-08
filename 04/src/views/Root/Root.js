import React from "react";
import "./index.css";

const initialStateItems = [
  {
    image: "https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp.jpg",
    name: "Dan Abramov",
    description: "React core member",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

export default Root;
