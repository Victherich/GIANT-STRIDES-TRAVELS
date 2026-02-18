import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaUserTie, FaRegHandshake, FaClock, FaRoute } from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserTie />,
    title: "Expert Travel Planning",
    description:
      "Our team of travel experts ensures your trips are seamless and well-organized.",
  },
  {
    icon: <FaRegHandshake />,
    title: "Personalized Packages",
    description:
      "We create customized travel packages that match your preferences and needs.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you wherever you are.",
  },
  {
    icon: <FaRoute />,
    title: "Seamless Experience",
    description:
      "From booking to travel, we make every journey smooth, stress-free, and memorable.",
  },
];

const WhyChooseUs = () => {
  return (
    <Section>
      <Container>
        <Heading>Why Choose Us?</Heading>
        <Fade cascade triggerOnce direction="up" duration={600}>
          <Cards>
            {benefits.map((benefit, idx) => (
              <Card key={idx}>
                <IconWrapper>{benefit.icon}</IconWrapper>
                <Title>{benefit.title}</Title>
                <Description>{benefit.description}</Description>
              </Card>
            ))}
          </Cards>
        </Fade>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;

/* ================== STYLES ================== */

const Section = styled.section`
  padding: 5rem 2rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #3D9346;
  margin-bottom: 3rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #3D9346;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  color: #222;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
`;
