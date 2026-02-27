// import React from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

// // Example hero image
// import contactHero from "../Images/contactHero.png";


// const ContactPage = () => {
//   return (
//     <div>
//       {/* HERO SECTION */}
//       <Hero>
//         <HeroOverlay />
//         <HeroContent>
//           <HeroTitle>Contact Huda Giant Stride Travel & Tours</HeroTitle>
//           <HeroSubtitle style={{textAlign:"center"}}>We’re here to help with all your travel needs</HeroSubtitle>
//         </HeroContent>
//       </Hero>

//       {/* CONTACT INFO */}
//       <Section>
//         <Fade direction="up" triggerOnce>
//           <Container>
//             <Heading>Get in Touch</Heading>
//             <InfoGrid>
//               <InfoCard>
//                 <FaPhone size={24} color="#3D9346" />
//                 <InfoTitle>Call Us</InfoTitle>
//                 <InfoText>08143576329</InfoText>
//               </InfoCard>

//               <InfoCard>
//                 <FaWhatsapp size={24} color="#25D366" />
//                 <InfoTitle>WhatsApp</InfoTitle>
//                 <InfoText>08143576329</InfoText>
//               </InfoCard>

//               <InfoCard>
//                 <FaEnvelope size={24} color="#3D9346" />
//                 <InfoTitle>Email</InfoTitle>
//                 <InfoText>hudagiantstridetraveltourltd@gmail.com</InfoText>
//               </InfoCard>

//               <InfoCard>
//                 <FaMapMarkerAlt size={24} color="#3D9346" />
//                 <InfoTitle>Office</InfoTitle>
//                 <InfoText>Obum plaza,suit 408 ,plot 1140 Adetokunbo ademola crescent wuse 2 Abuja.</InfoText>
//               </InfoCard>
//             </InfoGrid>
//           </Container>
//         </Fade>
//       </Section>

//       {/* CONTACT FORM */}
//       <Section bg="#f8f9fa">
//         <Fade direction="up" triggerOnce>
//           <Container>
//             <FormHeading>Send Us a Message</FormHeading>
//             <Form>
//               <Input type="text" placeholder="Your Name" required />
//               <Input type="email" placeholder="Email Address" required />
//               <Input type="text" placeholder="Subject" required />
//               <TextArea placeholder="Your Message" required />
//               <SubmitBtn type="submit">Send Message</SubmitBtn>
//             </Form>
//           </Container>
//         </Fade>
//       </Section>

//   {/* MAP / LOCATION */}
// <MapSection>
//   <MapIframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.9038496951285!2d7.479576475014944!3d9.064931793478187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d515f47e8c0c5%3A0x8b71a58f8e2c8b0b!2sObum%20Plaza%2C%20Wuse%202%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
//     allowFullScreen=""
//     loading="lazy"
//     title="Obum Plaza, Abuja"
//   />
// </MapSection>

// {/* <OfficeMap/> */}

//     </div>
//   );
// };

// export default ContactPage;

// /* ================== STYLES ================== */

// const Hero = styled.section`
//   width: 100%;
//   height: 400px;
//   background-image: url(${contactHero});
//   background-size: cover;
//   background-position: center;
//   position: relative;
// `;

// const HeroOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: rgba(0,0,0,0.5);
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 2;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const HeroTitle = styled.h1`
//   color: #fff;
//   font-size: 2.8rem;
//   text-align: center;
// `;

// const HeroSubtitle = styled.p`
//   color: #ddd;
//   margin-top: 1rem;
//   font-size: 1.2rem;
// `;

// const Section = styled.section`
//   padding: 4rem 2rem;
//   background: ${({ bg }) => bg || "#fff"};

//   @media (max-width: 768px) {
//     padding: 3rem 1rem;
//   }
// `;

// const Container = styled.div`
//   max-width: 1100px;
//   margin: auto;
// `;

// const Heading = styled.h2`
//   font-size: 2.2rem;
//   color: #3D9346;
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// /* CONTACT INFO GRID */
// const InfoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//   gap: 2rem;
// `;

// const InfoCard = styled.div`
//   background: #f3f3f3;
//   padding: 2rem 1rem;
//   border-radius: 15px;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   cursor: default;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//   }
// `;

// const InfoTitle = styled.h4`
//   margin-top: 1rem;
//   margin-bottom: 0.5rem;
//   font-size: 1.1rem;
//   color: #222;
// `;

// const InfoText = styled.p`
//   font-size: 0.95rem;
//   color: #555;
// `;

