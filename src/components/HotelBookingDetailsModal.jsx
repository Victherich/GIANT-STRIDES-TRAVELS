import React from "react";
import styled from "styled-components";

const BookingDetailsModal = ({
  isOpen,
  onClose,
  onProceed,
  formData,
  setFormData,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <h2 style={{color:"#3D9346"}}>Enter Your Details</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <Button onClick={onProceed}>Proceed to Payment</Button>
        <Close onClick={onClose}>Cancel</Close>
      </Modal>
    </Overlay>
  );
};

export default BookingDetailsModal;

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
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

const Button = styled.button`
  padding: 12px;
  background: #3D9346;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Close = styled.button`
  background: red;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;