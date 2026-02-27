import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { adminLogout } from '../Features/Slice';
import AdminDetailsPage from './AdminProfile';
import ManageToursPage from './ManageToursPage';
import DashboardHomeButton from './DashboardHomeButton';
import ManageHotelsPage from './ManageHotelsPage';
import HotelBookingHistory from './HotelBookingHistory';
import TourBookingHistory from './TourBookingHistory';

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

const Sidebar = styled.div`
  background:#F4F4F4;
  color: white;
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  // min-height:100vh;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 768px) {
    width: 250px;
    position: static;
    transition: none;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  color:#3D9346;
  font-style:italic;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  background: ${(props) => (props.active ? '#3D9346' : 'transparent')};
  color: ${(props)=>(props.active ? 'white':"#3D9346")};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: all 0.3s ease-in-out;
  font-style:italic;

  &:hover {
    background:#3D9346;
    color:white;
  }
`;

const ContentArea = styled.div`
  flex-grow: 1;
  margin-left: ${(props) => (props.isOpen ? '250px' : '0')};
  transition: margin-left 0.3s ease-in-out;
  width:100%;
`;

const Hamburger = styled.div`
  position: fixed;
  top: 70px;
  left: 20px;
  background:#3D9346;
  color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 300;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

// Main Component
const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');

  const adminInfo = useSelector(state=>state.adminInfo);
  const dispatch = useDispatch();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3D9346",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(adminLogout());
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleMenuClick = (menu) => {
    window.scroll(0,0);
    setActiveMenu(menu);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenuOnOutsideClick = () => setMenuOpen(false);

 const renderContent = () => {
  switch (activeMenu) {
    case "dashboard":
      return (
        <AdminDetailsPage
          adminId={adminInfo.id}
          onNavigate={handleMenuClick}
          onLogout={handleLogout}
        />
      );

    case "tours":
      return <ManageToursPage />;

       case "hotels":
      return <ManageHotelsPage />;

      case "hotelbookinghistory":
      return <HotelBookingHistory />;

         case "tourbookinghistory":
      return <TourBookingHistory />;

    default:
      return (
        <AdminDetailsPage
          adminId={adminInfo.id}
          onNavigate={handleMenuClick}
          onLogout={handleLogout}
        />
      );
  }
};

  return (
    <DashboardContainer>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />

      <Sidebar isOpen={menuOpen}>
        <SidebarHeader>Admin Dashboard</SidebarHeader>

        <SidebarMenu>
          <SidebarMenuItem
            active={activeMenu === 'profile'}
            onClick={() => handleMenuClick('profile')}
          >
            Hi, {adminInfo.name}
          </SidebarMenuItem>

          <SidebarMenuItem onClick={handleLogout}>
            Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>

      <ContentArea isOpen={menuOpen}>
        {renderContent()}
        <DashboardHomeButton onGoHome={()=>setActiveMenu('profile')}/>
      </ContentArea>
    </DashboardContainer>
  );
};

export default AdminDashboard;