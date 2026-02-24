// CenteredBackButton.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ text = "Back", to = -1 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // -1 goes back in history
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        <FaArrowLeft /> {text}
      </Button>
    </Wrapper>
  );
};

export default BackButton;

/* ================= STYLES ================= */
const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;     /* center vertically */
   /* optional light background */
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #3d9346;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  margin:20px;

  &:hover {
    background: #2f7c38;
  }

  svg {
    font-size: 16px;
  }
`;