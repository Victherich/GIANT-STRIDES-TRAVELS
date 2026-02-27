import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import transportImg from "../Images/transfer.png";
import ContactForm from "./ContactForm";

const AirportTransfers = () => {
  return (
    <Page>
      {/* HERO */}
      <Hero>
        <Overlay />
        <HeroContent>
          <h1>Airport Transfers & Ground Transportation</h1>
          <p>
            Reliable, comfortable, and stress-free rides — from airport pickup
            to your final destination.
          </p>
        </HeroContent>
      </Hero>

      <Container>
        <Fade cascade direction="up" triggerOnce>
          {/* INTRO */}
          <Section>
            <h2>Travel in Comfort & Style</h2>
            <p>
              At Huda Giant Stride Travel and Tours Ltd, we provide seamless
              airport pickup and ground transportation services designed to make
              your journey smooth from arrival to destination.
            </p>
            <p>
              Whether you're traveling for business or leisure, our professional
              drivers and premium vehicles ensure safety, comfort, and
              punctuality every time.
            </p>
          </Section>

          {/* SERVICES */}
          <Section>
            <h2>Our Transfer Services</h2>
            <ul>
              <li>Airport pickup and drop-off</li>
              <li>Hotel transfers</li>
              <li>Corporate transportation</li>
              <li>City rides and private hire</li>
              <li>Luxury and executive vehicles</li>
            </ul>
          </Section>

          {/* VEHICLE TYPES */}
          <Vehicles>
            <h2>Choose Your Ride</h2>
            <VehicleGrid>
              <div>
               <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80" />
                <h3>Standard Cars</h3>
                <p>Affordable and comfortable rides for everyday travel.</p>
              </div>

              <div>
                <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80" />
                <h3>Executive Vehicles</h3>
                <p>Premium experience for business and VIP clients.</p>
              </div>

              <div>
                <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80" />
                <h3>Luxury SUVs</h3>
                <p>Spacious and stylish for families and groups.</p>
              </div>
            </VehicleGrid>
          </Vehicles>

          {/* WHY US */}
          <Why>
            <h2>Why Choose Us</h2>
            <p>
              We combine reliability, professionalism, and comfort to deliver a
              transportation experience you can trust.
            </p>

            <Points>
              <span>✔ On-time pickups, every time</span>
              <span>✔ Professional and courteous drivers</span>
              <span>✔ Clean, safe, and modern vehicles</span>
              <span>✔ 24/7 availability</span>
            </Points>
          </Why>


          {/* <FormSection>
            <h2>Book Your Ride</h2>
            <Form>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Pickup Location" required />
              <input type="text" placeholder="Drop-off Location" required />
              <input type="date" required />
              <select required>
                <option value="">Select Vehicle Type</option>
                <option>Standard Car</option>
                <option>Executive Vehicle</option>
                <option>Luxury SUV</option>
              </select>
              <textarea placeholder="Additional Requests" rows={3}></textarea>
              <button>Book Transfer</button>
            </Form>
          </FormSection> */}

          <ContactForm/>
        </Fade>
      </Container>
    </Page>
  );
};

export default AirportTransfers;

/* ================= STYLES ================= */

const Page = styled.div`
  font-family: "Inter", sans-serif;
`;

const Hero = styled.div`
  position: relative;
  height: 420px;
  background: url(${transportImg}) top/cover no-repeat;
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
  margin-bottom: 3rem;

  h2 {
    color: #3D9346;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.5rem;
    li {
      margin-bottom: 8px;
    }
  }
`;

const Vehicles = styled.div`
  margin-bottom: 4rem;

  h2 {
    text-align: center;
    color: #3D9346;
    margin-bottom: 2rem;
  }
`;

const VehicleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  div {
    text-align: center;

    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 10px;
    }

    h3 {
      margin-bottom: 5px;
    }

    p {
      color: #555;
      font-size: 0.95rem;
    }
  }
`;

const Why = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    color: #3D9346;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

const Points = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  span {
    background: #f1f5f3;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
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
    font-size: 1rem;
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