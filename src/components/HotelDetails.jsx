// import React from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";
// import { FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaUtensils } from "react-icons/fa";

// /* TEMP DATA (later replace with API or global state) */
// const hotels = [
//   {
//     id: "1",
//     name: "Transcorp Hilton Abuja",
//     location: "Abuja, Nigeria",
//     price: "₦180,000 / night",
//     images: [
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945",
//       "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//     ],
//     description:
//       "Experience luxury and comfort at Transcorp Hilton Abuja. Enjoy world-class amenities, premium rooms, and exceptional service tailored for both business and leisure travelers.",
//   },
// ];

// const HotelDetails = () => {
//   const { id } = useParams();
//   const hotel = hotels.find((h) => h.id === id);

//   if (!hotel) return <h2>Hotel not found</h2>;

//   return (
//     <Page>
//       {/* IMAGE GALLERY */}
//       <Gallery>
//         <MainImage src={hotel.images[0]} />
//         <SideImages>
//           {hotel.images.slice(1).map((img, i) => (
//             <img key={i} src={img} alt="hotel" />
//           ))}
//         </SideImages>
//       </Gallery>

//       {/* CONTENT */}
//       <Container>
//         <Content>
//           <Fade direction="up" triggerOnce>
//             <Left>
//               <h1>{hotel.name}</h1>

//               <Location>
//                 <FaMapMarkerAlt /> {hotel.location}
//               </Location>

//               <Rating>
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} color="#FFD700" />
//                 ))}
//                 <span>5.0 Excellent</span>
//               </Rating>

//               <Description>{hotel.description}</Description>

//               {/* AMENITIES */}
//               <Amenities>
//                 <h3>Amenities</h3>
//                 <AmenityList>
//                   <li><FaWifi /> Free WiFi</li>
//                   <li><FaSwimmingPool /> Swimming Pool</li>
//                   <li><FaUtensils /> Restaurant</li>
//                 </AmenityList>
//               </Amenities>
//             </Left>
//           </Fade>

//           {/* BOOKING BOX */}
//           <Right>
//             <BookingBox>
//               <h2>{hotel.price}</h2>

//               <CheckInputs>
//                 <input type="date" />
//                 <input type="date" />
//               </CheckInputs>

//               <Guests>
//                 <select>
//                   <option>1 Guest</option>
//                   <option>2 Guests</option>
//                   <option>3 Guests</option>
//                 </select>
//               </Guests>

//               <BookBtn>Reserve Now</BookBtn>

//               <Note>No payment needed today</Note>
//             </BookingBox>
//           </Right>
//         </Content>
//       </Container>
//     </Page>
//   );
// };

// export default HotelDetails;

// /* ================= STYLES ================= */

// const Page = styled.div`
//   font-family: "Inter", sans-serif;
// `;

// /* GALLERY */
// const Gallery = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 10px;
//   padding: 20px;

//   @media(max-width: 768px){
//     grid-template-columns: 1fr;
//   }
// `;

// const MainImage = styled.img`
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
//   border-radius: 15px;
// `;

// const SideImages = styled.div`
//   display: grid;
//   gap: 10px;

//   img {
//     width: 100%;
//     height: 195px;
//     object-fit: cover;
//     border-radius: 15px;
//   }

//   @media(max-width:768px){
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// /* CONTENT */
// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 2rem;
// `;

// const Content = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 2rem;

//   @media(max-width: 768px){
//     grid-template-columns: 1fr;
//   }
// `;

// const Left = styled.div`
//   h1 {
//     font-size: 2rem;
//     margin-bottom: 0.5rem;
//   }
// `;

// const Location = styled.p`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   color: #555;
// `;

// const Rating = styled.div`
//   margin: 1rem 0;
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   span {
//     margin-left: 10px;
//     font-weight: 600;
//   }
// `;

// const Description = styled.p`
//   margin: 1rem 0;
//   color: #444;
//   line-height: 1.6;
// `;

// /* AMENITIES */
// const Amenities = styled.div`
//   margin-top: 2rem;

//   h3 {
//     margin-bottom: 1rem;
//   }
// `;

// const AmenityList = styled.ul`
//   list-style: none;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 1rem;

//   li {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//   }
// `;

// /* BOOKING BOX */
// const Right = styled.div`
//   position: relative;
// `;

// const BookingBox = styled.div`
//   position: sticky;
//   top: 100px;
//   background: #fff;
//   padding: 1.5rem;
//   border-radius: 15px;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.1);

//   h2 {
//     color: #3D9346;
//     margin-bottom: 1rem;
//   }
// `;

// const CheckInputs = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   input {
//     padding: 10px;
//     border-radius: 8px;
//     border: 1px solid #ddd;
//   }
// `;

// const Guests = styled.div`
//   margin-top: 1rem;

//   select {
//     width: 100%;
//     padding: 10px;
//     border-radius: 8px;
//   }
// `;

// const BookBtn = styled.button`
//   margin-top: 1rem;
//   width: 100%;
//   background: #3D9346;
//   color: #fff;
//   padding: 12px;
//   border: none;
//   border-radius: 10px;
//   font-weight: bold;
//   cursor: pointer;

//   &:hover {
//     background: #2f7c38;
//   }
// `;

// const Note = styled.p`
//   margin-top: 10px;
//   font-size: 0.8rem;
//   color: #777;
//   text-align: center;
// `;



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";
import Swal from "sweetalert2";
import BackButton from "./BackButton";
import HotelPayment from "./HotelPayment";
import HotelBookingDetailsModal from "./HotelBookingDetailsModal";
import HotelAccountPaymentModal from "./HotelAccountPaymentModal";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [checkInDate, setCheckInDate]=useState('');
  const [checkOutDate, setCheckOutDate]=useState('');
  const[selectedGuests, setSelectedGuests]=useState('');
  const [step, setStep] = useState(0);

  console.log(selectedGuests);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
});