// /* CONTACT FORM */
// const FormHeading = styled.h2`
//   text-align: center;
//   font-size: 2.2rem;
//   color: #3D9346;
//   margin-bottom: 2rem;
// `;

// const Form = styled.form`
//   max-width: 700px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   padding: 0.9rem 1rem;
//   border-radius: 12px;
//   border: 1px solid #ddd;
//   outline: none;

//   &:focus {
//     border-color: #3D9346;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 0.9rem 1rem;
//   border-radius: 12px;
//   border: 1px solid #ddd;
//   min-height: 140px;
//   resize: none;

//   &:focus {
//     border-color: #3D9346;
//   }
// `;

// const SubmitBtn = styled.button`
//   background: #3D9346;
//   color: #fff;
//   border: none;
//   padding: 1rem 1.5rem;
//   border-radius: 30px;
//   font-size: 1rem;
//   cursor: pointer;
//   font-weight: 600;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #2f7c38;
//     transform: translateY(-2px);
//   }
// `;

// /* MAP SECTION */
// const MapSection = styled.section`
//   margin-top: 3rem;
//   height: 400px;
// `;

// const MapIframe = styled.iframe`
//   width: 100%;
//   height: 100%;
//   border: none;
//   border-radius: 15px;
// `;



import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import contactHero from "../Images/contactHero.png";
import ContactForm from "./ContactForm"; // ✅ Import the new component

const ContactPage = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Contact Huda Giant Stride Travel & Tours</HeroTitle>
          <HeroSubtitle style={{ textAlign: "center" }}>
            We’re here to help with all your travel needs
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      {/* CONTACT INFO */}
      <Section>
        <Fade direction="up" triggerOnce>
          <Container>
            <Heading>Get in Touch</Heading>
            <InfoGrid>
              <InfoCard>
                <FaPhone size={24} color="#3D9346" />
                <InfoTitle>Call Us</InfoTitle>
                <InfoText>08143576329</InfoText>
              </InfoCard>

              <InfoCard>
                <FaWhatsapp size={24} color="#25D366" />
                <InfoTitle>WhatsApp</InfoTitle>
                <InfoText>08143576329</InfoText>
              </InfoCard>

              <InfoCard>
                <FaEnvelope size={24} color="#3D9346" />
                <InfoTitle>Email</InfoTitle>
                <InfoText>hudagiantstridetraveltourltd@gmail.com</InfoText>
              </InfoCard>

              <InfoCard>
                <FaMapMarkerAlt size={24} color="#3D9346" />
                <InfoTitle>Office</InfoTitle>
                <InfoText>
                  Obum plaza, suit 408, plot 1140 Adetokunbo ademola crescent wuse 2 Abuja.
                </InfoText>
              </InfoCard>
            </InfoGrid>
          </Container>
        </Fade>
      </Section>

      {/* CONTACT FORM */}
      <Section bg="#f8f9fa">
        <Fade direction="up" triggerOnce>
          <ContactForm /> {/* ✅ Render the new ContactForm component */}
        </Fade>
      </Section>

      {/* MAP / LOCATION */}
      <MapSection>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.9038496951285!2d7.479576475014944!3d9.064931793478187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d515f47e8c0c5%3A0x8b71a58f8e2c8b0b!2sObum%20Plaza%2C%20Wuse%202%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Obum Plaza, Abuja"
        />
      </MapSection>
    </div>
  );
};

export default ContactPage;



/* ================== STYLES ================== */

const Hero = styled.section`
  width: 100%;
  height: 400px;
  background-image: url(${contactHero});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  text-align: center;
`;

const HeroSubtitle = styled.p`
  color: #ddd;
  margin-top: 1rem;
  font-size: 1.2rem;
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
  margin-bottom: 2rem;
  text-align: center;
`;

/* CONTACT INFO GRID */
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: #f3f3f3;
  padding: 2rem 1rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const InfoTitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #222;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

/* CONTACT FORM */
const FormHeading = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  color: #3D9346;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  outline: none;

  &:focus {
    border-color: #3D9346;
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  min-height: 140px;
  resize: none;

  &:focus {
    border-color: #3D9346;
  }
`;

const SubmitBtn = styled.button`
  background: #3D9346;
  color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #2f7c38;
    transform: translateY(-2px);
  }
`;

/* MAP SECTION */
const MapSection = styled.section`
  margin-top: 3rem;
  height: 400px;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
`;

