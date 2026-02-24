import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import HotelModal from "./HotelModal";
import { useNavigate } from "react-router-dom";

const ManageHotelsPage = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    address: "",
    price: "",
    bedroom: "",
    description: "",
    qty: "",
    amenities: [],
    images: [],
  });

  const [editingId, setEditingId] = useState(null);
const BASE_URL = "https://hudagiantstridetravelsandtour.com/api/";

const fetchHotels = async () => {
  Swal.fire({
    title: "Loading hotels...",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    const res = await fetch(BASE_URL + "getHotels.php");

    // HANDLE BAD RESPONSE
    if (!res.ok) {
      throw new Error("Server error");
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error || "Failed to fetch hotels");
    }

    // 🔥 NORMALIZE DATA (VERY IMPORTANT)
    const formattedHotels = data.hotels.map((hotel) => {
      return {
        ...hotel,

        // Ensure arrays
        images: Array.isArray(hotel.images) ? hotel.images : [],
        amenities: Array.isArray(hotel.amenities) ? hotel.amenities : [],

        // Ensure numbers
        price: Number(hotel.price),
        bedroom: Number(hotel.bedroom),
        qty: Number(hotel.qty),

        // FIX IMAGE URL (if backend returns relative path)
        imagesFull: (hotel.images || []).map(
          (img) =>
            img.startsWith("http")
              ? img
              : BASE_URL + img
        ),
      };
    });

    setHotels(formattedHotels);
    Swal.close();

  } catch (err) {
    Swal.close();
    console.error("FETCH ERROR:", err);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: err.message || "Something went wrong",
    });
  }
};

useEffect(() => {
  fetchHotels();
}, []);





  // DELETE
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete hotel?",
      icon: "warning",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        fetch("https://hudagiantstridetravelsandtour.com/api/deleteHotel.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then(() => fetchHotels());
      }
    });
  };

  // EDIT
  const handleEdit = (hotel) => {
    setForm({
      ...hotel,
      amenities: hotel.amenities || "[]",
      images: [],
    });
    setEditingId(hotel.id);
    setShowModal(true);
  };

// const handleSubmit = () => {
//   if (form.images.length !== 3) {
//     Swal.fire("Error", "Please upload exactly 3 images", "error");
//     return;
//   }

//   const url = editingId
//     ? "https://hudagiantstridetravelsandtour.com/api/updateHotel.php"
//     : "https://hudagiantstridetravelsandtour.com/api/addHotel.php";

//   const formData = new FormData();

//   formData.append("name", form.name);
//   formData.append("location", form.location);
//   formData.append("address", form.address);
//   formData.append("price", form.price);
//   formData.append("bedroom", form.bedroom);
//   formData.append("description", form.description);
//   formData.append("qty", form.qty);
//   formData.append("amenities", JSON.stringify(form.amenities));

//   // IMPORTANT: append images correctly
//   form.images.forEach((file) => {
//     formData.append("images[]", file);
//   });

//   if (editingId) formData.append("id", editingId);

//   Swal.fire({
//     title: editingId ? "Updating Hotel..." : "Adding Hotel...",
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading(),
//   });

//   fetch(url, {
//     method: "POST",
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       Swal.close();

//       if (data.success) {
//         Swal.fire("Success", data.message, "success");
//         setShowModal(false);
//         fetchHotels();
//       } else {
//         Swal.fire("Error", data.error, "error");
//       }
//     })
//     .catch(() => {
//       Swal.close();
//       Swal.fire("Error", "Network error", "error");
//     });
// };

  
const handleSubmit = () => {
  // In editing mode, images are optional
  if (!editingId && form.images.length !== 3) {
    Swal.fire("Error", "Please upload exactly 3 images", "error");
    return;
  }

  const url = editingId
    ? "https://hudagiantstridetravelsandtour.com/api/updateHotel.php"
    : "https://hudagiantstridetravelsandtour.com/api/addHotel.php";

  const formData = new FormData();

  formData.append("name", form.name);
  formData.append("location", form.location);
  formData.append("address", form.address);
  formData.append("price", form.price);
  formData.append("bedroom", form.bedroom);
  formData.append("description", form.description);
  formData.append("qty", form.qty);
  formData.append("amenities", JSON.stringify(form.amenities));

  // Append images only if new files are selected
  if (form.images.length > 0) {
    form.images.forEach((file) => {
      formData.append("images[]", file);
    });
  }

  if (editingId) formData.append("id", editingId);

  Swal.fire({
    title: editingId ? "Updating Hotel..." : "Adding Hotel...",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  fetch(url, {
    method: "POST",
    body: formData,
    // CORS headers handled by server; no need to set here unless credentials are required
  })
    .then((res) => res.json())
    .then((data) => {
      Swal.close();

      if (data.success) {
        Swal.fire("Success", data.message, "success");
        setShowModal(false);
        fetchHotels();
      } else {
        Swal.fire("Error", data.error, "error");
      }
    })
    .catch(() => {
      Swal.close();
      Swal.fire("Error", "Network error", "error");
    });
};

return (
    <Container>
      <Header>
        <h1>Manage Hotels</h1>
        <AddBtn onClick={() => setShowModal(true)}>+ Add Hotel</AddBtn>
      </Header>

      <Grid>
        {hotels.map((hotel) => {
          const images = hotel.imagesFull;

          return (
            <Card key={hotel.id} style={{ backgroundImage: `url(${images[0]})` }}>
              <Overlay />
              <Content>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>

                <Bottom>
                  <span>NGN {Number(hotel.price).toLocaleString()}</span>
                  <Actions>
                    <EditBtn onClick={() => navigate(`/hotel/${hotel.id}`)}>
                      View
                    </EditBtn>
                    {/* <EditBtn onClick={() => handleEdit(hotel)}>Edit</EditBtn> */}
                    <DeleteBtn onClick={() => handleDelete(hotel.id)}>
                      Delete
                    </DeleteBtn>
                  </Actions>
                </Bottom>
              </Content>
            </Card>
          );
        })}
      </Grid>

      <HotelModal
        show={showModal}
        onClose={() => setShowModal(false)}
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        editing={editingId}
      />
    </Container>
  );
};

export default ManageHotelsPage;


/* ================= STYLES ================= */

const Container = styled.div`padding: 40px;`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 { color: #3d9346; }
`;

const AddBtn = styled.button`
  background: #3d9346;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover { background: #2f7c38; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  height: 250px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.3s;
  &:hover { transform: translateY(-6px); }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

const Content = styled.div`
  position: relative;
  color: white;
  padding: 15px;
  width: 100%;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Actions = styled.div`display: flex; gap: 10px;`;

const EditBtn = styled.button`
  background: #3d9346;
  border: none;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  background: red;
  border: none;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
`;