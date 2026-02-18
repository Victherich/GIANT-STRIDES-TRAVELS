import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Nancy Anietie",
    role: "Reservation Officer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Huda Giant Stride Travel and Tours made my trip seamless and unforgettable. The support team was incredible!",
  },
  {
    name: "Gloria Ologure",
    role: "General Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "Professional, reliable, and attentive. I highly recommend Huda Giant Stride for any travel needs.",
  },
  {
    name: "John Doe",
    role: "Frequent Traveler",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4,
    review:
      "Excellent service and smooth booking process. My holiday was perfectly organized.",
  },
   {
    name: "Emma Williams",
    role: "Adventure Enthusiast",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    review:
      "Amazing experience! Every detail was taken care of and the tours were incredible. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Heading>What Our Clients Say</Heading>
        <Fade cascade triggerOnce direction="up" duration={600}>
          <TestimonialsContainer>
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx}>
                <Photo src={testimonial.photo} alt={testimonial.name} />
                <Stars>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} color="#FFD700" />
                  ))}
                </Stars>
                <Review>"{testimonial.review}"</Review>
                <ClientName>{testimonial.name}</ClientName>
                <ClientRole>{testimonial.role}</ClientRole>
              </TestimonialCard>
            ))}
          </TestimonialsContainer>
        </Fade>
      </Container>
    </Section>
  );
};

export default Testimonials;

/* ================== STYLES ================== */

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #3D9346;
  margin-bottom: 3rem;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;

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

const TestimonialCard = styled.div`
  flex: 0 0 300px;
  background: #fff;
  border-radius: 15px;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }
`;

const Photo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.8rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 1rem;
`;

const Review = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const ClientName = styled.h4`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 0.2rem;
`;

const ClientRole = styled.p`
  font-size: 0.85rem;
  color: #777;
`;
