
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';
import PaystackPop from '@paystack/inline-js';
import fb from '../Images/usa.png';
import { airportList } from './AirportList';

// --- Global Constants ---
const FLIGHT_PRICE_PER_PERSON = 150000; // Fixed price in NGN
const BUSINESS_FEE = 1500; // Fixed business fee in NGN

// --- Manual Airport List ---


// // --- Styled Components ---
// const BookingSectionWrapper = styled.div`
//   padding-top:100px;
//   position: relative;
//   width: 100%;
//   min-height: 100vh;
//   background-image: url(${fb});
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: #ffffff;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.6);
//   z-index: 0;
// `;

// const BookingFormContainer = styled.div`
//   position: relative;
//   z-index: 1;
//   background-color: #1246c9ff;
//   border-radius: 15px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//   padding: 40px;
//   max-width: 1200px;
//   width: 90%;
//   display: flex;
//   flex-direction: column;
// `;

// const FormTitle = styled.h2`
//   color: #ffffff;
//   font-size: 28px;
//   text-align: center;
//   margin-bottom: 20px;
// `;

const FormRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

// const Label = styled.label`
//   font-size: 14px;
//   font-weight: bold;
//   color: rgba(255, 255, 255, 0.8);
//   margin-bottom: 5px;
// `;

// const TripTypeSelect = styled.select`
//   appearance: none;
//   background-color: #ffffff;
//   color: #0d286d;
//   font-size: 16px;
//   font-weight: bold;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 150px;
// `;

// const InputField = styled.input`
//   width: 100%;
//   padding: 15px 15px 15px 45px;
//   border: none;
//   border-radius: 8px;
//   font-size: 16px;
//   color: #333333;
//   &::placeholder {
//     color: #999999;
//   }
// `;

const InputIconContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

// const InputIcon = styled.div`
//   position: absolute;
//   left: 15px;
//   color: #0d286d;
//   font-size: 20px;
//   margin-top:10px;
// `;

const InputWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

// const ActionButton = styled.button`
//   background-color: #e60000;
//   color: #ffffff;
//   font-size: 20px;
//   font-weight: bold;
//   padding: 15px 40px;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   &:hover { background-color: #cc0000; }
//   &:disabled { background-color: #cccccc; cursor: not-allowed; }
// `;

// const ResultsContainer = styled.div`
//   background-color: rgba(255, 255, 255, 0.9);
//   padding: 30px;
//   border-radius: 10px;
//   color: #333;
//   text-align: center;
// `;

const PassengerInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

// const BackButton = styled.button`
//   background: none;
//   border: none;
//   color: #ffffff;
//   cursor: pointer;
//   margin-top: 15px;
//   font-size: 16px;
//   &:hover { text-decoration: underline; }
// `;

// const BackButton2 = styled.button`
//   background: none;
//   border: none;
//   color: #222;
//   cursor: pointer;
//   margin-top: 15px;
//   font-size: 16px;
//   &:hover { text-decoration: underline; }
// `;

// // --- Suggestions Dropdown ---
// const SuggestionsList = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   right: 0;
//   background: #fff;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   z-index: 10;
//   max-height: 200px;
//   overflow-y: auto;
// `;

// const SuggestionItem = styled.li`
//   padding: 10px;
//   cursor: pointer;
//   font-size: 14px;
//   color:#222;
//   &:hover {
//     background: #f0f0f0;
//   }
// `;


const BookingSectionWrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.95)),
              url(${fb});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  display: none;
`;

const BookingFormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  padding: 50px;
  max-width: 1000px;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  color: #3D9346;
  font-size: 30px;
  text-align: center;
  margin-bottom: 25px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #3D9346;
  margin-bottom: 6px;
`;

const TripTypeSelect = styled.select`
  background-color: #f5f5f5;
  color: #3D9346;
  font-size: 15px;
  font-weight: 600;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
`;

const InputField = styled.input`
  width: 100%;
  padding: 14px 15px 14px 45px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  background: #fafafa;
  color: #333;

  &:focus {
    outline: none;
    border-color: #3D9346;
    background: #fff;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 15px;
  color: #3D9346;
  font-size: 18px;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background-color: #3D9346;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  padding: 14px 35px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2f7a38;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ResultsContainer = styled.div`
  background-color: #ffffff;
  padding: 35px;
  border-radius: 15px;
  color: #333;
  text-align: center;
  border: 1px solid #eee;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #3D9346;
  cursor: pointer;
  margin-top: 15px;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const BackButton2 = styled(BackButton)`
  color: #333;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  list-style: none;
  margin: 5px 0 0;
  padding: 0;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  &:hover {
    background: #f3f3f3;
  }
`;

