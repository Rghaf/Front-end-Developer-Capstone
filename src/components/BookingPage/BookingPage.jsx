import React from "react";
import BookingForm from "../BookingForm/BookingForm";
import BookingSlot from "../BookingSlot/BookingSlot";
import "./BookingPage.css";

const BookingPage = ({ avlTimes, submit }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Book Now</h1>
      <div className="myForm">
        <BookingForm times={avlTimes} submitHandler={submit} />
      </div>
      <BookingSlot times={avlTimes} />
    </>
  );
};

export default BookingPage;
