import React from "react";
import styled from "styled-components";

const HotelModal = ({ show, onClose, form, setForm, onSubmit, editing }) => {
  if (!show) return null;

  return (
    <Modal>
      <ModalContent>
        <h2>{editing ? "Edit Hotel" : "Add Hotel"}</h2>

        <Label>Hotel Name</Label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <Label>Location</Label>
        <input
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <Label>Full Address</Label>
        <input
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <Label>Price</Label>
        <input
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <Label>Bedrooms</Label>
        <input
          type="number"
          value={form.bedroom}
          onChange={(e) => setForm({ ...form, bedroom: e.target.value })}
        />

        <Label>Quantity</Label>
        <input
          type="number"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: e.target.value })}
        />

        <Label>Description</Label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <Label>Amenities (one per line)</Label>
        <textarea
          value={form.amenities.join("\n")}
          onChange={(e) =>
            setForm({ ...form, amenities: e.target.value.split("\n") })
          }
        />

        <Label>Upload 3 Images</Label>
        <input
        type="file"
           accept="image/*"
          multiple
          onChange={(e) =>
            setForm({ ...form, images: Array.from(e.target.files) })
          }
        />

        <ModalActions>
          <button onClick={onClose}>Cancel</button>
          <button className="save" onClick={onSubmit}>
            Save
          </button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};

export default HotelModal;



/* ================= STYLES ================= */

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:200;
`;

const ModalContent = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  width: 450px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  textarea {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 100%;
    font-family: inherit;
  }

  textarea {
    resize: vertical;
    min-height: 60px;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  .save {
    background: #3d9346;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: #3d9346;
  margin-top: 5px;
`;