import React from "react";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Landing from "./Landing";

const Main = styled.main`
  // font-family: "Inter UI", Arial, sans-serif;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue";
`;

const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;

  @media only screen and (min-width: 62rem) {
    width: 61rem;
    max-width: 100%;
  }

  @media only screen and (min-width: 75rem) {
    width: 74rem;
    max-width: 100%;
  }
`;

function App() {
  return (
    <Main>
      <Helmet>
        <title>23 на 8</title>
      </Helmet>
      <Container>
        <div className="row">
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Container>
    </Main>
  );
}

export default App;
