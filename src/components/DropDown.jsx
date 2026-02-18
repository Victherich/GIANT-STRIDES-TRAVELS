import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  background: transparent;
  border: none;
  font-weight: 600;
  color: #222;
  cursor: pointer;
  display: flex;
margin-top:4px;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  padding: 0;

  &:hover {
    color: #3d9346;
  }
`;

const Caret = styled(FaChevronDown)`
  font-size: 12px;
  transition: 0.3s;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
`;

const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  width: 260px;
  background: #fff;
  border-radius: 12px;
  list-style: none;
  padding: 8px 0;
  margin: 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  border: 1px solid rgba(0,0,0,0.06);
  z-index: 200;
`;

const Item = styled.li`
  padding: 12px 16px;
  font-size: 0.92rem;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: rgba(61,147,70,0.08);
    color: #3d9346;
    transform: translateX(4px);
  }
`;

export default function HeaderDropdown({ closeMobileMenu }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  const options = [
    {
      label: "Visa assistance & travel documentation",
      href: "/visa-assistance",
    },
    {
      label: "Airport transfers & ground transportation",
      href: "/airport-transfers",
    },
    {
      label: "Travel insurance",
      href: "/travel-insurance",
    },
  ];

  // close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavigate = (href) => {
    navigate(href);
    setOpen(false);
    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Trigger onClick={() => setOpen(!open)}>
        MORE <Caret open={open} />
      </Trigger>

      {open && (
        <Menu>
          {options.map((opt, i) => (
            <Item key={i} onClick={() => handleNavigate(opt.href)}>
              {opt.label}
            </Item>
          ))}
        </Menu>
      )}
    </Wrapper>
  );
}
