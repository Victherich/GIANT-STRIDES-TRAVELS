import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Card = styled.div`
  background: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  padding: 8px 12px;
  background: #3D9346;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  width: 500px;
  margin: 100px auto;
  border-radius: 10px;
`;

export default function HotelBookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchEmail, setSearchEmail] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    fetch("https://hudagiantstridetravelsandtour.com/api/getBookings.php")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBookings(data.bookings);
          setFilteredBookings(data.bookings); // initialize filtered list
        }
      });
  }, []);

  useEffect(() => {
    const filtered = bookings.filter(b =>
      b.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    setFilteredBookings(filtered);
  }, [searchEmail, bookings]);

  const updateBooking = (id, field, value) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append(field, value);

    fetch("https://hudagiantstridetravelsandtour.com/api/updateHotelBooking.php", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setSelected(prev => ({ ...prev, [field]: value }));
          setBookings(prev =>
            prev.map(b => b.id === id ? { ...b, [field]: value } : b)
          );
        }
      });
  };

  return (
    <Container>
      <h2 style={{color:"#3D9346"}}>Hotel Bookings</h2>

      <SearchInput
        type="text"
        placeholder="Search by email..."
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
      />
      {filteredBookings.length<=0&&<p>
        No bookings yet
      </p>}

      {filteredBookings.map((b) => (
        <Card key={b.id}>
          <p><strong style={{color:"#3D9346"}}>{b.hotel_name}</strong> - {b.bedroom} bedroom(s)</p>
          <p>{b.name} ({b.email})</p>
          <p>₦ {Number(b.price).toLocaleString()}</p>
          <Button onClick={() => setSelected(b)}>View</Button>
        </Card>
      ))}

      {selected && (
        <ModalOverlay onClick={() => setSelected(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3  style={{color:"#3D9346"}}>Hotel Booking Details</h3>

            <p><strong style={{color:"#3D9346"}}>Hotel:</strong> {selected.hotel_name}</p>
            <p><strong style={{color:"#3D9346"}}>Room:</strong> {selected.bedroom}</p>
            <p><strong style={{color:"#3D9346"}}>Price:</strong> ₦{selected.price}</p>

            <hr />

            <p><strong style={{color:"#3D9346"}}>Name:</strong> {selected.name}</p>
            <p><strong style={{color:"#3D9346"}}>Email:</strong> {selected.email}</p>
            <p><strong style={{color:"#3D9346"}}>Phone:</strong> {selected.phone}</p>

            <hr />

            <p><strong style={{color:"#3D9346"}}>Check-in:</strong> {selected.check_in}</p>
            <p><strong style={{color:"#3D9346"}}>Check-out:</strong> {selected.check_out}</p>
            <p><strong style={{color:"#3D9346"}}>Guests:</strong> {selected.guests}</p>

            <hr />

            <p>
              <strong style={{color:"#3D9346"}}>Status:</strong>{" "}
              <select
                value={selected.booking_status}
                onChange={(e) =>
                  updateBooking(selected.id, "booking_status", e.target.value)
                }
              >
                <option value="pending">Pending</option>
                <option value="booked">Booked</option>
                <option value="canceled">Canceled</option>
              </select>
            </p>

            <p>
              <strong style={{color:"#3D9346"}}>Payment:</strong>{" "}
              <select
                value={selected.payment_status}
                onChange={(e) =>
                  updateBooking(selected.id, "payment_status", e.target.value)
                }
              >
                <option value="yet to confirm">Yet to Confirm</option>
                <option value="confirmed">Confirmed</option>
              </select>
            </p>

            <p>
              <strong style={{color:"#3D9346"}}>Proof of Payment:</strong><br />
              <a href={`https://hudagiantstridetravelsandtour.com/api/${selected.payment_proof}`} target="_blank" rel="noreferrer">
                View File
              </a>
            </p>

            <Button onClick={() => setSelected(null)}>Close</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}