import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import va from '../Images/va.png'

const VisaAssistance = () => {
  return (
    <Page>
      {/* HERO */}
      <Hero>
        <Overlay />
        <HeroContent>
          <h1>Visa Assistance & Travel Documentation</h1>
          <p>
            We simplify your travel paperwork! From visa applications to documentation, we make it seamless.
          </p>
        </HeroContent>
      </Hero>

      {/* DESCRIPTION */}
      <Container>
        <Fade direction="up" cascade triggerOnce>
          <Section>
            <h2>Our Services</h2>
            <p>
              At Huda Giant Stride Travel and Tours Ltd, we offer comprehensive visa assistance and travel documentation support, including:
            </p>
            <ul>
              <li>Visa application guidance and submission</li>
              <li>Travel documentation verification</li>
              <li>Immigration support and tips</li>
              <li>Fast and reliable processing</li>
            </ul>
          </Section>

          {/* MOTIVATIONAL SECTION */}
<Motivation>
  <h2>Your Journey Starts Here</h2>
  <p>
    Every great journey begins with a single step — and for international travel,
    that step is securing the right visa and documentation.
  </p>
  <p>
    Don’t let paperwork hold you back from exploring the world, expanding your
    business, or reconnecting with loved ones. We handle the complexities so you
    can focus on the excitement ahead.
  </p>
</Motivation>

{/* WHY TRUST US */}
<TrustSection>
  <div>
    <h2>Why Choose Us</h2>
    <ul>
      <li>✔ Expert guidance on visa requirements</li>
      <li>✔ High success rate with applications</li>
      <li>✔ Personalized support for every client</li>
      <li>✔ Fast, reliable, and transparent process</li>
    </ul>
  </div>

  <TrustImage>
    <img
      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
      alt="Travel"
    />
  </TrustImage>
</TrustSection>

{/* PROCESS FLOW */}
<Process>
  <h2>How It Works</h2>
  <Steps>
    <div>
      <span>1</span>
      <p>Fill out the application form</p>
    </div>
    <div>
      <span>2</span>
      <p>We review & guide your documents</p>
    </div>
    <div>
      <span>3</span>
      <p>Submit & track your visa process</p>
    </div>
    <div>
      <span>4</span>
      <p>Get approved & travel with confidence</p>
    </div>
  </Steps>
</Process>

          {/* FORM */}
          <FormSection>
            <h2>Apply for Visa Assistance</h2>
            <Form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Additional Information" rows={4}></textarea>
              <button>Submit Application</button>
            </Form>
          </FormSection>
        </Fade>
      </Container>
    </Page>
  );
};

export default VisaAssistance;

/* ================= STYLES ================= */

const Page = styled.div`
  font-family: "Inter", sans-serif;
`;

const Hero = styled.div`
  position: relative;
  height: 400px;
  background: url(${va})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
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
  max-width: 1000px;
  margin: auto;
  padding: 3rem 2rem;
`;

const Section = styled.div`
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: #3D9346;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const FormSection = styled.div`
  h2 {
    font-size: 2rem;
    color: #3D9346;
    margin-bottom: 1.5rem;
    text-align: center;
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
    font-size: 1rem;
    width: 100%;
  }

  button {
    padding: 14px;
    background: #3D9346;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: #2f7c38;
    }
  }
`;

const Motivation = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.2rem;
    color: #3D9346;
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: auto;
    color: #555;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

const TrustSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: #3D9346;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #444;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TrustImage = styled.div`
  img {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`;

const Process = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: #3D9346;
    margin-bottom: 2rem;
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  div {
    flex: 1;
    min-width: 150px;

    span {
      display: inline-block;
      background: #3D9346;
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      line-height: 40px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      color: #555;
    }
  }
`;