import React from "react";
import styled from "styled-components";

const HotelAccountPaymentModal = ({
  isOpen,
  onClose,
  onBack,
  onSubmit,
  paymentProof,
  setPaymentProof,
  hotel,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <h2 style={{color:"#3D9346"}}>Complete Payment</h2>

        <BankBox>
            <p><strong style={{color:"#3D9346"}}>Account Name:</strong>Huda Giant Stride Travel And Tours   Ltd</p>
          <br/><p><strong style={{color:"#3D9346"}}>Bank:</strong> GT BANK</p>
          
          <p><strong style={{color:"#3D9346"}} >Account Number:</strong> 3003606285</p>
          <br/>
           <p><strong style={{color:"#3D9346"}}>Bank:</strong> POLARIS BANK</p>
          
          <p><strong style={{color:"#3D9346"}}>Account Number:</strong> 4092023120</p>
<br/>
          <p><strong style={{color:"#3D9346"}} >Amount:</strong> ₦ {Number(hotel.price).toLocaleString()}</p>
        </BankBox>

        <p>Upload Payment Proof</p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPaymentProof(e.target.files[0])}
        />

        <Button onClick={onSubmit}>Submit Booking</Button>

        <Back onClick={onBack}>Back</Back>
        <Close onClick={onClose}>Cancel</Close>
      </Modal>
    </Overlay>
  );
};

export default HotelAccountPaymentModal;

/* STYLES */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 10px;
  }
`;

const BankBox = styled.div`
  background: #f1f7f2;
  padding: 1rem;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 12px;
  background: #3D9346;
  color: #fff;
  border: none;
  border-radius: 8px;
`;

const Back = styled.button`
  background: orange;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;

const Close = styled.button`
  background: red;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;