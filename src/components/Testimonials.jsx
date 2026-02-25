// import React from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";
// import { FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Nancy Anietie",
//     role: "Reservation Officer",
//     photo: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 5,
//     review:
//       "Huda Giant Stride Travel and Tours made my trip seamless and unforgettable. The support team was incredible!",
//   },
//   {
//     name: "Gloria Ologure",
//     role: "General Manager",
//     photo: "https://randomuser.me/api/portraits/women/68.jpg",
//     rating: 5,
//     review:
//       "Professional, reliable, and attentive. I highly recommend Huda Giant Stride for any travel needs.",
//   },
//   {
//     name: "John Doe",
//     role: "Frequent Traveler",
//     photo: "https://randomuser.me/api/portraits/men/12.jpg",
//     rating: 4,
//     review:
//       "Excellent service and smooth booking process. My holiday was perfectly organized.",
//   },
//    {
//     name: "Emma Williams",
//     role: "Adventure Enthusiast",
//     photo: "https://randomuser.me/api/portraits/women/55.jpg",
//     rating: 5,
//     review:
//       "Amazing experience! Every detail was taken care of and the tours were incredible. Highly recommend!",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <Section>
//       <Container>
//         <Heading>What Our Clients Say</Heading>
//         <Fade cascade triggerOnce direction="up" duration={600}>
//           <TestimonialsContainer>
//             {testimonials.map((testimonial, idx) => (
//               <TestimonialCard key={idx}>
//                 <Photo src={testimonial.photo} alt={testimonial.name} />
//                 <Stars>
//                   {Array.from({ length: testimonial.rating }).map((_, i) => (
//                     <FaStar key={i} color="#FFD700" />
//                   ))}
//                 </Stars>
//                 <Review>"{testimonial.review}"</Review>
//                 <ClientName>{testimonial.name}</ClientName>
//                 <ClientRole>{testimonial.role}</ClientRole>
//               </TestimonialCard>
//             ))}
//           </TestimonialsContainer>
//         </Fade>
//       </Container>
//     </Section>
//   );
// };

// export default Testimonials;

// /* ================== STYLES ================== */

// const Section = styled.section`
//   padding: 5rem 2rem;
//   background: #f8f9fa;

//   @media (max-width: 768px) {
//     padding: 3rem 1rem;
//   }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   font-size: 2.5rem;
//   color: #3D9346;
//   margin-bottom: 3rem;
// `;

// const TestimonialsContainer = styled.div`
//   display: flex;
//   gap: 1.5rem;
//   overflow-x: auto;
//   scroll-behavior: smooth;
//   padding-bottom: 1rem;

//   &::-webkit-scrollbar {
//     height: 8px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #3D9346;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #eee;
//     border-radius: 4px;
//   }
// `;

// const TestimonialCard = styled.div`
//   flex: 0 0 300px;
//   background: #fff;
//   border-radius: 15px;
//   padding: 2rem 1.5rem;
//   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
//   }
// `;

// const Photo = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-bottom: 0.8rem;
// `;

// const Stars = styled.div`
//   display: flex;
//   gap: 2px;
//   margin-bottom: 1rem;
// `;

// const Review = styled.p`
//   font-size: 0.95rem;
//   color: #555;
//   margin-bottom: 1rem;
//   line-height: 1.3;
// `;

// const ClientName = styled.h4`
//   font-size: 1.1rem;
//   color: #222;
//   margin-bottom: 0.2rem;
// `;

// const ClientRole = styled.p`
//   font-size: 0.85rem;
//   color: #777;
// `;


// import React, { useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Nancy Anietie",
//     role: "Reservation Officer",
//     photo: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 5,
//     review:
//       "Huda Giant Stride Travel and Tours made my trip seamless and unforgettable. The support team was incredible!",
//   },
//   {
//     name: "Gloria Ologure",
//     role: "General Manager",
//     photo: "https://randomuser.me/api/portraits/women/68.jpg",
//     rating: 5,
//     review:
//       "Professional, reliable, and attentive. I highly recommend Huda Giant Stride for any travel needs.",
//   },
//   {
//     name: "John Doe",
//     role: "Frequent Traveler",
//     photo: "https://randomuser.me/api/portraits/men/12.jpg",
//     rating: 4,
//     review:
//       "Excellent service and smooth booking process. My holiday was perfectly organized.",
//   },
//   {
//     name: "Emma Williams",
//     role: "Adventure Enthusiast",
//     photo: "https://randomuser.me/api/portraits/women/55.jpg",
//     rating: 5,
//     review:
//       "Amazing experience! Every detail was taken care of and the tours were incredible. Highly recommend!",
//   },
// ];

// const Testimonials = () => {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef(null);
  

// useEffect(() => {
//   intervalRef.current = setInterval(() => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   }, 2000);

//   return () => clearInterval(intervalRef.current);
// }, []);


//   return (
//     <Section >
//       <Heading>Testimonials Of Our Travel Service</Heading>
//       <p style={{padding:"10px 100px", textAlign:"center", }}>
//         Looking for the best travel agency in Abuja? Huda Giant Stride Travel and Tours Ltd offers cheap flights, hotel bookings, international tours, vacation packages, student travel, visa assistance, and affordable holiday deals worldwide.
//       </p>
// <br/>
//       <Carousel>
//         <Arrow left onClick={prev}>
//           <FaChevronLeft />
//         </Arrow>

