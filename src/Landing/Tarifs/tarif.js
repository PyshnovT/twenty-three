import React from "react";
import styled from "styled-components";

import Button from "../../common/button";

const Wrapper = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);

  &:first-child {
    border-top: 2px solid rgba(0, 0, 0, 0.08);
  }
`;

const Item = styled.div`
  justify-content: center;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

const ItemImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-basis: auto;
    max-width: auto;
  }
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

  @media screen and (min-width: 768px) {
    margin: 0;

    flex-basis: auto;
    max-width: auto;
  }

  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`;

const Left = styled.div`
  align-items: center;
  padding: 0;

  @media screen and (min-width: 768px) {
    flex-basis: auto;
    max-width: auto;
  }
`;

const firstImages = [1, 2];
const secondImages = [1, 2, 3, 4];
const thirdImages = [1, 2, 3, 4, 5, 6];
const titles = [
  "+ доплата 500₽ = ",
  "+ доплата 1000₽ = ",
  "+ доплата 2500₽ = "
];
const roses = ["11 роз", "21 роза", "51 роза"];

export default class Tarif extends React.Component {
  render() {
    const index = this.props.index;

    const images = [firstImages, secondImages, thirdImages][index];
    const pay = titles[index];
    const rose = roses[index];

    const imagesItems = images.map(image => (
      <ItemImg src={require("./" + image + ".png")} />
    ));

    return (
      <Wrapper className="col-xs-12">
        <Item className="row">
          <Left className="row col-xs-12">
            <ItemImages className="col-xs-12">{imagesItems}</ItemImages>
            <ItemText className="col-xs-12">
              {pay}
              <b>{rose}</b>
            </ItemText>
          </Left>
          <div>
            <Button title="ОБМЕНЯТЬ" />
          </div>
        </Item>
      </Wrapper>
    );
  }
}
