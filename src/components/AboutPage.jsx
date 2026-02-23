import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// Example images (replace with your own assets if needed)
import heroImg from "../Images/aboutHero.png";
import team1 from "../Images/T1.png";
import team2 from "../Images/T2.jpeg";
import travel1 from "../Images/travel.png";
import travel2 from "../Images/travel2.png";
import { Navigate, useNavigate } from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();


    const teamMembers = [
         { name: "Gloria Ologure", role: "General Manager", photo: team1 },
  { name: "Nancy Anietie", role: "Reservation Officer", photo: team2 },
 
//   { name: "John Doe", role: "Travel Consultant", photo: travel1 },
//   { name: "Emma Williams", role: "Adventure Specialist", photo: travel2 },
];
  return (
    <div>
      {/* HERO SECTION */}
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>About Huda Giant Stride Travel and Tours Ltd</HeroTitle>
        </HeroContent>
      </Hero>

      {/* COMPANY OVERVIEW */}
      <Section>
        <Fade direction="up" triggerOnce>
          <Container>
            <Heading>Company Overview</Heading>
            <Paragraph>
              Huda Giant Stride Travel and Tours Ltd is a reputable travel and
              tourism company dedicated to providing exceptional travel
              experiences for both leisure and business travelers. With a
              passion for exploration and a commitment to quality service, we
              offer a comprehensive range of travel solutions tailored to the
              unique needs of our clients.
            </Paragraph>

            <Paragraph>
              At Huda Giant Stride Travel and Tours Ltd, we believe that travel
              should be seamless, memorable, and enriching. Whether you’re
              planning a relaxing holiday getaway, a corporate trip, or a
              customized tour package, our experienced team of travel
              professionals is here to make your journey effortless from start
              to finish.
            </Paragraph>
          </Container>
        </Fade>
      </Section>

      {/* OUR SERVICES */}
      <Section bg="#f8f9fa">
        <Fade direction="up" triggerOnce>
          <Container>
            <Heading>Our Services</Heading>
            <List>
              <li>Flight bookings (domestic and international)</li>
              <li>Hotel reservations</li>
              <li>Tour packages and holiday planning</li>
              <li>Visa assistance and travel documentation support</li>
              <li>Airport transfers and ground transportation</li>
              <li>Travel insurance</li>
            </List>
          </Container>
        </Fade>
      </Section>

      {/* MISSION & VISION */}
      <Section>
        <Fade direction="up" triggerOnce>
          <Container>
            <Heading>Our Mission</Heading>
            <Paragraph>
              To deliver top-tier travel services that make every journey
              comfortable, inspiring, and unforgettable.
            </Paragraph>

            <Heading>Our Vision</Heading>
            <Paragraph>
              To be the travel partner of choice — known for excellence,
              innovation, and trust in every trip we coordinate.
            </Paragraph>
          </Container>
        </Fade>
      </Section>

      {/* TEAM SECTION */}
<TeamSection>
  <TeamHeading>Meet Our Team</TeamHeading>
  <TeamGrid>
    {teamMembers.map((member, idx) => (
      <TeamCard key={idx}>
        <TeamImage src={member.photo} alt={member.name} />
        <TeamName>{member.name}</TeamName>
        <TeamRole>{member.role}</TeamRole>
      </TeamCard>
    ))}
  </TeamGrid>
</TeamSection>

      {/* CTA BUTTON */}
      <CTASection>
        <CTAButton onClick={()=>navigate('/tours')}>Book Your Next Journey</CTAButton>
      </CTASection>
    </div>
  );
};

export default AboutPage;

/* ================== STYLES ================== */

const Hero = styled.section`
  width: 100%;
  height: 450px;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  text-align: center;
  max-width: 900px;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ bg }) => bg || "#fff"};

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  color: #3D9346;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.7rem;
    font-size: 1rem;
    color: #333;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const GalleryImg = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
`;

const CTASection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

const CTAButton = styled.button`
  background: #3D9346;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #2f7c38;
    transform: translateY(-2px);
  }
`;

const TeamSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const TeamHeading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #3D9346;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  justify-items: center;
`;

const TeamCard = styled.div`
  text-align: center;
`;

const TeamImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
`;

const TeamName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
`;

const TeamRole = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

