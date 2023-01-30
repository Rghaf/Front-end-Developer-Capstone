import React, { useEffect, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "../BookingPage/BookingPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import { fetchAPI, submitAPI } from "../API/API";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";

const Main = () => {
  const date = new Date();
  const navigate = useNavigate();

  //get and update date from api
  const initializeTimes = async () => {
    const apiData = fetchAPI(date);
    dispacth({ type: "GET", data: apiData });
  };

  //call for getting data from api
  useEffect(() => {
    initializeTimes();
  }, []);

  //update the data
  const updateTimes = (state, action) => {
    // this will handle the state chanes
    switch (action.type) {
      //update state from API
      case "GET":
        const newArray = action.data;
        return newArray;
      //remove reserved time and save to storage
      case "RESERVED":
        localStorage.setItem("reserved", action.selectedTime);
        return state.filter((d) => d !== action.selectedTime);
      default:
        return;
    }
  };

  const submitForm = (formData) => {
    console.log("SENDING FOR API", formData);
    if (submitAPI(formData)) {
      console.log("SENT TO API", submitAPI(formData));
      dispacth({
        type: "RESERVED",
        selectedDate: formData.date,
        selectedTime: formData.time,
        // selectedDate: formData.formDate,
        // selectedTime: formData.formTime,
      });
      navigate("/confirmation");
    }
  };

  const [state, dispacth] = useReducer(updateTimes, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              avlTimes={state}
              //   setAvlTimes={(sd) =>
              //     dispacth({
              //       type: "RESERVED",
              //       selectedDate: sd,
              //     })
              //   }
              submit={(input) => submitForm(input)}
            />
          }
        />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
