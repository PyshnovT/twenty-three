import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Welcome from "./Welcome";
import Works from "./Works";
import Why from "./Why";
import Change from "./Change";
import Tarifs from "./Tarifs";
import Footer from "./Footer";

const Container = styled.div``;

export default () => {
  return (
    <Container>
      <Header />
      <Welcome />
      <Works />
      <Why />
      <Change />
      <Tarifs />
      <Footer />
    </Container>
  );
};
