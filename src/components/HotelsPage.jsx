import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import hotelsbg from '../Images/hotelsbg.png'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Sample hotel images (replace with real data/API later)
// const hotels = [
//   {
//     name: "Transcorp Hilton Abuja",
//     location: "Abuja, Nigeria",
//     price: "₦180,000 / night",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
//     id:"1"
//   },
//   {
//     name: "Eko Hotels & Suites",
//     location: "Lagos, Nigeria",
//     price: "₦150,000 / night",
//     image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
//     id:"2"
//   },
//   {
//     name: "Radisson Blu Anchorage",
//     location: "Victoria Island, Lagos",
//     price: "₦200,000 / night",
//     image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//     id:"3"
//   },
//   {
//     name: "Sheraton Hotel",
//     location: "Ikeja, Lagos",
//     price: "₦130,000 / night",
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
//     id:"4"
//   },
// ];



const HotelsPage = () => {
    const navigate = useNavigate();
    const [hotels,setHotels]=useState([]);


const BASE_URL = "https://hudagiantstridetravelsandtour.com/api/";
    const fetchHotels = async () => {
      Swal.fire({
        title: "Loading hotels...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });
    
      try {
        const res = await fetch(BASE_URL + "getHotels.php");
    
        // HANDLE BAD RESPONSE
        if (!res.ok) {
          throw new Error("Server error");
        }
    
        const data = await res.json();
    
        if (!data.success) {
          throw new Error(data.error || "Failed to fetch hotels");
        }
    
        // 🔥 NORMALIZE DATA (VERY IMPORTANT)
        const formattedHotels = data.hotels.map((hotel) => {
          return {
            ...hotel,
    
            // Ensure arrays
            images: Array.isArray(hotel.images) ? hotel.images : [],
            amenities: Array.isArray(hotel.amenities) ? hotel.amenities : [],
    
            // Ensure numbers
            price: Number(hotel.price),
            bedroom: Number(hotel.bedroom),
            qty: Number(hotel.qty),
    
            // FIX IMAGE URL (if backend returns relative path)
            imagesFull: (hotel.images || []).map(
              (img) =>
                img.startsWith("http")
                  ? img
                  : BASE_URL + img
            ),
          };
        });
    
        setHotels(formattedHotels);
        Swal.close();
    
      } catch (err) {
        Swal.close();
        console.error("FETCH ERROR:", err);
    
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message || "Something went wrong",
        });
      }
    };


    useEffect(()=>{
        fetchHotels();
    },[])


  return (
    <Page>
      {/* HERO SECTION */}
      <Hero>
        <Overlay />
        <HeroContent>
          <h1>Find Your Perfect Stay</h1>
          <p>Discover the best hotels at the best prices</p>

          {/* <SearchBox>
            <input type="text" placeholder="Where are you going?" />
            <input type="date" />
            <input type="date" />
            <button>Search</button>
          </SearchBox> */}
        </HeroContent>
      </Hero>

      {/* HOTEL LIST */}
      <Section>
        <Container>
          <HeaderRow>
            <h2>Available Hotels</h2>
            <span>{hotels.length} properties found</span>
          </HeaderRow>

          <Fade cascade direction="up" duration={500} triggerOnce>
            <Grid>
              {hotels.map((hotel, index) => (
                <Card key={index}>
                  <Image src={`https://hudagiantstridetravelsandtour.com/api/${hotel.images?.[0]}`} alt={hotel.name} />

                  <CardContent>
                    <h3>{hotel.name}</h3>
                    <p className="location">{hotel.location}</p>

                    <BottomRow>
                      <Price>NGN {Number(hotel.price).toLocaleString()}</Price>
                      <BookBtn onClick={()=>navigate(`/hotel/${hotel.id}`)}>Book Now</BookBtn>
                    </BottomRow>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Fade>
        </Container>
      </Section>
    </Page>
  );
};

export default HotelsPage;

/* ================= STYLES ================= */

const Page = styled.div`
  font-family: "Inter", sans-serif;
`;

/* HERO */
const Hero = styled.section`
  height: 50vh;
  background-image: url(${hotelsbg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`;

const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 12px;
  flex-wrap: wrap;
  justify-content: center;

  input {
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 8px;
    min-width: 150px;
  }

  button {
    background: #3D9346;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #2f7c38;
    }
  }
`;

/* SECTION */
const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    color: #3D9346;
  }

  span {
    color: #666;
  }
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

/* CARD */
const Card = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;

  h3 {
    margin-bottom: 0.3rem;
  }

  .location {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 1rem;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-weight: bold;
  color: #3D9346;
`;

const BookBtn = styled.button`
  background: #3D9346;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #2f7c38;
  }
`;