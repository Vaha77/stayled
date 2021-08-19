import React, { Component } from "react";
import { Container, Wrapper } from "./style.js";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }
  render() {
    return (
      <Wrapper>
        <Container light={false} />
        <Container light={true} />
      </Wrapper>
    );
  }
}
