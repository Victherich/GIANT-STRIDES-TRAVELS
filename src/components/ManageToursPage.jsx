import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import TourModal from "./TourModal";
import { useNavigate } from "react-router-dom";

const ManageToursPage = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate(0);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    whats_included: [],
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  // FETCH TOURS
  const fetchTours = () => {
    Swal.fire({
      title: "Loading tours...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    fetch("https://hudagiantstridetravelsandtour.com/api/getTours.php")
      .then((res) => res.json())
      .then((data) => {
        Swal.close();
        if (data.success) {
          setTours(data.tours);
        } else {
          Swal.fire("Error", data.error || "Failed to fetch tours", "error");
        }
      })
      .catch((err) => {
        Swal.close();
        console.error(err);
        Swal.fire("Error", "Something went wrong while fetching tours", "error");
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // DELETE TOUR
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This tour will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3D9346",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleting...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
        });

        fetch("https://hudagiantstridetravelsandtour.com/api/deleteTour.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.close();
            if (data.success) {
              fetchTours();
              Swal.fire("Deleted!", data.message || "Tour has been deleted.", "success");
            } else {
              Swal.fire("Error", data.error || "Failed to delete tour.", "error");
            }
          })
          .catch(() => {
            Swal.close();
            Swal.fire("Error", "Something went wrong while deleting.", "error");
          });
      }
    });
  };

  // OPEN EDIT MODAL
  const handleEdit = (tour) => {
    setForm({
      title: tour.title,
      location: tour.location,
      price: tour.price,
      description: tour.description || "",
      whats_included: tour.whats_included || [],
      image: tour.image || "",
    });
    setEditingId(tour.id);
    setShowModal(true);
  };

  // ADD OR UPDATE
  const handleSubmit = () => {
    const url = editingId
      ? "https://hudagiantstridetravelsandtour.com/api/updateTour.php"
      : "https://hudagiantstridetravelsandtour.com/api/addTour.php";

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("location", form.location);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("whats_included", JSON.stringify(form.whats_included));

    if (form.image instanceof File) formData.append("image", form.image);
    if (editingId) formData.append("id", editingId);

    Swal.fire({
      title: editingId ? "Updating Tour..." : "Adding Tour...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((data) => {
        Swal.close();
        if (data.success) {
          setShowModal(false);
          setForm({ title: "", location: "", price: "", description: "", whats_included: [], image: "" });
          setEditingId(null);
          fetchTours();
          Swal.fire({
            icon: "success",
            title: editingId ? "Updated!" : "Added!",
            text: `Tour successfully ${editingId ? "updated" : "added"}`,
            confirmButtonColor: "#3D9346",
          });
        } else {
          Swal.fire("Error", data.error || "Something went wrong", "error");
        }
      })
      .catch(() => {
        Swal.close();
        Swal.fire("Error", "Something went wrong", "error");
      });
  };

  return (
    <Container>
      <Header>
        <h1>Manage Tours</h1>
        <AddBtn
          onClick={() => {
            setForm({ title: "", location: "", price: "", description: "", whats_included: [], image: "" });
            setEditingId(null);
            setShowModal(true);
          }}
        >
          + Add Tour
        </AddBtn>
      </Header>

      <Grid>
        {tours.map((tour) => (
          <Card key={tour.id} style={{ backgroundImage: `url(https://hudagiantstridetravelsandtour.com/api/${tour.image})` }}>
            <Overlay />
            <Content>
              <h3>{tour.title}</h3>
              <p>{tour.location}</p>
              <Bottom>
                <span>NGN {Number(tour.price).toLocaleString()}</span>
                <Actions>
                    <EditBtn onClick={() => navigate(`/tour/${tour.id}`)}>View</EditBtn>
                  <EditBtn onClick={() => handleEdit(tour)}>Edit</EditBtn>
                  <DeleteBtn onClick={() => handleDelete(tour.id)}>Delete</DeleteBtn>
                </Actions>
              </Bottom>
            </Content>
          </Card>
        ))}
      </Grid>

      <TourModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingId(null);
          setForm({ title: "", location: "", price: "", description: "", whats_included: [], image: "" });
        }}
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        editing={editingId}
      />
    </Container>
  );
};

export default ManageToursPage;

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