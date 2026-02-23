import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import FlightBookingApp from "./FlightBookingApp";
import TravelInspirationPage from "./TravelInspirationPage";

const FlightsPage = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    passengers: 1,
  });

  const flights = [
    {
      airline: "Emirates",
      from: "Lagos",
      to: "Dubai",
      time: "08:00 - 16:00",
      price: "$850",
    },
    {
      airline: "Qatar Airways",
      from: "Abuja",
      to: "London",
      time: "10:30 - 18:45",
      price: "$920",
    },
    {
      airline: "British Airways",
      from: "Lagos",
      to: "Paris",
      time: "07:00 - 15:00",
      price: "$780",
    },
  ];

  return (
    <Page>
      {/* HERO */}
      {/* <Hero>
        <Overlay />
        <HeroContent>
          <h1>Search Flights</h1>
          <p>Find and book flights at the best prices worldwide</p>


          <SearchBox>
            <input placeholder="From (City or Airport)" />
            <input placeholder="To (City or Airport)" />
            <input type="date" />
            <input type="date" />
            <input type="number" min="1" placeholder="Passengers" />
            <button>Search Flights</button>
          </SearchBox>
        </HeroContent>
      </Hero> */}

  
      {/* <Container>
        <Fade direction="up" cascade triggerOnce>
          <Results>
            {flights.map((flight, i) => (
              <Card key={i}>
                <Left>
                  <h3>{flight.airline}</h3>
                  <p>{flight.from} → {flight.to}</p>
                  <span>{flight.time}</span>
                </Left>

                <Right>
                  <Price>{flight.price}</Price>
                  <button>Book Now</button>
                </Right>
              </Card>
            ))}
          </Results>
        </Fade>
      </Container> */}

      <FlightBookingApp/>
      <TravelInspirationPage/>
    </Page>
  );
};

export default FlightsPage;

/* ================= STYLES ================= */

const Page = styled.div`
  font-family: "Inter", sans-serif;
`;

const Hero = styled.div`
  position: relative;
  height: 420px;
  background: url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  width: 100%;
  max-width: 1000px;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const SearchBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  background: #fff;
  padding: 15px;
  border-radius: 12px;

  input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }

  button {
    background: #3D9346;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #2f7c38;
    }
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 3rem 2rem;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Left = styled.div`
  h3 {
    margin-bottom: 5px;
  }

  p {
    font-weight: 500;
  }

  span {
    color: gray;
    font-size: 0.9rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  button {
    background: #3D9346;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background: #2f7c38;
    }
  }
`;

const Price = styled.h2`
  color: #3D9346;
`;