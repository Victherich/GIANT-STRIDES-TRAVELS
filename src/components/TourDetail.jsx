// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import BackButton from "./BackButton";
// import TourBookingDetailsModal from "./TourBookingDetailsModal";
// import Swal from "sweetalert2";
// import TourAccountPaymentModal from "./TourAccountPaymentModal";

// const TourDetail = () => {
//   const { id } = useParams();
//   const [tour, setTour] = useState(null);
//    const [step, setStep] = useState(0);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
  
//   const [paymentProof, setPaymentProof] = useState(null);
//   const [confirmEmail, setConfirmEmail]=useState('')

//   useEffect(() => {
//     fetch(`https://hudagiantstridetravelsandtour.com/api/getTourById.php?id=${id}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           // parse JSON string of whats_included
//           const tourData = data.tour;
//           if (tourData.whats_included) {
//             tourData.whats_included = JSON.parse(tourData.whats_included);
//           } else {
//             tourData.whats_included = [];
//           }
//           setTour(tourData);
//         }
//       });
//   }, [id]);



  
//   const handleStep1=()=>{
//     setStep(1);
//   }
  
//   const handleStep2=(e)=>{
//       e.preventDefault();
//       if(formData.email!==confirmEmail){
//           Swal.fire({text:"Emails do not match"});
//           return;
//       };
//   setStep(2);
//   }



// const handleSubmit = async () => {
//   if (!paymentProof) {
//     Swal.fire("Error", "Please upload payment proof", "error");
//     return;
//   }

//   if (!formData.name || !formData.email || !formData.phone) {
//     Swal.fire("Error", "Please fill all your details", "error");
//     return;
//   }

//   const form = new FormData();

//   // USER
//   form.append("name", formData.name);
//   form.append("email", formData.email);
//   form.append("phone", formData.phone);

//   // HOTEL
//   form.append("hotel_id", hotel.id);
//   form.append("hotel_name", hotel.name);
//   form.append("bedroom", hotel.bedroom);
//   form.append("price", hotel.price);

//   // BOOKING
//   form.append("check_in", checkInDate);
//   form.append("check_out", checkOutDate);
//   form.append("guests", selectedGuests);

//   // FILE
//   form.append("proof", paymentProof);

//   try {
//     Swal.fire({
//       title: "Submitting booking...",
//       didOpen: () => Swal.showLoading(),
//     });

//     const res = await fetch(
//       "https://hudagiantstridetravelsandtour.com/api/submitTourBooking.php",
//       {
//         method: "POST",
//         body: form,
//       }
//     );

//     const data = await res.json();
//     Swal.close();

//     if (data.success) {
//       Swal.fire("Success", "Booking submitted successfully, Please check your email inbox or spam folder for more details", "success");
//       setStep(0);
//     } else {
//       Swal.fire("Error", data.error || "Failed", "error");
//     }
//   } catch (err) {
//     Swal.close();
//     Swal.fire("Error", "Server error", "error");
//   }
// };





  

//   if (!tour) return <p>Loading...</p>;

//   return (
//     <Container>
//       <Hero>
//         <img src={`https://hudagiantstridetravelsandtour.com/api/${tour.image}`} alt={tour.title} />
//         <Overlay>
//           <h1>{tour.title}</h1>
//           <p>Location: {tour.location}</p>
//           <p>Premium Experience</p>
//         </Overlay>
//       </Hero>

//       <Content >
//         <Left>
//           <h2 style={{color:"#3d9346"}}>About this tour</h2>
//           <p><strong style={{color:"#3d9346"}}>Location: </strong>{tour.location}</p>
//           <br/>
//           <p>{tour.description}</p>
// <br/>
//           <h3 style={{color:"#3d9346"}}>What's Included</h3>
//           <ul>
//             {tour.whats_included.map((item, idx) => (
//               <li key={idx}>✔ {item}</li>
//             ))}
//           </ul>
//         </Left>

//         <Right>
//           <PriceBox>
//             <h2>NGN {Number(tour.price).toLocaleString()}</h2>
//             <button onClick={handleStep1}>Book Now</button>
//           </PriceBox>
//         </Right>
//       </Content>
//       <BackButton/>

//        <TourBookingDetailsModal
//         isOpen={step === 1}
//         onClose={() => {setStep(0);setFormData({});setConfirmEmail('')}}
//         onProceed={(e) => handleStep2(e)}
//         formData={formData}
//         setFormData={setFormData}
//         setConfirmEmail={setConfirmEmail}
//         confirmEmail={confirmEmail}
//       />
      
//       <TourAccountPaymentModal
//         isOpen={step === 2}
//         onClose={() => {setStep(0);setFormData({});setConfirmEmail('');setPaymentProof(null)}}
//         onBack={() => {setStep(1);setPaymentProof(null)}}
//         onSubmit={handleSubmit}
//         paymentProof={paymentProof}
//         setPaymentProof={setPaymentProof}
//         tour={tour}
//       />
      
//     </Container>
//   );
// };

// export default TourDetail;

// /* STYLES */
// const Container = styled.div``;

// const Hero = styled.div`
//   position: relative;
//   height: 400px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   bottom: 30px;
//   left: 30px;
//   color: white;
//   background:rgba(0,0,0,0.7);
//   padding:10px;
//   border-radius:20px;

