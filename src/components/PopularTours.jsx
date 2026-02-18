import React from "react";
import styled from "styled-components";

import { Fade } from "react-awesome-reveal";

const tours = [
  {
    title: "Paris Romantic Getaway",
    description: "Explore the city of love with our exclusive Paris tour package.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    route: "/tours/paris",
  },
  {
    title: "Safari Adventure in Kenya",
    description: "Experience wildlife up close in a thrilling safari adventure.",
    image: "https://images.unsplash.com/photo-1506224470994-2b7c5b8b0f9b?auto=format&fit=crop&w=800&q=80",
    route: "/tours/kenya-safari",
  },
  {
    title: "Beach Holiday in Maldives",
    description: "Relax on pristine beaches with crystal-clear waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    route: "/tours/maldives",
  },
  {
    title: "Cultural Tour of Japan",
    description: "Discover Japan’s rich culture, temples, and modern cities.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959?auto=format&fit=crop&w=800&q=80",
    route: "/tours/japan",
  },
   {
    title: "Cultural Tour of Japan",
    description: "Discover Japan’s rich culture, temples, and modern cities.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959?auto=format&fit=crop&w=800&q=80",
    route: "/tours/japan",
  },
    {
    title: "Cultural Tour of Japan",
    description: "Discover Japan’s rich culture, temples, and modern cities.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959?auto=format&fit=crop&w=800&q=80",
    route: "/tours/japan",
  },
   {
    title: "Cultural Tour of Japan",
    description: "Discover Japan’s rich culture, temples, and modern cities.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959?auto=format&fit=crop&w=800&q=80",
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
                <Description>{tour.description}</Description>
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
  cursor: pointer;
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
