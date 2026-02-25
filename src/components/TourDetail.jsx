import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    fetch(`https://hudagiantstridetravelsandtour.com/api/getTourById.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          // parse JSON string of whats_included
          const tourData = data.tour;
          if (tourData.whats_included) {
            tourData.whats_included = JSON.parse(tourData.whats_included);
          } else {
            tourData.whats_included = [];
          }
          setTour(tourData);
        }
      });
  }, [id]);

  if (!tour) return <p>Loading...</p>;

  return (
    <Container>
      <Hero>
        <img src={`https://hudagiantstridetravelsandtour.com/api/${tour.image}`} alt={tour.title} />
        <Overlay>
          <h1>{tour.title}</h1>
          <p>Location: {tour.location}</p>
          <p>Premium Experience</p>
        </Overlay>
      </Hero>

      <Content >
        <Left>
          <h2 style={{color:"#3d9346"}}>About this tour</h2>
          <p><strong style={{color:"#3d9346"}}>Location: </strong>{tour.location}</p>
          <br/>
          <p>{tour.description}</p>
<br/>
          <h3 style={{color:"#3d9346"}}>What's Included</h3>
          <ul>
            {tour.whats_included.map((item, idx) => (
              <li key={idx}>✔ {item}</li>
            ))}
          </ul>
        </Left>

        <Right>
          <PriceBox>
            <h2>NGN {Number(tour.price).toLocaleString()}</h2>
            <button>Book Now</button>
          </PriceBox>
        </Right>
      </Content>
      <BackButton/>
    </Container>
  );
};

export default TourDetail;

/* STYLES */
const Container = styled.div``;

const Hero = styled.div`
  position: relative;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  background:rgba(0,0,0,0.7);
  padding:10px;
  border-radius:20px;

  h1 {
    font-size: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 40px;
  gap: 40px;
`;

const Left = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 1;
`;

const PriceBox = styled.div`
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);

  button {
    width: 100%;
    padding: 12px;
    background: #3d9346;
    color: white;
    border: none;
    border-radius: 6px;
    margin-top: 10px;
    cursor: pointer;
  }
`;