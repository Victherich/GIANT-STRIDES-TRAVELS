import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaWhatsapp, FaPlane, FaGlobeAfrica, FaSmile, FaSuitcase } from "react-icons/fa";

const stats = [
  { icon: <FaSmile />, number: "5,000+", label: "Happy Travelers" },
  { icon: <FaGlobeAfrica />, number: "45+", label: "Destinations Covered" },
  { icon: <FaSuitcase />, number: "10+", label: "Years in Business" },
  { icon: <FaPlane />, number: "12,000+", label: "Flights Booked" },
];

const EngagementSection = () => {
  return (
    <Section>
      <Overlay />

      <Container>
        <Fade direction="up" triggerOnce>
          <Content>

            {/* LEFT SIDE — STATS */}
            <Left>
              <Title>Trusted by Travelers Worldwide</Title>
              <Subtitle>
                We’ve helped thousands experience stress-free journeys with
                reliable travel solutions.
              </Subtitle>

              <StatsGrid>
                {stats.map((item, i) => (
                  <Stat key={i}>
                    <Icon>{item.icon}</Icon>
                    <Number>{item.number}</Number>
                    <Label>{item.label}</Label>
                  </Stat>
                ))}
              </StatsGrid>
            </Left>

            {/* RIGHT SIDE — CONTACT / NEWSLETTER */}
            <Right>
              <RightTitle>Plan Your Next Journey</RightTitle>
              <RightText>
                Get travel updates, special offers, or send us a quick inquiry.
                Our team will respond quickly.
              </RightText>

              <Form>
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Email Address" />
                <TextArea placeholder="Tell us about your trip..." />

                <Buttons>
                  <PrimaryBtn>Book Now</PrimaryBtn>

                  <WhatsAppBtn
                    href="https://wa.me/2348143576329"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> WhatsApp Us
                  </WhatsAppBtn>
                </Buttons>
              </Form>
            </Right>

          </Content>
        </Fade>
      </Container>
    </Section>
  );
};

export default EngagementSection;

/* ================== STYLES ================== */

const Section = styled.section`
  position: relative;
  padding: 6rem 2rem;
  background-image: url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80");
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media(max-width:768px){
  padding: 3rem 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(0,0,0,0.75),
    rgba(61,147,70,0.65)
  );
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT — STATS */

const Left = styled.div`
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #ddd;
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const Stat = styled.div`
  padding: 1rem 0;
`;

const Icon = styled.div`
  font-size: 1.8rem;
  color: #ffd700;
  margin-bottom: 0.4rem;
`;

const Number = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.2rem;
`;

const Label = styled.p`
  font-size: 0.95rem;
  color: #e6e6e6;
`;

/* RIGHT — FORM */

const Right = styled.div`
  background: rgba(255,255,255,0.95);
  padding: 2.5rem;
  border-radius: 20px;
`;

const RightTitle = styled.h3`
  font-size: 2rem;
  color: #3D9346;
  margin-bottom: 0.8rem;
`;

const RightText = styled.p`
  color: #555;
  margin-bottom: 1.5rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #3D9346;
  }
`;

const TextArea = styled.textarea`
  padding: 0.85rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  min-height: 100px;
  resize: none;

  &:focus {
    border-color: #3D9346;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  background: #3D9346;
  color: white;
  border: none;
  padding: 0.8rem 1.4rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #2f7c38;
  }
`;

const WhatsAppBtn = styled.a`
  background: #25D366;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.4rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;
