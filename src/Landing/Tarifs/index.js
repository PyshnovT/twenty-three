import React from "react";
import styled from "styled-components";

import Tarif from "./tarif";

const Container = styled.section`
  padding-top: 45px;
  padding-bottom: 45px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 90px;
    padding-bottom: 105px;
  }
`;

const Title = styled.h2`
  margin: 0;

  margin-bottom: 18px;

  text-align: center;
  font-size: 22px;
  font-weight: 800;

  color: #090909;

  @media screen and (min-width: 768px) {
    margin-bottom: 45px;

    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
  }
`;

const ItemsContainer = styled.div``;

export default () => {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <Title className="col-xs-12">Тарифы</Title>
          <div className="col-xs-12">
            <ItemsContainer className="row">
              <Tarif index={0} />
              <Tarif index={1} />
              <Tarif index={2} />
              {/* <Item className="col-xs-12">
                <ItemImages>{images2}</ItemImages>
                <ItemText> + доплата 1000₽ = 21 роза </ItemText>
                <Button title="ОБМЕНЯТЬ" />
              </Item>
              <Item className="col-xs-12">
                <ItemImages>{images3}</ItemImages>
                <ItemText> + доплата 1000₽ = 21 роза </ItemText>
                <Button title="ОБМЕНЯТЬ" />
              </Item> */}
            </ItemsContainer>
          </div>
        </div>
      </div>
    </Container>
  );
};
