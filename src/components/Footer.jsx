import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelopeOpen } from "react-icons/fa";
import logo from '../Images/logo.jpeg'
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <FooterContainer>
      <Fade direction="up" triggerOnce>
        <FooterContent>

          {/* COMPANY INFO */}
          <Column>
          <Img src={logo} alt="logo"/>
            <Logo>Huda Giant Stride</Logo>
            <SubLogo>Travel & Tours Ltd</SubLogo>
            <Text >
              We deliver seamless, memorable, and enriching travel experiences
              for leisure and business travelers worldwide.
            </Text>
          </Column>

         {/* QUICK LINKS */}
<Column>
  <Title>Quick Links</Title>
  <List>
    <li>
      <FooterLink to="/">Home</FooterLink>
    </li>
    <li>
      <FooterLink to="/about">About Us</FooterLink>
    </li>
    <li>
      <FooterLink to="/hotels">Hotels</FooterLink>
    </li>
    <li>
      <FooterLink to="/flights">Flights</FooterLink>
    </li>
    <li>
      <FooterLink to="/tours">Tours</FooterLink>
    </li>
    <li>
      <FooterLink to="/contact">Contact</FooterLink>
    </li>

    {/* DROPDOWN ROUTES */}
    <li>
      <FooterLink to="/visa-assistance">
        Visa Assistance
      </FooterLink>
    </li>
    <li>
      <FooterLink to="/airport-transfers">
        Airport Transfers
      </FooterLink>
    </li>
    <li>
      <FooterLink to="/travel-insurance">
        Travel Insurance
      </FooterLink>
    </li>
  </List>
</Column>


          {/* CONTACT */}
          <Column>
            <Title>Contact Us</Title>
            <ContactItem>
              <FaWhatsapp /> WhatsApp: 08143576329
            </ContactItem>
            <ContactItem>
              <FaPhoneAlt /> Office Phone: 08143576329
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt /> Obum plaza,suit 408 ,plot 1140 Adetokunbo ademola crescent wuse 2 Abuja.
            </ContactItem>
             <ContactItem>
              <FaEnvelopeOpen /> hudagiantstridetraveltourltd@gmail.com
            </ContactItem>
          
          </Column>

        </FooterContent>
      </Fade>

      <BottomBar>
        © {new Date().getFullYear()} Huda Giant Stride Travel & Tours Ltd —
        All Rights Reserved.
      </BottomBar>
       <BottomBar>
       POWERED BY ELEXDON DIGITAL TECHNOLOGIES LIMITED
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

/* ================== STYLES ================== */

const FooterContainer = styled.footer`
  background: #111;
  color: #fff;
//   margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
`;

const Column = styled.div``;

const Logo = styled.h2`
  font-size: 1.5rem;
  color: #3D9346;
  margin-bottom: 0.2rem;
`;

const SubLogo = styled.p`
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.7;
  color: #bbb;
  font-size: 0.95rem;

`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #3D9346;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.7rem;
    color: #ccc;
    font-size: 0.95rem;
    transition: 0.3s;
  }

  li:hover {
    color: #3D9346;
    transform: translateX(4px);
  }
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ccc;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;

  svg {
    color: #3D9346;
  }
`;

const BottomBar = styled.div`
  text-align: center;
  padding: 1rem;
  background: #0a0a0a;
  font-size: 0.85rem;
  color: #888;
`;

const Img = styled.img`
width:100px;
`


const FooterLink = styled(NavLink)`
  text-decoration: none;
  color: #ccc;
  font-size: 0.95rem;
  transition: 0.3s;

  &:hover {
    color: #3D9346;
    transform: translateX(4px);
  }

  &.active {
    color: #3D9346;
    font-weight: 600;
  }
`;
