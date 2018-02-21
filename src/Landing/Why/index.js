import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding-top: 55px;
  padding-bottom: 55px;
  background-color: #f38e7c;

  @media screen and (min-width: 768px) {
    padding-top: 105px;
    padding-bottom: 130px;
  }
`;

const Title = styled.h2``;

const ItemsWrapper = styled.div``;

const Item = styled.div``;

const items = [
  {
    img: "1.svg",
    title: "Экономия",
    text:
      "Цены на розы 8 марта увеличиваются в 2 раза. Мы предоставим их вам практически бесплатно."
  }
];

export default () => {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <Title className="col-xs-12">ЗАЧЕМ ЭТО НУЖНО?</Title>
          <div className="col-xs-12">
            <ItemsWrapper className="row">
              {items.map((item, index) => (
                <Item className="col-xs-12 col-md-6">{item.text}</Item>
              ))}
            </ItemsWrapper>
          </div>
        </div>
      </div>
    </Container>
  );
};
