import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Welcome from "./Welcome";

const Container = styled.div``;

export default () => {
  return (
    <Container>
      <Header />
      <Welcome />
    </Container>
  );
};
