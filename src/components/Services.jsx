import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

// Example images — keep as is
import flightImg from "../Images/flight.png";
import hotelImg from "../Images/hotel.png";
import tourImg from "../Images/tours.png";
import visaImg from "../Images/visa.png";
import transferImg from "../Images/transfer.png";
import insuranceImg from "../Images/insurance.png";

const services = [
  {
    title: "Flight Booking",
    description: "Book domestic and international flights quickly and securely.",
    image: flightImg,
    route: "/flights",
    buttonText:"Book now"
  },
  {
    title: "Hotel Reservations",
    description: "Reserve top-rated hotels for business or leisure stays.",
    image: hotelImg,
    route: "/hotels",
    buttonText:"Book now"
  },
  {
    title: "Tours & Holiday Packages",
    description: "Explore curated tours and holiday packages tailored for you.",
    image: tourImg,
    route: "/tours",
    buttonText:"Book now"
  },
  {
    title: "Visa Assistance",
    description: "Get professional visa support and documentation help.",
    image: visaImg,
    route: "/visa-assistance",
    buttonText:"Apply now"
  },
  {
    title: "Airport Transfers",
    description: "Enjoy safe and reliable airport pickup and drop-off services.",
    image: transferImg,
    route: "/airport-transfers",
    buttonText:"Book now"
  },
  {
    title: "Travel Insurance",
    description: "Protect your journey with comprehensive travel insurance.",
    image: insuranceImg,
    route: "/travel-insurance",
    buttonText:"Apply now"
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Heading>Our Services</Heading>
        <Fade cascade triggerOnce direction="up" duration={600}>
          <Cards>
            {services.map((service, idx) => (
              <Card key={idx}>
                <Image src={service.image} alt={service.title} />
                <Title>{service.title}</Title>
                <Description>{service.description}</Description>
                <ExploreButton onClick={() => navigate(service.route)}>
                  {service.buttonText}
                </ExploreButton>
              </Card>
            ))}
          </Cards>
        </Fade>
      </Container>
    </Section>
  );
};

export default Services;

/* ================== STYLES ================== */

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #3D9346;
  text-align: center;
  margin-bottom: 3rem;
`;

const Cards = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;

`;

const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width:300px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const Title = styled.h3`
  padding: 1rem 1rem 0.5rem;
  font-size: 1.2rem;
  color: #222;
`;

const Description = styled.p`
  padding: 0 1rem 1rem;
  font-size: 0.95rem;
  color: #555;
`;

const ExploreButton = styled.button`
  margin-bottom: 1rem;
  background: #3D9346;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #2f7c38;
    transform: translateY(-2px);
  }
`;
