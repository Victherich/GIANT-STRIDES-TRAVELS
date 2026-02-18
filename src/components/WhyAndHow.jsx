import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaUserTie, FaRegHandshake, FaClock, FaRoute, FaSuitcaseRolling, FaPlane, FaSmile } from "react-icons/fa";

// Why Choose Us content
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

// How It Works content
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

const WhyAndHow = () => {
  return (
    <Section>
      <Container>
        <Fade cascade triggerOnce direction="up" duration={600}>
          <Grid>
            {/* WHY CHOOSE US */}
            <Left>
              <LeftOverlay>
                <LeftHeading>Why Choose Us?</LeftHeading>
                {benefits.map((benefit, idx) => (
                  <Item key={idx}>
                    <IconWrapper>{benefit.icon}</IconWrapper>
                    <ItemText>
                      <ItemTitle>{benefit.title}</ItemTitle>
                      <ItemDescription>{benefit.description}</ItemDescription>
                    </ItemText>
                  </Item>
                ))}
              </LeftOverlay>
            </Left>

            {/* HOW IT WORKS */}
            <Right>
              <RightOverlay>
                <RightHeading>How It Works</RightHeading>
                {steps.map((step, idx) => (
                  <Step key={idx}>
                    <StepIcon>{step.icon}</StepIcon>
                    <StepText>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </StepText>
                  </Step>
                ))}
              </RightOverlay>
            </Right>
          </Grid>
        </Fade>
      </Container>
    </Section>
  );
};

export default WhyAndHow;

/* ================== STYLES ================== */

const Section = styled.section`
  width: 100%;
  padding: 5rem 2rem;
  background: #fff;

  @media (max-width: 1024px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: auto;
`;

const Grid = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

/* LEFT SIDE - WHY CHOOSE US */
const Left = styled.div`
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
`;

const LeftOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  border-radius: 20px;
  width: 100%;
  color: #fff;
`;

const LeftHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Item = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  font-size: 2.2rem;
  color: #FFD700;
`;

const ItemText = styled.div``;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const ItemDescription = styled.p`
  font-size: 0.9rem;
`;

/* RIGHT SIDE - HOW IT WORKS */
const Right = styled.div`
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1526779259212-83e44a3f6f56?auto=format&fit=crop&w=1200&q=80");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
`;

const RightOverlay = styled.div`
  background: rgba(255, 255, 255, 0.85);
  padding: 3rem;
  border-radius: 20px;
  width: 100%;
  color: #222;
`;

const RightHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #3D9346;
`;

const Step = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

const StepIcon = styled.div`
  font-size: 2rem;
  color: #3D9346;
`;

const StepText = styled.div``;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
`;