const [paymentProof, setPaymentProof] = useState(null);
const [confirmEmail, setConfirmEmail]=useState('')



  // FETCH HOTEL BY ID
  const fetchHotel = async () => {
    Swal.fire({ title: "Loading hotel...", didOpen: () => Swal.showLoading() });

    try {
      const res = await fetch(
        `https://hudagiantstridetravelsandtour.com/api/getHotelById.php?id=${id}`
      );

      const data = await res.json();

      Swal.close();

      if (data.success) {
        const h = data.hotel;

        // SAFE PARSE IMAGES
        let images = [];
        try {
          images =
            typeof h.images === "string" ? JSON.parse(h.images) : h.images;
        } catch {
          images = [];
        }

        setHotel({
          ...h,
          images,
        });
      } else {
        Swal.fire("Error", data.error, "error");
      }
    } catch (err) {
      Swal.close();
      Swal.fire("Error", "Failed to fetch hotel", "error");
    }
  };

  useEffect(() => {
    fetchHotel();
  }, [id]);


const handleSubmit = async () => {
  if (!paymentProof) {
    Swal.fire("Error", "Please upload payment proof", "error");
    return;
  }

  if (!formData.name || !formData.email || !formData.phone) {
    Swal.fire("Error", "Please fill all your details", "error");
    return;
  }

  const form = new FormData();

  // USER
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("phone", formData.phone);

  // HOTEL
  form.append("hotel_id", hotel.id);
  form.append("hotel_name", hotel.name);
  form.append("bedroom", hotel.bedroom);
  form.append("price", hotel.price);

  // BOOKING
  form.append("check_in", checkInDate);
  form.append("check_out", checkOutDate);
  form.append("guests", selectedGuests);

  // FILE
  form.append("proof", paymentProof);

  try {
    Swal.fire({
      title: "Submitting booking...",
      didOpen: () => Swal.showLoading(),
    });

    const res = await fetch(
      "https://hudagiantstridetravelsandtour.com/api/submitHotelBooking.php",
      {
        method: "POST",
        body: form,
      }
    );

    const data = await res.json();
    Swal.close();

    if (data.success) {
      Swal.fire("Success", "Booking submitted successfully, Please check your email inbox or spam folder for more details", "success");
      setStep(0);
    } else {
      Swal.fire("Error", data.error || "Failed", "error");
    }
  } catch (err) {
    Swal.close();
    Swal.fire("Error", "Server error", "error");
  }
};


const handleStep1=()=>{
  if(!checkInDate||!checkOutDate||!selectedGuests){
    Swal.fire({text:"Please ensure to enter check-in date, check-out date and number of guests"})
    return;
  }

  setStep(1);
}

