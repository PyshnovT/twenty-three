import React from "react";
import styled from "styled-components";

import Button from "../../common/button";

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

const Item = styled.div`
  padding-top: 30px;
  padding-bottom: 35px;
  text-align: center;
  // height: 2px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);

  &:first-child {
    border-top: 2px solid rgba(0, 0, 0, 0.08);
  }
`;

const ItemImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ItemImg = styled.img`
  // margin-right:
  height: 60px;
  width: auto;
`;

const ItemText = styled.span`
  display: block;

  margin-top: 12px;
  margin-bottom: 22px;

  font-size: 18px;
  line-height: 2;
  text-align: center;
  color: #090909;
`;

export default () => {
  const firstImages = [1, 2];
  const secondImages = [1, 2, 3, 4];
  const thirdImages = [1, 2, 3, 4, 5, 6];

  const images1 = firstImages.map(image => (
    <ItemImg src={require("./" + image + ".png")} />
  ));

  const images2 = secondImages.map(image => (
    <ItemImg src={require("./" + image + ".png")} />
  ));

  const images3 = thirdImages.map(image => (
    <ItemImg src={require("./" + image + ".png")} />
  ));

  return (
    <Container>
      <div className="container">
        <div className="row">
          <Title className="col-xs-12">Тарифы</Title>
          <div className="col-xs-12">
            <ItemsContainer className="row">
              <Item className="col-xs-12">
                <ItemImages>{images1}</ItemImages>
                <ItemText> + доплата 500₽ = 11 роз </ItemText>
                <Button title="ОБМЕНЯТЬ" />
              </Item>
              <Item className="col-xs-12">
                <ItemImages>{images2}</ItemImages>
                <ItemText> + доплата 1000₽ = 21 роза </ItemText>
                <Button title="ОБМЕНЯТЬ" />
              </Item>
              <Item className="col-xs-12">
                <ItemImages>{images3}</ItemImages>
                <ItemText> + доплата 1000₽ = 21 роза </ItemText>
                <Button title="ОБМЕНЯТЬ" />
              </Item>
            </ItemsContainer>
          </div>
        </div>
      </div>
    </Container>
  );
};
