import React from "react";
import styled from "styled-components";

import Button from "../../common/button";

const Container = styled.section`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 18px;
  padding-right: 18px;

  text-align: center;
  background-color: #ffebe2;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 88px;
    padding-bottom: 102px;
  }
`;

const Wrapper = styled.div`
  // position: relative;
`;

const Title = styled.h1`
  margin: 0 auto;

  font-size: 24px;
  line-height: 32px;
  font-weight: 800;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    line-height: 62px;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 16px;
  line-height: 22px;

  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 106px;

    font-size: 26px;
    line-height: 34px;
  }
`;

const ImagesContainer = styled.div`
  position: relative;
  margin-top: 20px;
  height: 210px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const BigLeftImage = styled.img`
  display: none;
  position: absolute;
  bottom: -30px;
  left: -10px;

  width: 350px;
  height: auto;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const BigRightImage = styled.img`
  display: none;
  position: absolute;
  top: 20px;
  right: -10px;

  width: 310px;
  height: auto;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const LeftImage = styled.img`
  position: absolute;
  top: 56px;
  left: -36px;

  width: 170px;
  height: auto;
`;

const RightImage = styled.img`
  position: absolute;
  top: 0;
  right: -48px;

  width: 190px;
  height: auto;
`;

export default class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>
            Сервис утилизации подарков<br />на 23 февраля
          </Title>
          <Description>
            Обменяйте банальные подарки на цветы для своей женщины.
          </Description>
          <BigLeftImage src={require("./left.png")} alt="" />
          <BigRightImage src={require("./right.png")} alt="" />
          <ImagesContainer>
            <LeftImage src={require("./left_small.png")} alt="" />
            <RightImage src={require("./right_small.png")} alt="" />
          </ImagesContainer>
          <Button title="ОБМЕНЯТЬ" onClick={this.props.onButtonClick} />
        </Wrapper>
      </Container>
    );
  }
}
