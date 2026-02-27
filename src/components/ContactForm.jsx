import React, { useState } from "react";
import styled from "styled-components";
import Swal from 'sweetalert2'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  // 🔄 Show loading alert
  Swal.fire({
    title: "Sending...",
    text: "Please wait while we send your message",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const res = await fetch(
      "https://hudagiantstridetravelsandtour.com/api/contact_form_endpoint.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (data.success) {
      // ✅ Success alert
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: data.message,
        confirmButtonColor: "#3D9346",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      // ❌ Backend error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.error,
        confirmButtonColor: "#d33",
      });
    }
  } catch (error) {
    // ❌ Network error
    Swal.fire({
      icon: "error",
      title: "Network Error",
      text: "Please check your internet connection and try again.",
      confirmButtonColor: "#d33",
    });
  }
};

  return (
    <FormContainer>
      <FormHeading>Contact / Book now</FormHeading>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <SubmitBtn type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </SubmitBtn>

        {responseMsg && <Response>{responseMsg}</Response>}
      </Form>
    </FormContainer>
  );
};

export default ContactForm;

/* ================== STYLES ================== */

const FormContainer = styled.div`
  max-width: 700px;
  margin: auto;
`;

const FormHeading = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  color: #3D9346;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  outline: none;

  &:focus {
    border-color: #3D9346;
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  min-height: 140px;
  resize: none;

  &:focus {
    border-color: #3D9346;
  }
`;

const SubmitBtn = styled.button`
  background: #3D9346;
  color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #2f7c38;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
`;

const Response = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`;