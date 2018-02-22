import React from "react";
import styled from "styled-components";

import Button from "../../common/button";

const Window = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 102;
  background-color: #fff;
  color: #090909;

  @media screen and (min-width: 768px) {
    position: auto;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background-color: rgba(255, 0, 0, 0.2);
  cursor: pointer;
`;

const Header = styled.div`
  position: relative;

  padding-top: 66px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffebe2;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.09;
  text-align: center;
`;

const Subtitle = styled.span`
  display: block;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.12;
  text-align: center;
`;

const FormView = styled.form``;

const Row = styled.div`
  margin: 0;
  text-align: center;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`;

const Input = styled.input`
  margin-bottom: 28px;
  padding: 0;
  padding-bottom: 6px;

  font-size: 18px;
  text-align: left;
  color: #b8b8b8;
  line-height: 24px;

  border: none;
  border-bottom: 2px solid #090909;
  outline: none;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default class Form extends React.Component {
  render() {
    return (
      <Window>
        <Header>
          <CloseButton onClick={this.props.onButtonClick} />
          <Title>ОБМЕНЯЙ ПОДАРОК</Title>
          <Subtitle>Оставь заявку и курьер обменяет твою банальщину</Subtitle>
        </Header>
        <FormView id="detail-form">
          <Row className="row">
            <Input
              className="col-xs-12"
              type="text"
              placeholder="Имя"
              name="name"
              requried="true"
            />
            <Input
              className="col-xs-12"
              type="tel"
              placeholder="Телефон"
              name="tel"
              id="tel"
              requried="true"
            />
            <ButtonContainer className="col-xs-12">
              <Button title="ОБМЕНЯТЬ ПОДАРОК" type="submit" />
            </ButtonContainer>
          </Row>
        </FormView>
      </Window>
    );
  }
}
