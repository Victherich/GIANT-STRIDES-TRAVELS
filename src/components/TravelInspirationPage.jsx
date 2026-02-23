import React from 'react';
import styled from 'styled-components';
import { FaPlane, FaGlobe, FaStar } from 'react-icons/fa';
import dubai from '../Images/dubai.png';
import usa from '../Images/usa.png';
import turkey from '../Images/turkey.png';
import paris from '../Images/paris.png';

// --- Styled Components ---

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: #ffffff;
  color: #333;
`;

/* HEADER */
const Header = styled.div`
  padding: 60px 20px 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #3D9346;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #666;
`;

/* SECTION */
const Section = styled.section`
  padding: 70px 20px;
  background: ${props => props.bg || '#fff'};
`;

const SectionHeader = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  color: #3D9346;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  color: #555;
  line-height: 1.7;
`;

/* CARDS */
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrap = styled.div`
  color: #3D9346;
  margin-bottom: 15px;
`;

/* GALLERY */
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 40px auto 0;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

/* CTA */
const CTASection = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: #3D9346;
  color: white;
`;

const CTAButton = styled.button`
  margin-top: 20px;
  background: white;
  color: #3D9346;
  padding: 14px 35px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// --- COMPONENT ---
const TravelInspirationPage = () => {
  return (
    <PageWrapper>

      {/* HEADER */}
      <Header>
        <Title>Explore The World With Confidence</Title>
        <Subtitle>
          Discover new destinations, experience different cultures, and create unforgettable memories.
          Your journey begins here.
        </Subtitle>
      </Header>

      {/* WHY TRAVEL */}
      <Section>
        <SectionHeader>Why Travel With Us?</SectionHeader>
        <SectionText>
          We simplify your travel experience by providing seamless booking, reliable support,
          and access to top destinations worldwide. Whether it's business or leisure, we ensure
          every trip is smooth and memorable.
        </SectionText>

        <CardGrid>
          <Card>
            <IconWrap><FaPlane size={35} /></IconWrap>
            <h3>Easy Booking</h3>
            <p>Book flights and services quickly with a smooth and stress-free process.</p>
          </Card>

          <Card>
            <IconWrap><FaGlobe size={35} /></IconWrap>
            <h3>Global Reach</h3>
            <p>Access destinations across the world with trusted travel partners.</p>
          </Card>

          <Card>
            <IconWrap><FaStar size={35} /></IconWrap>
            <h3>Premium Experience</h3>
            <p>Enjoy quality service tailored to your comfort and convenience.</p>
          </Card>
        </CardGrid>
      </Section>

      {/* INSPIRATION */}
      <Section bg="#f6fbf7">
        <SectionHeader>Travel Inspiration</SectionHeader>
        <SectionText>
          Traveling allows you to step outside your routine and experience life from a new perspective.
          Every journey tells a story — where will yours begin?
        </SectionText>

        <CardGrid>
          <Card>
            <p>"The world is a book and those who do not travel read only one page."</p>
            <strong>— Saint Augustine</strong>
          </Card>

          <Card>
            <p>"Traveling—it leaves you speechless, then turns you into a storyteller."</p>
            <strong>— Ibn Battuta</strong>
          </Card>

          <Card>
            <p>"A journey of a thousand miles begins with a single step."</p>
            <strong>— Lao Tzu</strong>
          </Card>
        </CardGrid>
      </Section>

      {/* DESTINATIONS */}
      <Section>
        <SectionHeader>Popular Destinations</SectionHeader>
        <SectionText>
          From vibrant cities to relaxing getaways, explore some of the most loved travel destinations.
        </SectionText>

        <GalleryGrid>
          <GalleryImage src={paris} alt="Paris" />
          <GalleryImage src={dubai} alt="Dubai" />
          <GalleryImage src={usa} alt="USA" />
          <GalleryImage src={turkey} alt="Turkey" />
        </GalleryGrid>
      </Section>

      {/* EXTRA CONTENT */}
      <Section bg="#f6fbf7">
        <SectionHeader>Plan Smarter, Travel Better</SectionHeader>
        <SectionText>
          Our platform helps you compare options, manage bookings, and stay informed every step of the way.
          Travel shouldn't be stressful — it should be exciting.
        </SectionText>
      </Section>

      {/* CTA */}
      <CTASection>
        <h2>Ready To Start Your Journey?</h2>
        <p>Book your next flight today and explore the world with ease.</p>
        <CTAButton onClick={()=>window.scroll(0,0)}>Get Started</CTAButton>
      </CTASection>

    </PageWrapper>
  );
};

export default TravelInspirationPage;