import React from "react";
import styled from "styled-components";

import Item from "./item";

const Container = styled.section`
  padding-top: 55px;
  // padding-bottom: 55px;
  padding-left: 30px;
  padding-right: 30px;

  background-color: #f38e7c;

  @media screen and (min-width: 768px) {
    padding-top: 105px;
    padding-bottom: 20px;
  }
`;

const Title = styled.h2`
  margin-bottom: 44px;

  text-align: center;
  font-family: Circe;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.09;
  color: #fff;

  @media screen and (min-width: 768px) {
    margin-bottom: 72px;
    font-size: 40px;
  }
`;

const ItemsWrapper = styled.div``;

const items = [
  {
    img: "1.svg",
    title: "Экономия",
    text:
      "Цены на розы 8 марта увеличиваются в 2 раза. Мы предоставим их вам практически бесплатно."
  },
  {
    img: "2.svg",
    title: "Умный ход",
    text:
      "Не нужно ломать голову над подарком 8 марта. Ведь ваша девушка тоже не особо заморачивалась"
  },
  {
    img: "4.svg",
    title: "Разумный обмен",
    text: "Чем больше вещей сдаете, тем больше цветов получаете"
  },
  {
    img: "3.svg",
    title: "Комфорт",
    text: "Не нужно выходить из дома и стоять в очереди. Курьер приезжает сам."
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
                <Item
                  title={item.title}
                  key={index}
                  img={require("./" + item.img)}
                  text={item.text}
                />
              ))}
            </ItemsWrapper>
          </div>
        </div>
      </div>
    </Container>
  );
};
