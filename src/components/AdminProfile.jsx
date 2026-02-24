import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import { 
  FaPhoneAlt, 
  FaIdCard, 
  FaUserShield, 
  FaUsers, 
  FaUserGraduate, 
  FaKey, 
  FaSchool, 
  FaSpeakerDeck, 
  FaMapMarkedAlt, 
  FaHotel, 
  FaHistory, 
  FaClipboardList, 
  FaPlane,
  FaPassport,
  FaShuttleVan,
  FaUmbrellaBeach
} from "react-icons/fa";
const themeColor = "#3D9346";

// Layout
const Container = styled.div`
  min-height: 100vh;
  background: #f0f5f2;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  color: ${themeColor};
  font-size: 1.5rem;
  font-weight: 700;
  font-style:italic;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const Panel = styled.div`
  background: white;
  border-left: 6px solid ${themeColor};
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PanelLeft = styled.div``;

const AdminName = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const AdminEmail = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const EditButton = styled.button`
  background: ${themeColor};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    opacity: 0.9;
  }
`;

const PanelRight = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: #444;

  @media(max-width:768px){
    width:100%;
    text-align:left;
    margin-top:1rem;
  }
`;

const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActionItem = styled.div`
  background: #eaf4ea;
  border-radius: 8px;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: ${themeColor};
    color: white;

    svg{
      color:white;
    }
  }

  svg{
    font-size:1.4rem;
    color: ${themeColor};
    transition: all 0.25s;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset:0;
  background: rgba(0,0,0,0.4);
  display:flex;
  align-items:center;
  justify-content:center;
`;

const ModalBox = styled.div`
  background:white;
  border-radius:12px;
  padding:2rem;
  max-width:400px;
  width:90%;
`;

const Input = styled.input`
  width:100%;
  padding:0.75rem;
  margin:1rem 0;
  border-radius:6px;
  border:1px solid #ccc;
`;

const SaveButton = styled.button`
  background:${themeColor};
  color:white;
  border:none;
  padding:10px 16px;
  border-radius:6px;
  cursor:pointer;
`;

const AdminDetailsPage = ({ adminId, onNavigate }) => {
  const [admin, setAdmin] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if(!adminId) return;
    axios.get(`https://hudagiantstridetravelsandtour.com//api/get_admin_by_id.php?id=${adminId}`)
      .then(res=>{
        if(res.data.success) setAdmin(res.data.user);
      })
      .catch(()=> Swal.fire("Error","Failed to fetch admin details","error"));
  },[adminId]);

  const handleSave = () => {
    axios.post("https://hudagiantstridetravelsandtour.com/api/update_admin_phone.php", {
      id: admin.id,
      phone
    }).then(res=>{
      if(res.data.success){
        setAdmin(prev=>({...prev, phone}));
        setModalOpen(false);
        Swal.fire("Updated","Phone updated","success");
      }
    })
  }

  if(!admin) return <p style={{textAlign:"center"}}>Loading...</p>;

  return(
    <Container>
      <Header>
        <PageTitle>Admin Dashboard</PageTitle>
      </Header>

      {/* Profile Panel */}
      <Timeline>
        <Panel>
          <PanelLeft>
            <AdminName>👋 {admin.name}</AdminName>
            <AdminEmail>{admin.email}</AdminEmail>
            <EditButton onClick={()=>{setPhone(admin.phone); setModalOpen(true);}}>
              <FaPhoneAlt/>{admin.phone} / Edit Phone
            </EditButton>
          </PanelLeft>

          <PanelRight>
            <p><FaIdCard/> {admin.role}</p>
            {/* <p>ID: {admin.id}</p> */}
            {/* <p>{new Date(admin.created_at).toLocaleDateString()}</p> */}
          </PanelRight>
        </Panel>

      {/* Actions */}
<ActionList>
  <ActionItem onClick={() => onNavigate("tours")}>
    <FaMapMarkedAlt /> Post and Manage Tours
  </ActionItem>

  <ActionItem onClick={() => onNavigate("hotels")}>
    <FaHotel /> Post and Manage Hotels
  </ActionItem>

{/* 
  <ActionItem onClick={() => onNavigate("allstudents")}>
    <FaHistory /> Hotels Booking History
  </ActionItem> */}

  {/* <ActionItem onClick={() => onNavigate("alladmin")}>
    <FaClipboardList /> Tours Booking History
  </ActionItem> */}

  {/* <ActionItem onClick={() => onNavigate("alladmin")}>
    <FaPlane /> Flights Booking History
  </ActionItem> */}


  {/*  */}
 {/* <ActionItem onClick={() => onNavigate("allstudents")}>
  <FaPassport /> Visa / Travel Doc Applications
</ActionItem> */}

{/* <ActionItem onClick={() => onNavigate("alladmin")}>
  <FaShuttleVan /> Airport Transfer / Ground Transport Applications
</ActionItem> */}

{/* <ActionItem onClick={() => onNavigate("alladmin")}>
  <FaUmbrellaBeach /> Travel Insurance Applications
</ActionItem> */}
</ActionList>
      </Timeline>

      {/* Modal */}
      {modalOpen && (
        <ModalOverlay>
          <ModalBox>
            <h3>Edit Phone</h3>
            <Input value={phone} onChange={e=>setPhone(e.target.value)}/>
            <SaveButton onClick={handleSave}>Save</SaveButton>
            <p style={{color:"green", cursor:"pointer", marginTop:"5px"}} onClick={()=>setModalOpen(false)}>Cancel</p>
          </ModalBox>
        </ModalOverlay>
      )}
    </Container>
  )
}

export default AdminDetailsPage;