//   h1 {
//     font-size: 40px;
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   padding: 40px;
//   gap: 40px;
// `;

// const Left = styled.div`
//   flex: 2;
// `;

// const Right = styled.div`
//   flex: 1;
// `;

// const PriceBox = styled.div`
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 5px 20px rgba(0,0,0,0.1);

//   button {
//     width: 100%;
//     padding: 12px;
//     background: #3d9346;
//     color: white;
//     border: none;
//     border-radius: 6px;
//     margin-top: 10px;
//     cursor: pointer;
//   }
// `;



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import TourBookingDetailsModal from "./TourBookingDetailsModal";
import TourAccountPaymentModal from "./TourAccountPaymentModal";
import Swal from "sweetalert2";

const TourDetail = () => {
  const { id } = useParams();

  const [tour, setTour] = useState(null);
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [confirmEmail, setConfirmEmail] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);

  /* ================= FETCH TOUR ================= */
  useEffect(() => {
    fetch(
      `https://hudagiantstridetravelsandtour.com/api/getTourById.php?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const tourData = data.tour;

          // Parse included items safely
          try {
            tourData.whats_included = tourData.whats_included
              ? JSON.parse(tourData.whats_included)
              : [];
          } catch {
            tourData.whats_included = [];
          }

          setTour(tourData);
        } else {
          Swal.fire("Error", "Tour not found", "error");
        }
      })
      .catch(() => {
        Swal.fire("Error", "Failed to load tour", "error");
      });
  }, [id]);

  /* ================= STEP HANDLERS ================= */

  const handleStep1 = () => {
    setStep(1);
  };

  const handleStep2 = () => {
    // e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      Swal.fire("Error", "Please fill all fields", "error");
      return;
    }

    if (formData.email !== confirmEmail) {
      Swal.fire("Error", "Emails do not match", "error");
      return;
    }

    setStep(2);
  };

  /* ================= SUBMIT BOOKING ================= */

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

    // TOUR ✅
    form.append("tour_id", tour.id);
    form.append("tour_title", tour.title);
    form.append("tour_price", tour.price);

    // FILE
    form.append("proof", paymentProof);

    try {
      Swal.fire({
        title: "Submitting booking...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const res = await fetch(
        "https://hudagiantstridetravelsandtour.com/api/submitTourBooking.php",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Booking Submitted!",
          text: "Please check your email inbox or spam folder.",
          confirmButtonColor: "#3D9346",
        });

        // RESET EVERYTHING ✅
        setStep(0);
        setFormData({ name: "", email: "", phone: "" });
        setConfirmEmail("");
        setPaymentProof(null);
      } else {
        Swal.fire("Error", data.error || "Failed", "error");
      }
    } catch (err) {
      Swal.close();
      Swal.fire("Error", "Server error", "error");
    }
  };

  /* ================= UI ================= */

  if (!tour) return <p style={{ padding: "40px" }}>Loading...</p>;

  return (
    <Container>
      {/* HERO */}
      <Hero>
        <img
          src={`https://hudagiantstridetravelsandtour.com/api/${tour.image}`}
          alt={tour.title}
        />
        <Overlay>
          <h1>{tour.title}</h1>
          <p>Location: {tour.location}</p>
          <p>Premium Experience</p>
        </Overlay>
      </Hero>

      {/* CONTENT */}
      <Content>
        <Left>
          <h2 style={{ color: "#3d9346" }}>About this tour</h2>

          <p>
            <strong style={{ color: "#3d9346" }}>Location: </strong>
            {tour.location}
          </p>

          <br />

          <p>{tour.description}</p>

          <br />

          <h3 style={{ color: "#3d9346" }}>What's Included</h3>

          <ul>
            {tour.whats_included.map((item, idx) => (
              <li key={idx}>✔ {item}</li>
            ))}
          </ul>
        </Left>

        <Right>
          <PriceBox>
            <h2>NGN {Number(tour.price).toLocaleString()}</h2>
            <button onClick={handleStep1}>Book Now</button>
          </PriceBox>
        </Right>
      </Content>

      <BackButton />

      {/* STEP 1 */}
      <TourBookingDetailsModal
        isOpen={step === 1}
        onClose={() => {
          setStep(0);
          setFormData({ name: "", email: "", phone: "" });
          setConfirmEmail("");
        }}
        onProceed={handleStep2}
        formData={formData}
        setFormData={setFormData}
        confirmEmail={confirmEmail}
        setConfirmEmail={setConfirmEmail}
      />

      {/* STEP 2 */}
      <TourAccountPaymentModal
        isOpen={step === 2}
        onClose={() => {
          setStep(0);
          setFormData({ name: "", email: "", phone: "" });
          setConfirmEmail("");
          setPaymentProof(null);
        }}
        onBack={() => {
          setStep(1);
          setPaymentProof(null);
        }}
        onSubmit={handleSubmit}
        paymentProof={paymentProof}
        setPaymentProof={setPaymentProof}
        tour={tour} // ✅ FIXED
      />
    </Container>
  );
};

export default TourDetail;





/* ================= STYLES ================= */

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
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 20px;

  h1 {
    font-size: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

  button {
    width: 100%;
    padding: 12px;
    background: #3d9346;
    color: white;
    border: none;
    border-radius: 6px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      background: #2f7c38;
    }
  }
`;