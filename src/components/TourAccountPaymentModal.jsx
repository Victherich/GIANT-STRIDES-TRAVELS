import React , {useContext} from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Context } from "./Context";

const TourAccountPaymentModal = ({
  isOpen,
  onClose,
  onBack,
  onSubmit,
  paymentProof,
  setPaymentProof,
  tour, // ✅ FIXED (was hotel)
}) => {

  const {bankDetails}=useContext(Context);

  if (!isOpen) return null;

  // ✅ Handle submit with validation
  const handleSubmitClick = () => {
    if (!paymentProof) {
      Swal.fire({
        icon: "error",
        title: "Upload Required",
        text: "Please upload your payment proof before submitting.",
      });
      return;
    }

    onSubmit();
  };

  return (
    <Overlay>
      <Modal>
        <h2 style={{ color: "#3D9346" }}>Complete Payment</h2>

      <BankBox>
            <p><strong style={{color:"#3D9346"}}>Account Name:</strong>{bankDetails.accountName}</p>
          <br/><p><strong style={{color:"#3D9346"}}>Bank:</strong> {bankDetails.bank1}</p>
          
          <p><strong style={{color:"#3D9346"}} >Account Number:</strong> {bankDetails.account1}</p>
          <br/>
           <p><strong style={{color:"#3D9346"}}>Bank:</strong> {bankDetails.bank2}</p>
          
          <p><strong style={{color:"#3D9346"}}>Account Number:</strong> {bankDetails.account2}</p>
<br/>
   <p><strong style={{color:"#3D9346"}}>Bank:</strong> {bankDetails.bank3}</p>
          
          <p><strong style={{color:"#3D9346"}}>Account Number:</strong> {bankDetails.account3}</p>
          <br/>
          <p><strong style={{color:"#3D9346"}} >Amount:</strong> ₦ {Number(tour.price).toLocaleString()}</p>
        </BankBox>

        <p style={{ fontWeight: "500" }}>Upload Payment Proof</p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];

            // ✅ Optional validation (file size)
            if (file && file.size > 2 * 1024 * 1024) {
              Swal.fire({
                icon: "error",
                title: "File too large",
                text: "Please upload an image less than 2MB.",
              });
              return;
            }

            setPaymentProof(file);
          }}
        />

        {/* ✅ Show selected file name */}
        {paymentProof && (
          <FileName>Selected: {paymentProof.name}</FileName>
        )}

        <Button onClick={handleSubmitClick}>Submit Booking</Button>

        <Back onClick={onBack}>Back</Back>
        <Close onClick={onClose}>Cancel</Close>
      </Modal>
    </Overlay>
  );
};

export default TourAccountPaymentModal;





/* ================== STYLES ================== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
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
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

const BankBox = styled.div`
  background: #f1f7f2;
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
`;

const FileName = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

const Button = styled.button`
  padding: 12px;
  background: #3D9346;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #2f7c38;
  }
`;

const Back = styled.button`
  background: orange;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Close = styled.button`
  background: red;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;