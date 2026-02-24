import React, { useState } from "react";
import Swal from "sweetalert2";
import PaystackPop from '@paystack/inline-js';

const HotelPayment = ({ hotel, checkIn, checkOut, guests }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const payWithPaystack = () => {
    if (!hotel) return;

    const amount = Number(hotel.price); // amount per night
    const nights =
      checkIn && checkOut
        ? (new Date(checkOut) - new Date(checkIn)) / (1000 * 3600 * 24)
        : 1;

    const totalAmount = amount * (nights || 1);

    setIsSubmitting(true);
    const paystack = new window.PaystackPop();
    paystack.newTransaction({
      key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4", // 🔥 YOUR PAYSTACK PUBLIC KEY
      email: hotel.customerEmail || "guest@example.com", // collect from form or user login
      amount: totalAmount * 100, // in kobo
      firstname: hotel.customerName || "Guest",
      phone: hotel.customerPhone || "",
      channels: ["card"],
      onSuccess: (transaction) => {
        sendPaymentEmail(transaction.reference, totalAmount);
      },
      onCancel: () => {
        setIsSubmitting(false);
        Swal.fire({
          icon: "info",
          title: "Payment Cancelled",
          text: "You cancelled the transaction.",
        });
      },
      onClose: () => {
        setIsSubmitting(false);
      },
    });
  };

  const sendPaymentEmail = async (reference, totalAmount) => {
    try {
      const response = await fetch(
        "https://hudagiantstridetravelsandtour.com/api/send-booking-email.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reference,
            name: hotel.customerName || "Guest",
            email: hotel.customerEmail || "guest@example.com",
            phone: hotel.customerPhone || "",
            origin: hotel.name,
            destination: hotel.location,
            checkIn,
            checkOut,
            guests,
            amount: totalAmount,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) throw new Error(result.error || "Email failed");

      Swal.fire({
        icon: "success",
        title: "Payment Successful",
        text:
          "An email with your booking details has been sent. Check inbox or spam.",
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Payment succeeded, but email failed",
        text: "Please contact support to confirm your booking.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <button
      disabled={isSubmitting}
      onClick={payWithPaystack}
      style={{
        background: "#3D9346",
        color: "#fff",
        padding: "12px",
        width: "100%",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        marginTop: "1rem",
      }}
    >
      {isSubmitting ? "Processing..." : "Pay & Reserve"}
    </button>
  );
};

export default HotelPayment;