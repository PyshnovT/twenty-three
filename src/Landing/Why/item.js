import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  padding-left: 8px;
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    max-width: 360px;
  }
`;

const Img = styled.img`
  margin: 0 auto;
  width: 56px;
  height: auto;
`;

const Title = styled.h4`
  margin: 0;
  margin-top: 26px;
  margin-bottom: 16px;

  font-size: 26px;
  font-weight: bold;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
    font-size: 36px;
  }
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 60px;

  font-size: 18px;
  line-height: 1.35;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.32;
    margin-bottom: 60px;
  }
`;

export default class Item extends React.Component {
  render() {
    return (
      <Wrapper className="col-xs-12 col-md-6">
        <Container>
          <Img src={this.props.img} alt="" />
          <Title>{this.props.title}</Title>
          <Text>{this.props.text}</Text>
        </Container>
      </Wrapper>
    );
  }
}
