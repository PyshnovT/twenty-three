import React from "react";
import styled from "styled-components";

import Item from "./item";

const Container = styled.section`
  padding-top: 55px;
  padding-bottom: 30px;
`;

const Title = styled.h2`
  margin: 0;

  text-align: center;
  font-size: 24px;
  font-weight: 400;
`;

const Carousel = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: scroll;

  // justify-content: center;

  margin-top: 40px;
`;

const items = [
  {
    title: "Оставьте заявку на сайте",
    smallImg: "1_small.png",
    bigImg: "1.png"
  },
  { title: "Ожидайте нашего звонка", smallImg: "2_small.png", bigImg: "2.png" },
  {
    title: "23 февраля получите подарок от вашей женщины",
    smallImg: "3_small.png",
    bigImg: "3.png"
  },
  {
    title: "Отдайте его нашему курьеру с доплатой",
    smallImg: "4_small.png",
    bigImg: "4.png"
  },
  { title: "8 марта получите цветы", smallImg: "5_small.png", bigImg: "5.png" }
];

export default () => {
  return (
    <Container>
      <Title>КАК ЭТО РАБОТАЕТ?</Title>
      <Carousel
        id="carousel"
        ref={c => (this.c = c)}
        onScroll={e =>
          console.log(document.getElementById("carousel").scrollLeft)
        }
      >
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            index={index + 1}
            smallImg={require("./" + item.smallImg)}
            bigImg={require("./" + item.bigImg)}
          />
        ))}
      </Carousel>
    </Container>
  );
};
