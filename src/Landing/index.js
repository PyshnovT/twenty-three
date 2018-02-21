import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Welcome from "./Welcome";
import Works from "./Works";
import Why from "./Why";
import Change from "./Change";
import Tarifs from "./Tarifs";
import Footer from "./Footer";

import Form from "./Form";

const Container = styled.div``;

const FormWrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

const PageOverlay = styled.button`
  position: absolute;
  z-index: 101;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.47);
`;

export default class Landing extends React.Component {
  state = {
    isFormOpened: true
  };

  toggleForm = () => {
    this.setState(prevState => ({
      isFormOpened: !prevState.isFormOpened
    }));
  };

  render() {
    return (
      <Container>
        {this.state.isFormOpened && (
          <FormWrapper>
            <Form />
            <PageOverlay onClick={this.toggleForm} />
          </FormWrapper>
        )}
        <Header />
        <Welcome onButtonClick={this.toggleForm} />
        <Works />
        <Why />
        <Change />
        <Tarifs onButtonClick={this.toggleForm} />
        <Footer />
      </Container>
    );
  }
}
