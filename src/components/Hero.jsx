import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import h1 from '../Images/h1.jpeg'
import h2 from '../Images/h2.jpeg'
import h3 from '../Images/h3.jpeg'
import h4 from '../Images/h4.jpeg'
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Explore The World With Confidence",
    text: "Experience seamless international and local travel planning with experts who care about every detail of your journey.",
    // image:
    //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    image:h1
  },
  {
    title: "Luxury Tours & Holiday Packages",
    text: "Discover unforgettable destinations, curated tours, and stress-free holiday planning tailored just for you.",
    // image:
    //   "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    image:h2
  },
  {
    title: "Flights, Visa & Travel Assistance",
    text: "From flight booking to visa support, we handle everything so you can focus on the adventure ahead.",
    image:
      h3,
  },

  {
  title: "Corporate & Business Travel Solutions",
  text: "Efficient, reliable, and professionally managed business travel services designed to keep your organization moving smoothly across borders.",
  image:
    h4,
},

];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection bg={slides[current].image}>
      <Overlay />

      <HeroContent key={current} className={animate ? "slide-in" : "slide-out"}>
        <Left>
          <Fade triggerOnce={false} direction="up" duration={800}>
            <SmallTitle>Huda Giant Stride Travel & Tours Ltd</SmallTitle>
            <Title>{slides[current].title}</Title>
            <Text>{slides[current].text}</Text>

            <Buttons>
              <PrimaryBtn onClick={()=>navigate('/hotels')}>Book Your Stays</PrimaryBtn>
              <SecondaryBtn onClick={()=>navigate('/tours')}>Explore Tours</SecondaryBtn>
            </Buttons>
          </Fade>
        </Left>

        <Right />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

/* ================= STYLES ================= */

const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: background-image 0.8s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  transition: all 0.7s ease;

  &.slide-in {
    animation: slideIn 0.7s forwards;
  }

  &.slide-out {
    animation: slideOut 0.4s forwards;
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-100px);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(120px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Left = styled.div`
  color: white;
  align-self: center;
`;

const Right = styled.div``;

const SmallTitle = styled.p`
  color: lightgray;
  font-weight: 600;
  margin-bottom: 0.8rem;
  font-size: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
`;

const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: 2rem;
  color: #eaeaea;

  @media (max-width: 900px) {
    margin: 0 auto 2rem auto;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryBtn = styled.button`
  background: #3d9346;
  border: none;
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2f7b37;
    transform: translateY(-3px);
  }
`;

const SecondaryBtn = styled.button`
  background: transparent;
  border: 2px solid #fff;
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: white;
    color: #111;
  }
`;
