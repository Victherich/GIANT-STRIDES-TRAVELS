import React from "react";
import styled from "styled-components";

const TourModal = ({ show, onClose, form, setForm, onSubmit, editing }) => {
  if (!show) return null;

  return (
    <Modal>
      <ModalContent>
        <h2 style={{ color: "#3D9346" }}>
          {editing ? "Edit Tour" : "Add Tour"}
        </h2>

        <Label>Title</Label>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <Label>Location</Label>
        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <Label>Price (NGN)</Label>
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <Label>About this Tour</Label>
        <textarea
          placeholder="Tour description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <Label>What's Included (one per line)</Label>
        <textarea
          placeholder="E.g., 5-star hotel stay"
          value={form.whats_included.join("\n")}
          onChange={(e) =>
            setForm({ ...form, whats_included: e.target.value.split("\n") })
          }
        />

        <Label>Upload Tour Image</Label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />

        <ModalActions>
          <button onClick={onClose} style={{ padding: "5px", cursor: "pointer" }}>
            Cancel
          </button>
          <button onClick={onSubmit} className="save" style={{ padding: "5px", cursor: "pointer" }}>
            Save
          </button>
        </ModalActions>
      </ModalContent>
    </Modal>
  );
};

export default TourModal;

/* ================= STYLES ================= */

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
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