// --- React Component ---
const FlightBookingApp = () => {
  const [step, setStep] = useState('search');
  const [formData, setFormData] = useState({
    tripType: 'Round Trip',
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [blurTimeout, setBlurTimeout] = useState(null);

  

  const totalAmount = formData.passengers * FLIGHT_PRICE_PER_PERSON + BUSINESS_FEE;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "origin") {
      setOriginSuggestions(
        airportList.filter(ap => ap.toLowerCase().includes(value.toLowerCase()))
      );
    }
    if (name === "destination") {
      setDestinationSuggestions(
        airportList.filter(ap => ap.toLowerCase().includes(value.toLowerCase()))
      );
    }
  };

  const handleSelectSuggestion = (field, suggestion) => {
    setFormData(prev => ({ ...prev, [field]: suggestion }));
    if (field === "origin") setOriginSuggestions([]);
    if (field === "destination") setDestinationSuggestions([]);
  };

  const handleFlightSearch = (e) => {
    e.preventDefault();
    if (!formData.origin || !formData.destination || !formData.departureDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all the required flight details.',
      });
      return;
    }
    // setStep('results');
    Swal.fire({text:"Please wait...", timer:3000
    }).then(()=>{setStep('results')})
    Swal.showLoading();
  };

  const handleProceedToBooking = () => setStep('details');

  const handlePayment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in your contact information.',
      });
      return;
    }
    payWithPaystack();
  };










  const payWithPaystack = () => {
    setIsSubmitting(true);
    const paystack = new PaystackPop();
    paystack.newTransaction({
         key: 'pk_test_41a396ef9a4f9c53cf4f1139cc7e7002fc085f55',
      amount: totalAmount * 100, // in kobo
      email: formData.email,
      firstname: formData.name,
      phone: formData.phone,
      onSuccess: (transaction) => {
        sendPaymentEmail(transaction.reference, formData);

  
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'An email with your booking details has been sent. Please check your inbox or spam folder.',
          confirmButtonColor: '#3085d6',
        }).then(() => {
          setStep('search');
          window.location.reload();
        });
      },
      onCancel: () => {
        setIsSubmitting(false);
        Swal.fire({
          icon: 'info',
          title: 'Payment Cancelled',
          text: 'You cancelled the transaction.',
        });
      },
      onClose: () => {
        setIsSubmitting(false);
      },
    });
  };

  const sendPaymentEmail = async (reference, details) => {
    try {
      const response = await fetch('https://hudagiantstridetravelsandtour.com/api/send-booking-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, ...details, amount: totalAmount }),
      });
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Failed to send payment email');
      }
      console.log('✅ Booking email sent successfully.');
    } catch (error) {
      console.error('❌ Error sending booking email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Email Failed',
        text: 'Payment was successful, but email could not be sent. Please contact support.',
      });
    }
  };







  // --- Render ---
  const renderContent = () => {
    switch (step) {
      case 'search':
        return (
          <form onSubmit={handleFlightSearch}>
            <FormTitle>Book a Flight</FormTitle>
            <FormRow>
              <FormInput>
                <TripTypeSelect
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                >
                  <option>Round Trip</option>
                  <option>One Way</option>
                </TripTypeSelect>
              </FormInput>

          {/* ORIGIN */}
<InputWrapper>
  <InputIcon><FaMapMarkerAlt /></InputIcon>
  <InputField
    name="origin"
    placeholder="From?"
    value={formData.origin}
    onChange={handleChange}
    autoComplete="off"
    onFocus={() => {
      if (formData.origin) {
        setOriginSuggestions(
          airportList.filter(ap =>
            ap.toLowerCase().includes(formData.origin.toLowerCase())
          )
        );
      }
    }}
    onBlur={() => {
      setBlurTimeout(setTimeout(() => setOriginSuggestions([]), 200));
    }}
  />
  {originSuggestions.length > 0 && (
    <SuggestionsList>
      {originSuggestions.map((s, i) => (
        <SuggestionItem
          key={i}
          onClick={() => {
            clearTimeout(blurTimeout);
            handleSelectSuggestion("origin", s);
          }}
        >
          {s}
        </SuggestionItem>
      ))}
    </SuggestionsList>
  )}
</InputWrapper>

{/* DESTINATION */}
<InputWrapper>
  <InputIcon><FaMapMarkerAlt /></InputIcon>
  <InputField
    name="destination"
    placeholder="To?"
    value={formData.destination}
    onChange={handleChange}
    autoComplete="off"
    onFocus={() => {
      if (formData.destination) {
        setDestinationSuggestions(
          airportList.filter(ap =>
            ap.toLowerCase().includes(formData.destination.toLowerCase())
          )
        );
      }
    }}
    onBlur={() => {
      setBlurTimeout(setTimeout(() => setDestinationSuggestions([]), 200));
    }}
  />
  {destinationSuggestions.length > 0 && (
    <SuggestionsList>
      {destinationSuggestions.map((s, i) => (
        <SuggestionItem
          key={i}
          onClick={() => {
            clearTimeout(blurTimeout);
            handleSelectSuggestion("destination", s);
          }}
        >
          {s}
        </SuggestionItem>
      ))}
    </SuggestionsList>
  )}
</InputWrapper>

            </FormRow>

            <FormRow>
              <p>Departure Date:</p>
              <InputIconContainer>
                <InputIcon><FaCalendarAlt /></InputIcon>
                <InputField
                  name="departureDate"
                  type="date"
                  value={formData.departureDate}
                  onChange={handleChange}
                  required
                />
              </InputIconContainer>

              <p>Return Date:</p>
              <InputIconContainer>
                <InputIcon><FaCalendarAlt /></InputIcon>
                <InputField
                  name="returnDate"
                  type="date"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required={formData.tripType === 'Round Trip'}
                  disabled={formData.tripType === 'One Way'}
                />
              </InputIconContainer>

              <p>Passengers:</p>
              <InputIconContainer>
                <InputIcon><FaUser /></InputIcon>
                <InputField
                  name="passengers"
                  type="number"
                  min="1"
                  value={formData.passengers}
                  onChange={handleChange}
                  required
                />
              </InputIconContainer>
            </FormRow>

            <ActionButton type="submit" >
              <FaSearch /> Search
            </ActionButton>
          </form>
        );

      case 'results':
        return (
          <ResultsContainer>
            <FormTitle>Flight Found!</FormTitle>
            <p><strong>{formData.origin}</strong> → <strong>{formData.destination}</strong></p>
            <p>Departure: <strong>{formData.departureDate}</strong></p>
            {formData.tripType === 'Round Trip' && <p>Return: <strong>{formData.returnDate}</strong></p>}
            <p>Passengers: <strong>{formData.passengers}</strong></p>
            <h3>Total Price: NGN {totalAmount.toLocaleString()}</h3>
              <p style={{marginTop: '20px', fontStyle: 'italic', fontWeight:"bold", fontSize:"1.1rem", textDecoration:"underline"}}>Note: This is a pre-determined offer to initiate your booking. A travel agent will contact you for final arrangements.</p>
            <ActionButton onClick={handleProceedToBooking} style={{ marginTop: '20px', marginRight:"10px" }}>
              Proceed to Booking
            </ActionButton>
            <BackButton2 onClick={() => setStep('search')}>&larr; Back to Search</BackButton2>
          </ResultsContainer>
        );

      case 'details':
        return (
          <form onSubmit={handlePayment}>
            <FormTitle>Passenger & Contact Details</FormTitle>
            <PassengerInputSection>
              <FormInput>
                <Label>Name</Label>
                <InputField name="name" value={formData.name} onChange={handleChange} required />
              </FormInput>
              <FormInput>
                <Label>Email</Label>
                <InputField name="email" type="email" value={formData.email} onChange={handleChange} required />
              </FormInput>
              <FormInput>
                <Label>Phone</Label>
                <InputField name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </FormInput>
            </PassengerInputSection>
            <FormRow style={{ marginTop: '30px' }}>
              <ActionButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : `Pay NGN ${totalAmount.toLocaleString()}`}
              </ActionButton>
            </FormRow>
            <BackButton onClick={() => setStep('results')}>&larr; Back</BackButton>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <BookingSectionWrapper>
      <Overlay />
      <BookingFormContainer>
        {renderContent()}
      </BookingFormContainer>
    </BookingSectionWrapper>
  );
};

export default FlightBookingApp;