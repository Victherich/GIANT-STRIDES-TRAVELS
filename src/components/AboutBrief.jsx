import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

// Example images
import teamImg1 from "../Images/travel3.png";
import teamImg2 from "../Images/travel2.png";
import travelImg from "../Images/travel.png";

const AboutBrief = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Fade cascade triggerOnce direction="up" duration={600}>
          <Content>

            {/* LEFT SIDE — TEXT */}
            <Left>
              <Subtitle>About Huda Giant Stride</Subtitle>
              <Title>Our Mission & Vision</Title>
              <Description>
                Huda Giant Stride Travel and Tours Ltd is dedicated to making
                every journey seamless, memorable, and enriching. With a passion
                for exploration and a commitment to quality service, we craft
                unique travel experiences for both leisure and business travelers.
              </Description>

              <Buttons>
                <LearnMoreBtn onClick={() => navigate("/about")}>
                  Learn More
                </LearnMoreBtn>
              </Buttons>
            </Left>

            {/* RIGHT SIDE — IMAGES */}
            <Right>
              <ImageWrapper>
                <TopImg src={teamImg1} alt="Team" />
                <BottomImg src={teamImg2} alt="Team" />
                <TravelImg src={travelImg} alt="Travel" />
              </ImageWrapper>
            </Right>

          </Content>
        </Fade>
      </Container>
    </Section>
  );
};

export default AboutBrief;

/* ================== STYLES ================== */

const Section = styled.section`
  width: 100%;
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

const Content = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* LEFT SIDE TEXT */
const Left = styled.div`
  flex: 1;
`;

const Subtitle = styled.h4`
  color: #3D9346;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Buttons = styled.div``;

const LearnMoreBtn = styled.button`
  background: #3D9346;
  color: white;
  border: none;
  padding: 0.8rem 1.4rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #2f7c38;
    transform: translateY(-2px);
  }
`;

/* RIGHT SIDE IMAGES */
const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const TopImg = styled.img`
  width: 60%;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
`;

const BottomImg = styled.img`
  width: 50%;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  left: 20%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
`;

const TravelImg = styled.img`
  width: 70%;
  border-radius: 15px;
  position: absolute;
  top: 20%;
  right: 0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
`;