const handleStep2=(e)=>{
    e.preventDefault();
    if(formData.email!==confirmEmail){
        Swal.fire({text:"Emails do not match"});
        return;
    };
setStep(2);
}




  if (!hotel) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <Page>
      {/* GALLERY */}
      <Gallery>
        <MainImage src={`https://hudagiantstridetravelsandtour.com/api/${hotel.images?.[0]}`} />
        <SideImages>
          {hotel.images?.slice(1, 3).map((img, i) => (
            <img key={i} src={`https://hudagiantstridetravelsandtour.com/api/${img}`} alt="hotel" />
          ))}
        </SideImages>
      </Gallery>

      {/* CONTENT */}
      <Container>
        <Content>
          <Fade direction="up" triggerOnce>
            <Left>
              <h1 style={{color:"#3D9346"}}>{hotel.name} - {hotel.bedroom} Room(s)</h1>

              <Location>
                <FaMapMarkerAlt /> {hotel.location}
              </Location>
               <Location>
                <FaMapMarkerAlt /> {hotel.address}
              </Location>

              {/* <Rating>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="#FFD700" />
                ))}
                <span>5.0 Excellent</span>
              </Rating> */}

              <Description>{hotel.description}</Description>

              {/* AMENITIES */}
              <Amenities>
                <h3 style={{color:"#3D9346"}}>Amenities</h3>
                <ul>
            {hotel.amenities.map((item, idx) => (
              <li key={idx}>✔ {item}</li>
            ))}
          </ul>
                {/* <AmenityList>
                  <li>
                    <FaWifi /> Free WiFi
                  </li>
                  <li>
                    <FaSwimmingPool /> Swimming Pool
                  </li>
                  <li>
                    <FaUtensils /> Restaurant
                  </li>
                </AmenityList> */}
              </Amenities>
            </Left>
          </Fade>

          {/* BOOKING BOX */}
          <Right>
            <BookingBox>
              <h2>₦ {Number(hotel.price).toLocaleString()} / night</h2>
              

              <CheckInputs>
                <p style={{fontSize:"small"}}>Select check-in Date:</p>
                <input type="date" onChange={(e)=>setCheckInDate(e.target.value)}/>
                <br/>
                <p style={{fontSize:"small"}}>Select check-out Date:</p>
                <input type="date" onChange={(e)=>setCheckOutDate(e.target.value)}/>
              </CheckInputs>
           

              <Guests>
                <p style={{fontSize:"small"}}>Number of Guests (eg, 1, 2, 3, etc)</p>
                <input type="number" onChange={(e)=>setSelectedGuests(e.target.value)}/>
              </Guests>

              <BookBtn onClick={handleStep1}>Reserve Now</BookBtn>

        

            </BookingBox>
          </Right>
        </Content>
      </Container>
      <BackButton/>
      <HotelBookingDetailsModal
  isOpen={step === 1}
  onClose={() => {setStep(0);setFormData({});setConfirmEmail('')}}
  onProceed={(e) => handleStep2(e)}
  formData={formData}
  setFormData={setFormData}
  setConfirmEmail={setConfirmEmail}
  confirmEmail={confirmEmail}
/>

<HotelAccountPaymentModal
  isOpen={step === 2}
  onClose={() => {setStep(0);setFormData({});setConfirmEmail('');setPaymentProof(null)}}
  onBack={() => {setStep(1);setPaymentProof(null)}}
  onSubmit={handleSubmit}
  paymentProof={paymentProof}
  setPaymentProof={setPaymentProof}
  hotel={hotel}
/>


    </Page>
  );
};

export default HotelDetails;

// /* ================= STYLES ================= */

// const Page = styled.div`
//   font-family: "Inter", sans-serif;
// `;

// const Gallery = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 10px;
//   padding: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const MainImage = styled.img`
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
//   border-radius: 15px;
// `;

// const SideImages = styled.div`
//   display: grid;
//   gap: 10px;

//   img {
//     width: 100%;
//     height: 195px;
//     object-fit: cover;
//     border-radius: 15px;
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 2rem;
// `;

// const Content = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Left = styled.div``;

// const Location = styled.p`
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   color: #555;
// `;

// const Rating = styled.div`
//   margin: 1rem 0;
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   span {
//     margin-left: 10px;
//     font-weight: 600;
//   }
// `;

// const Description = styled.p`
//   margin: 1rem 0;
//   color: #444;
//   line-height: 1.6;
// `;

// const Amenities = styled.div`
//   margin-top: 2rem;
// `;

// const AmenityList = styled.ul`
//   list-style: none;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 1rem;
// `;

// const Right = styled.div`
//   position: relative;
// `;

// const BookingBox = styled.div`
//   position: sticky;
//   top: 100px;
//   background: #fff;
//   padding: 1.5rem;
//   border-radius: 15px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
// `;

// const CheckInputs = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const Guests = styled.div`
//   margin-top: 1rem;
// `;

// const BookBtn = styled.button`
//   margin-top: 1rem;
//   width: 100%;
//   background: #3d9346;
//   color: #fff;
//   padding: 12px;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
// `;

// const Note = styled.p`
//   margin-top: 10px;
//   font-size: 0.8rem;
//   text-align: center;
// `;


/* ================= STYLES ================= */

const Page = styled.div`
  font-family: "Inter", sans-serif;
`;

/* GALLERY */
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  padding: 20px;

  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
`;

const SideImages = styled.div`
  display: grid;
  gap: 10px;

  img {
    width: 100%;
    height: 195px;
    object-fit: cover;
    border-radius: 15px;
  }

  @media(max-width:768px){
    grid-template-columns: 1fr 1fr;
  }
`;

/* CONTENT */
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #555;
`;

const Rating = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  color: #444;
  line-height: 1.6;
`;

/* AMENITIES */
const Amenities = styled.div`
  margin-top: 2rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const AmenityList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

/* BOOKING BOX */
const Right = styled.div`
  position: relative;
`;

const BookingBox = styled.div`
  position: sticky;
  top: 100px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);

  h2 {
    color: #3D9346;
    margin-bottom: 1rem;
  }
`;

const CheckInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

const Guests = styled.div`
  margin-top: 1rem;

  select {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
  }

   input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

const BookBtn = styled.button`
  margin-top: 1rem;
  width: 100%;
  background: #3D9346;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #2f7c38;
  }
`;

const Note = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #777;
  text-align: center;
`;


