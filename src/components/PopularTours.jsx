import React from "react";
import styled from "styled-components";

import { Fade } from "react-awesome-reveal";
import paris from '../Images/paris.png'
import dubai from '../Images/dubai.png'
import london from '../Images/london.png'
import japan from '../Images/japan.png'
import china from '../Images/china.png'
import australia from '../Images/australia.png'

const tours = [
  {
    title: "Paris Romantic Getaway",
    description: "Explore the city of love with our exclusive Paris tour package.",
    image: paris,
    route: "/tours/paris",
  },
  {
    title: "Dubai",
    description: "Experience wildlife up close in a thrilling safari adventure.",
    image: dubai,
    route: "/tours/kenya-safari",
  },
  {
    title: "London",
    description: "Relax on pristine beaches with crystal-clear waters.",
    image: london,
    route: "/tours/maldives",
  },
  {
    title: "Cultural Tour of Japan",
    description: "Discover Japan’s rich culture, temples, and modern cities.",
    image: japan,
    route: "/tours/japan",
  },
   {
    title: "China",
    description: "Discover Japan’s rich culture, temples, and modern cities.",
    image: china,
    route: "/tours/japan",
  },
    {
    title: "Cultural Tour of Japan",
    description: "Discover Japan’s rich culture, temples, and modern cities.",
    image: australia,
    route: "/tours/japan",
  },
 
];

const PopularToursStories = () => {
  
  return (
    <Section>
      <Heading>Popular Tours & Destinations</Heading>
      <Fade cascade triggerOnce direction="up" duration={600}>
        <StoriesContainer>
          {tours.map((tour, idx) => (
            <Story key={idx}>
              <Image src={tour.image} alt={tour.title} />
              <Overlay>
                <Title>{tour.title}</Title>
                {/* <Description>{tour.description}</Description> */}
              </Overlay>
            </Story>
          ))}
        </StoriesContainer>
      </Fade>
    </Section>
  );
};

export default PopularToursStories;

/* ================== STYLES ================== */

const Section = styled.section`
  padding: 5rem 2rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #3D9346;
  margin-bottom: 2rem;
`;

const StoriesContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3D9346;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #eee;
    border-radius: 4px;
  }
`;

const Story = styled.div`
  flex: 0 0 250px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  width: 100%;
  color: #fff;
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.2;
`;
