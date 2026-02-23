import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const TravelInsurance = () => {
  return (
    <Page>
      {/* HERO */}
      <Hero>
        <Overlay />
        <HeroContent>
          <h1>Travel Insurance</h1>
          <p>
            Travel with confidence knowing you're protected every step of the way.
          </p>
        </HeroContent>
      </Hero>

      <Container>
        <Fade direction="up" triggerOnce cascade>

          {/* INTRO */}
          <Section>
            <h2>Protect Your Journey</h2>
            <p>
              Unexpected events can happen anytime — flight cancellations, medical emergencies,
              lost luggage, and more. Our travel insurance plans are designed to give you peace of mind,
              so you can focus on enjoying your trip.
            </p>
          </Section>

          {/* BENEFITS */}
          <Benefits>
            <div>
              <h3>Medical Coverage</h3>
              <p>Get access to emergency medical care anywhere in the world.</p>
            </div>

            <div>
              <h3>Trip Cancellation</h3>
              <p>Recover your money if your trip gets cancelled unexpectedly.</p>
            </div>

            <div>
              <h3>Lost Baggage</h3>
              <p>Compensation for lost or delayed luggage.</p>
            </div>

            <div>
              <h3>24/7 Assistance</h3>
              <p>Round-the-clock global support wherever you travel.</p>
            </div>
          </Benefits>

          {/* PLANS */}
          <Plans>
            <PlanCard>
              <h3>Basic Plan</h3>
              <p>Essential coverage for short trips.</p>
              <span>$50</span>
            </PlanCard>

            <PlanCard>
              <h3>Standard Plan</h3>
              <p>Extended protection for frequent travelers.</p>
              <span>$120</span>
            </PlanCard>

            <PlanCard>
              <h3>Premium Plan</h3>
              <p>Complete coverage with maximum benefits.</p>
              <span>$250</span>
            </PlanCard>
          </Plans>

          {/* WHY US */}
          <Section>
            <h2>Why Choose Us</h2>
            <ul>
              <li>Trusted and reliable insurance partners</li>
              <li>Fast claim processing</li>
              <li>Affordable and flexible plans</li>
              <li>Expert travel support team</li>
            </ul>
          </Section>

          {/* FORM */}
          <FormSection>
            <h2>Get Travel Insurance</h2>
            <Form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              
              <select required>
                <option value="">Select Plan</option>
                <option>Basic Plan</option>
                <option>Standard Plan</option>
                <option>Premium Plan</option>
              </select>

              <input type="date" required />
              <textarea placeholder="Additional Details" rows={4}></textarea>

              <button>Get Covered Now</button>
            </Form>
          </FormSection>

        </Fade>
      </Container>
    </Page>
  );
};

export default TravelInsurance;

/* ================= STYLES ================= */

const Page = styled.div`
  font-family: "Inter", sans-serif;
`;

const Hero = styled.div`
  position: relative;
  height: 400px;
  background: url("https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80")
  center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  max-width: 700px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 3rem 2rem;
`;

const Section = styled.div`
  margin-bottom: 4rem;

  h2 {
    color: #3D9346;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
  }

  ul {
    margin-top: 1rem;
    li {
      margin-bottom: 0.6rem;
    }
  }
`;

const Benefits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;

  div {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 12px;

    h3 {
      color: #3D9346;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

const Plans = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const PlanCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);

  h3 {
    color: #3D9346;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const FormSection = styled.div`
  h2 {
    text-align: center;
    color: #3D9346;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 15px;
  max-width: 600px;
  margin: auto;

  input,
  select,
  textarea {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button {
    padding: 14px;
    background: #3D9346;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #2f7c38;
    }
  }
`;