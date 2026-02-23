// ToursPage.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    price: "$1,200",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHViaXxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Maldives Paradise",
    location: "Maldives",
    price: "$2,500",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsdmVkaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Paris Romantic Getaway",
    location: "Paris, France",
    price: "$1,800",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const ToursPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Hero>
        <h1>Explore Amazing Tours</h1>
        <p>Discover unforgettable travel experiences around the world</p>
      </Hero>

      <Grid>
        {tours.map((tour) => (
          <Card key={tour.id} style={{ backgroundImage: `url(${tour.image})` }}>
            <Overlay />
            <Content>
              <h3>{tour.title}</h3>
              <p>{tour.location}</p>
              <Bottom>
                <span>{tour.price}</span>
                <ExploreBtn onClick={() => navigate(`/tour/${tour.id}`)}>
                  Explore
                </ExploreBtn>
              </Bottom>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default ToursPage;

/* ================= STYLES ================= */
const Container = styled.div`
  padding: 40px;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 42px;
    color:#3D9346;
  }

  p {
    color: gray;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const Card = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 300px;
  display: flex;
  align-items: flex-end;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  padding: 20px;
  z-index: 2;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExploreBtn = styled.button`
  background: #3D9346;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2f7c38;
  }
`;