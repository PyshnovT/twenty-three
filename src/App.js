import React from "react";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Landing from "./Landing";

const Main = styled.main`
  // font-family: "Inter UI", Arial, sans-serif;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue";
  color: #141414;
`;

const Container = styled.div``;

function App() {
  return (
    <Main>
      <Helmet>
        <title>23 на 8</title>
      </Helmet>
      <Container>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Container>
    </Main>
  );
}

export default App;
