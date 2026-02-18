import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaSuitcaseRolling, FaPlane, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaSuitcaseRolling />,
    title: "Choose Package",
    description: "Select a tour or travel package that fits your dream vacation.",
  },
  {
    icon: <FaPlane />,
    title: "Book Flights & Hotels",
    description: "Secure your flights and accommodations in just a few clicks.",
  },
  {
    icon: <FaSmile />,
    title: "Travel & Enjoy",
    description: "Relax and enjoy your seamless travel experience with our support.",
  },
];

const HowItWorks = () => {
  return (
    <Section>
      <Container>
        <Heading>How It Works</Heading>
        <Fade cascade triggerOnce direction="up" duration={600}>
          <StepsContainer>
            {steps.map((step, idx) => (
              <StepCard key={idx}>
                <IconWrapper>{step.icon}</IconWrapper>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepCard>
            ))}
          </StepsContainer>
        </Fade>
      </Container>
    </Section>
  );
};

export default HowItWorks;

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

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StepCard = styled.div`
  flex: 1 1 30%;
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #3D9346;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  color: #222;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
`;