//         <Card key={index}>
//           <Glow />

//           <Photo src={t.photo} alt={t.name} />

//           <Stars>
//             {Array.from({ length: t.rating }).map((_, i) => (
//               <FaStar key={i} />
//             ))}
//           </Stars>

//           <Review>"{t.review}"</Review>

//           <ClientName style={{color:"#3d9346"}}>{t.name}</ClientName>
//           <ClientRole>{t.role}</ClientRole>
//         </Card>

//         <Arrow onClick={next}>
//           <FaChevronRight />
//         </Arrow>
//       </Carousel>

//       <Dots>
//         {testimonials.map((_, i) => (
//           <Dot
//             key={i}
//             active={i === index}
//             onClick={() => setIndex(i)}
//           />
//         ))}
//       </Dots>
//     </Section>
//   );
// };

// export default Testimonials;

// /* ================= STYLES ================= */

// const Section = styled.section`
//   padding: 6rem 2rem;
//   background: linear-gradient(135deg, #f8f9fa, #eef7f0);
//   text-align: center;
// `;

// const Heading = styled.h2`
//   font-size: 2.8rem;
//   color: #3d9346;
//   // margin-bottom: 3rem;
// `;

// const Carousel = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
// `;

// const Card = styled.div`
//   position: relative;
//   // width: 380px;
//   width:100%;
//   padding: 2.5rem 2rem;
//   border-radius: 20px;
//   background: rgba(255, 255, 255, 0.7);
//   backdrop-filter: blur(14px);
//   box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
//   animation: fadeSlide 0.6s ease;

//   @keyframes fadeSlide {
//     from {
//       opacity: 0;
//       transform: translateX(40px);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
// `;

// const Glow = styled.div`
//   position: absolute;
//   inset: 0;
//   border-radius: 20px;
//   background: linear-gradient(120deg, #3d9346, #7ed957);
//   opacity: 0.15;
//   filter: blur(40px);
//   z-index: -1;
// `;

// const Photo = styled.img`
//   width: 90px;
//   height: 90px;
//   border-radius: 50%;
//   margin-bottom: 1rem;
//   border: 4px solid #fff;
// `;

// const Stars = styled.div`
//   color: #ffd700;
//   margin-bottom: 1rem;
// `;

// const Review = styled.p`
//   font-size: 1rem;
//   color: #444;
//   margin-bottom: 1.5rem;
//   line-height: 1.5;
// `;

// const ClientName = styled.h4`
//   font-size: 1.2rem;
//   margin-bottom: 0.3rem;
// `;

// const ClientRole = styled.p`
//   font-size: 0.9rem;
//   color: #777;
// `;

// const Arrow = styled.div`
//   font-size: 1.5rem;
//   cursor: pointer;
//   color: #3d9346;
//   padding: 0.6rem;
//   border-radius: 50%;
//   background: #fff;
//   box-shadow: 0 5px 15px rgba(0,0,0,0.1);

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const Dots = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   justify-content: center;
//   gap: 8px;
// `;

// const Dot = styled.div`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background: ${({ active }) => (active ? "#3d9346" : "#ccc")};
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     transform: scale(1.2);
//   }
// `;





import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// ✅ Testimonials Data with Unsplash Images
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
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // AUTO SLIDE (runs once on mount)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const t = testimonials[index];

  return (
    <Section>
      <Heading>Testimonials Of Our Travel Service</Heading>

      <Desc>
        Looking for the best travel agency in Abuja? Huda Giant Stride Travel and Tours Ltd offers cheap flights, hotel bookings, international tours, vacation packages, student travel, visa assistance, and affordable holiday deals worldwide.
      </Desc>

      <Carousel>
        <Arrow left onClick={prev}>
          <FaChevronLeft />
        </Arrow>

        <Card key={index}>
          <Glow />

          <Photo src={t.photo} alt={t.name} />

          <Stars>
            {Array.from({ length: t.rating }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </Stars>

          <Review>"{t.review}"</Review>

          <ClientName>{t.name}</ClientName>
          <ClientRole>{t.role}</ClientRole>
        </Card>

        <Arrow onClick={next}>
          <FaChevronRight />
        </Arrow>
      </Carousel>

      <Dots>
        {testimonials.map((_, i) => (
          <Dot
            key={i}
            active={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </Dots>
    </Section>
  );
};

export default Testimonials;

//////////////////////////////////////////////////////
// STYLES
//////////////////////////////////////////////////////

const Section = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

const Heading = styled.h2`
  color: #3d9346;
`;

const Desc = styled.p`
  padding: 10px 100px;
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  position: relative;
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(61, 147, 70, 0.3);
`;

const Photo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Stars = styled.div`
  color: gold;
  margin: 10px 0;
`;

const Review = styled.p`
  font-style: italic;
`;

const ClientName = styled.h4`
  color: #3d9346;
`;

const ClientRole = styled.p`
  font-size: 14px;
  color: #777;
`;

const Arrow = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: #3d9346;
`;

const Dots = styled.div`
  margin-top: 15px;
`;

const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#3d9346" : "#ccc")};
  cursor: pointer;
`;