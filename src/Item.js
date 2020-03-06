import React, { Component } from "react";
import "styled-components/macro";

const width = 300;
const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Kiwi",
  "Lemon",
  "Pear",
  "Pineapple"
];
const stagger = 100;

class Item extends Component {
  state = {
    isVisible: false
  };
  render() {
    return (
      <div
        css={`
          width: 252px;
          padding: 24px;
          color: #1c1c1c;
          background: #aaaaaa;
          border-bottom: 1px solid #939393;
          transform: ${this.props.isVisible
            ? "translateX(100%)"
            : "translate(0)"};
          transition: transform 0.5s ${stagger * this.props.index}ms ease-in-out;
        `}
      >
        {fruits.map((fruit, index) => {
          return (
            <Item isVisible={this.state.isVisible} index={index} name={fruit} />
          );
        })}
        {this.props.name}
      </div>
    );
  }
}

export default Item;
